// It imports the readFile and writeFile functions from the fs module.
// It logs 'start' to the console.
// It asynchronously reads the contents of the file first.txt located in the ./content/ directory using the readFile function. The file is read with the utf8 encoding.
// In the callback function passed to readFile, it checks if an error occurred during the file reading. If an error is present, it logs the error to the console and returns.
// If no error occurred, it assigns the file content to the first variable and logs the result to the console.
// It then asynchronously reads the contents of the file second.txt located in the ./content/ directory using the readFile function. The file is read with the utf8 encoding.
// Again, in the callback function passed to readFile, it checks if an error occurred during the file reading. If an error is present, it logs the error to the console and returns.
// If no error occurred, it assigns the file content to the second variable and logs the result to the console.
// It then asynchronously writes the combined content of first and second variables into a new file called result-async.txt in the ./content/ directory using the writeFile function.
// In the callback function passed to writeFile, it checks if an error occurred during the file writing. If an error is present, it logs the error to the console and returns.
// If no error occurred, it logs 'done with the task' to the console.
// Finally, it logs 'starting next task' to the console.


const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=> {
   if (err) {
       console.log(err);
       return 
   }
   const first = result;
   console.log(result);
   readFile('./content/second.txt','utf8', (err, result)=> {
       if (err) {
           console.log(err);
           return 
       }
       const second = result;
       console.log(result);
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
           if (err) {
               console.log(err);
               return 
           }
           console.log('done with the task');
       }
       );
    })
});


console.log('starting next task');