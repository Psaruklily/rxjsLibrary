//LESSON 1. CREATING STRIM, SUBSCRIBE
let stream$ = rxjs.Observable.create(function(observer) {
    observer.next('Hello, Lili');

    setTimeout(() => {
        observer.next('After 3 seconds');
    }, 3000);

    setTimeout(() => {
        observer.next('After 2 seconds')
    }, 2000);

    setTimeout(() => {
        observer.next('After 5 seconds')
    }, 5000);

    observer.next('Hello, Oleh!')

    observer.complete(); //форсоване завершення стріма, який і вбиває слухачів

});

stream$.subscribe(
    function(data) {
        console.log('Subscribe: ', data)
    },
    function(error) {
        console.log('Error: ', error)
    },
    function() {
        console.log('Completed!') // Функція, завдяки якій можна дізнатися коли завершився форсований стрім
    }
);

//---------------------------------------------------------------------------------------------------------------------------------------
//LESSON 2. rxjs.fromEvent()

let button = document.querySelector('button');

let btn$ = rxjs.fromEvent(button, 'click');

btn$.subscribe(function(event) {
    console.log(event)
})

rxjs.fromEvent(document.querySelector('input'), 'keyup')
    .subscribe(event => console.log(event))