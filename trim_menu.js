const fs = require('fs');  
const content = fs.readFileSync('src/data/menuItems.js', 'utf8');  
const marker = '    .slice(0, max);\r\n};\r\n';  
const idx = content.indexOf('.slice(0, max)');  
const end = content.indexOf('\n', idx) + 1;  
const end2 = content.indexOf('\n', end) + 1;  
fs.writeFileSync('src/data/menuItems.js', content.substring(0, end2));  
console.log('Done, file length: ' + content.substring(0, end2).length);  
