var myTodoList = new Vue({
    el : "#app",
    data : {
        todos : [
            {
                text : "Fare il bucato",
                done : false
            },
            {
                text : "Fare la spesa",
                done : true
            },
            {
                text : "Andare dal barbiere",
                done : true
            }
        ]
    }   
});