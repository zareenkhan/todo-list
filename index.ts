#! /usr/bin/env node
import inquirer from "inquirer";
let todos: string[]=[];
let loop=true;
while(loop){
    const answers:{
        TODO: string,
        addMore:boolean
    } = await inquirer.prompt([{
        type:"input",
        name:"TODO",
        message:"What do you want to add in your TODO? "
    },
    {
        type:"confirm",
        name:"addMore",
        message:"What do you want to add more TODO?"
    },
]);
const {TODO,addMore}=answers;
loop=addMore;
if(TODO){
    todos.push(TODO);
}
else{
    console.log("Kindly add valid input")
}
}
if (todos.length>0){
console.log("your Todo List Is:");
todos.forEach(todo=>{
    console.log(todo);
    
});
}
else{
    console.log("No Todos Found");
    
}