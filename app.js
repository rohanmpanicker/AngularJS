var app = angular.module("todoApp",[]);

app.controller("todoCtrl",Ctrl1);


function Ctrl1(){
    this.editMode=false;
    this.todos = [
        "Learn Angular",
        "Learn MongoDB",
        "Learn Node.js"
    ]


    this.addNewTodo = function(){

        this.todos.push(this.newTodo);
        this.newTodo="";

    }

    this.deleteTodo = function(index){
        this.todos.splice(index,1);

    }

    this.editTodo = function(){
        this.editMode=!this.editMode;


    }


}

