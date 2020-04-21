console.log('This is the code for creating a todo list!');

/*
    V1 Requirements
        It should have a place to store todos
        It should have a way to display todos
        It should have a way to add new todos
        It should have a way to change a todo
        It should have a way to delete a todo
*/

var todos = ['item 1', 'item 2', 'item 3']; //store todos
console.log('My todos: ', todos); //display todos
todos.push('item 4'); //add new todos
console.log('My todos: ', todos); //['item 1', 'item 2', 'item 3', 'item 4']
todos[0] = 'item 1 updated';  //change a todo
console.log(todos);
todos.splice(0,1); //(where to start deleting, how many to delete) delete a todo
console.log(todos); //[ 'item 2', 'item 3', 'item 4' ]

/*
================= Functions =================
*/

//Function are just recipes

function makeTurkeySandwhich(){
    //get one slice of bread;
    //add turkey;
    //put a slice of bread on top;
}
makeTurkeySandwhich();

//Sandwich recipe form. Expand a more detailed sanwich form
function makeSandwichWith(filling){
    //get one slice of bread;
    //add turkey;
    //put a slice of bread on top

}
makeSandwichWith();

function sayHiTo(person){
    console.log('Hi', person);
}


sayHiTo('Alex'); //person = 'alex'

/*
    V2 Requirements
        It should have a function to display todos
        It should have a function to add todos
        It should have a function to change todos
        It should have a function to delete todos
*/

todos.unshift('item 1');
console.log(todos);

function displayTodos(){
    console.log('My todos: ', todos);
}

displayTodos(todos); //function to display todos

function addTodo(todo){ //function to add todo
    todos.push(todo);
    displayTodos(); //function within a function
}

addTodo('Hello there!');

function changeTodo(position, newValue){ //function to change todo
    todos[position] = newValue;
    displayTodos();
}

displayTodos();

changeTodo(0, 'changed');
changeTodo(0, 'item 1');

function deleteTodo(position){ //function to delete todos
    todos.splice(position,1);
    displayTodos();
}

displayTodos();
deleteTodo(4);


var myName = 'Alex';
function sayName(){
    console.log(myName);
}
sayName(); //You can call variables that are located outside a function! Y
//Can't call a variable located inside a function 
//Varible visibility = scope


