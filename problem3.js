// It defines a function called getTodos.
// Inside the getTodos function, it creates a new instance of the XMLHttpRequest object, which is a built-in browser API used to send HTTP requests.
// It adds an event listener to the readystatechange event of the XMLHttpRequest object. This event is fired whenever the state of the request changes.
// Inside the event listener callback function, it checks if the request's readyState is equal to 4 (indicating that the request is complete) and if the status is 200 (indicating a successful response).
// If both conditions are met, it logs the response text (the fetched todos) to the console.
// If the readyState is 4 but the status is not 200, it logs 'could not fetch the data' to the console.
// It then opens an HTTP GET request using the open method of the XMLHttpRequest object. The URL used for the request is 'https://jsonplaceholder.typicode.com/todos/'.
// Finally, it sends the HTTP request using the send method of the XMLHttpRequest object.



const getTodos = () => {
    const request = new XMLHttpRequest();
   
   
   request.addEventListener('readystatechange', ()=>{
   
   
    if(request.readyState === 4 && request.status ===200){
      console.log(request.responseText)
       }
      else if (request.readyState === 4){
        console.log('could not fetch the data');
      }
   });
   
   
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
   request.send();
   }
   
   
   
   
   getTodos();
   getTodos();