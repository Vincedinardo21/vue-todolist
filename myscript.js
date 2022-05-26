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
                done : true
            }
        ]
    },
    methods : {
        addItem(){
            this.todos.push(this.newTodo.text);
            // this.newTodo.text = "";
        }
    }
});