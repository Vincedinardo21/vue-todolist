var myTodoList = new Vue({
    el : "#app",
    data : {
        newTodo : {
            text : "",
            done : true
        },
        todos : [
            {
                text : "Deep Purple - Smoke on the water",
                done : false
            },
            {
                text : "Oasis - Stand by me",
                done : true
            },
            {
                text : "Pink Floyd - Another brick in the wall",
                done : true
            },
            {
                text : "Blink 182 - All the small things",
                done : false
            }
        ]
    },
    methods : {
        addItem(){
            if(this.newTodo.text !== ""){
                this.todos.push(this.newTodo);
                this.newTodo = ""; 
            }
        }
    }
});