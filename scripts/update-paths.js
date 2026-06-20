const fs = require('fs');
let content = fs.readFileSync('src/lib/company-data.ts', 'utf-8');

content = content.replace(/\/assets\/industry\//g, '/assets/industries/');

// The logo might have been updated or not, let's just replace the exact URL if it's there
content = content.replace(/logo: "https:\/\/images\.unsplash\.com\/photo-1513828583688-c52646db42da[^"]*"/g, 'logo: "/assets/logos/ross-enterprises/logo.png"');

fs.writeFileSync('src/lib/company-data.ts', content);
console.log('Updated paths successfully.');
