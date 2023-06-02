// It imports the readFileSync and writeFileSync functions from the built-in fs (file system) module.
// It imports the entire fs module, assigning it to the variable fs.
// It uses the readFileSync function to read the contents of two files, first.txt and second.txt, located in the ./content/ directory. The files are read with the utf8 encoding, which indicates that the content should be interpreted as a UTF-8 encoded string.
// It logs the contents of first.txt and second.txt to the console.
// It uses the writeFileSync function to write a new file called result-sync.txt in the ./content/ directory. The file content is generated using a template string, which includes the values of first and second variables.
// It uses the writeFileSync function again to append additional content to the existing result-sync.txt file. The flag: 'a' option specifies that the file should be opened in append mode, allowing the content to be added to the end of the file.


const {readFileSync, writeFileSync} = require('fs');




const fs = require('fs');


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


console.log(first, second);


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});