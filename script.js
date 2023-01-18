console.log(1);
console.log(2);

setTimeout(() -› {
  console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);

const request = new XMLHttpRequest();

request.addEventlistener("readystatechange', () => {
//console. log (request, request. readystate);
if (request.readyState === 4) {
  console.log(request.responseText);
}
});

request.open('GET', 'https:///jsonplaceholder .typicode.com/todos/*);
request.send();


const request = new XMLAttpRequest();

request.addEvent Listener('readystatechange', () => {
  //console. log (request, request. const request: XMLittpRequest

  if (request.readyState =* = 4 & 8 request status E = 200){

  console.log(request, request.response Text);) 
  
else if (request readyState = - 4) {
    console.log("could not fetch the data");

    request.open('GET request. sendo):



const getTodos = (callback) => {

      const request = new XMLHttpRequest();
      request.addEvent Listener('readystatechange', () =› {
        1f(request.readyState === 4 88 request.status === 200){
        callback(undefined, request.responseText);

else if (request.readyState === 4) {
      callback(coud not fetch data *, undefined);

      request.open("GET') https:///sonplaceholder.typicode.com/todos/
request, sendo);
      getTodos((err, data) ->
        console log('callback fired):
console Jog(err) - 1 else it
console Jog(date):

          request.open('GET',
            "https:///jsonplaceholder.typicode.com/todos/*);

request.send();
      console.log(1);
console.1og(2);

      LetTodos((err, data)

console.log('callback fired*)

1f(err)(
        console.log(err);
      console, 1og(data);
      console.log(3);
console.1og(4);

      request.addEventListener('readystatechange', () =› {

        if(request .readyState =** 4 88 request.status sir 200){

        const data - JSON - parse(request.responseText);

        callback(undefined, data);

] else 1f(request.readyState ==* 4){

          callback('coud not fetch data', undefined);

          request.open('GET', "todos. json.*);

request.send);

          getTodos((err, data) »> (console.log(* callback fired'"):

1F(err)(console, log(err);

J else

          console.log(data);