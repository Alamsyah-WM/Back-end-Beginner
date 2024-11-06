/* Asynchronous (Non-blocking) use fs.readFile()
const fs = require('fs');

fs.readFile('notes.txt', 'utf8', (err, data) => {

    if (err) {
        console.error('Error reading file:', err);
        return;
    }

console.log(data);
});
 */

// Synchronous (Blocking) use fs.readFilesync()
const fs = require('fs');

try {
    const data = fs.readFileSync('notes.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error('Error reading file:', err);
}
