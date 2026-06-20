const fs = require('fs');

const content = fs.readFileSync('src/lib/catalog-data.ts', 'utf-8');

// The file exports catalogData array. We can use a simple regex to extract names and images.
const categoryRegex = /name:\s*"([^"]+)",[\s\S]*?description:[\s\S]*?image:\s*"([^"]+)",[\s\S]*?subcategories:\s*\[([\s\S]*?(?=\}\s*\]\s*\}))/g;
const subcatRegex = /id:\s*"[^"]+",\s*name:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)"/g;

let match;
let categories = [];
let allImagesUsed = [];

// Since parsing nested JS with regex is flaky, let's compile it with tsc in memory, or just use eval since it's an array literal.
// We can slice out the array from the file.
const start = content.indexOf('export const catalogData: Category[] = [');
if (start !== -1) {
  const end = content.indexOf('export function getCategoryById');
  let arrayStr = content.substring(start, end).replace('export const catalogData: Category[] = ', '').trim();
  if (arrayStr.endsWith(';')) arrayStr = arrayStr.slice(0, -1);
  
  // arrayStr is a valid JS array but we don't have the interfaces.
  // We can evaluate it by adding a dummy Category type or just eval.
  try {
    const data = eval(arrayStr);
    
    console.log("=== CATEGORY TO IMAGE MAPPING ===");
    data.forEach(cat => {
      console.log(`\n${cat.name} → ${cat.image.split('/').pop()}`);
      if (cat.image) allImagesUsed.push(cat.image.split('/').pop());
      
      cat.subcategories.forEach(sub => {
        console.log(`  - ${sub.name} → ${sub.image.split('/').pop()}`);
        if (sub.image) allImagesUsed.push(sub.image.split('/').pop());
      });
    });
    
    console.log("\n=== IMAGE FILES AUDIT ===");
    const availableFiles = fs.readdirSync('public/assets/product');
    
    // Count occurrences
    const counts = {};
    allImagesUsed.forEach(img => {
      counts[img] = (counts[img] || 0) + 1;
    });
    
    availableFiles.forEach(file => {
      const c = counts[file] || 0;
      let status = "Unused";
      if (c === 1) status = "Used (1 time)";
      if (c > 1) status = `Used multiple times (${c} times)`;
      
      console.log(`${file} - ${status}`);
    });
    
  } catch (e) {
    console.log("Error evaluating:", e.message);
  }
}
