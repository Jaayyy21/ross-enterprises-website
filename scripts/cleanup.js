import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(process.cwd(), 'src'), (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace py-24 lg:py-32
    content = content.replace(/py-24\s+lg:py-32/g, 'py-16 md:py-24');
    
    // Replace standalone py-24
    content = content.replace(/(?<!-)\bpy-24\b(?!-)/g, 'py-16 md:py-24');

    // Also replace lg:py-32 if it was left over
    content = content.replace(/(?<!-)\blg:py-32\b(?!-)/g, 'md:py-24');
    
    // Remove unoptimized from Image tags where possible
    // Wait, let's just replace `unoptimized` that stands alone as an attribute
    content = content.replace(/\bunoptimized\b/g, '');

    // Cleanup any empty lines left by unoptimized removal if it was alone on a line
    content = content.replace(/^\s*\n/gm, '\n');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});
