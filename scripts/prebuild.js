const fs = require('fs');
const path = require('path');

console.log('Cleaning up `dist`...');
const directory = 'dist';
if (fs.existsSync(directory)) {
  fs.rmSync(directory, { recursive: true, force: true });
}
fs.mkdirSync(directory);

console.log('Copying styles...');
fs.copyFileSync('./static/style.css', path.join(directory, 'style.css'));
