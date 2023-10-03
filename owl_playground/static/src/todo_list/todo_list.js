/** @odoo-module */

import { Todo } from "../todo/todo";

import { Component , useState, useRef, onWillStart, onWillRender, onRendered, onMounted} from "@odoo/owl";
import { useAutofocus } from "../utils";

export class TodoList extends Component {
    inputRef = useRef("todoListInput");
    setup() {
        this.todoList = useState([]);
        this.recentlyAddedItems = useState([]);

        this.id =1;
        useAutofocus("todoListInput");

        onWillStart(async () => {
            console.log("++++++++++onWillStart++++++");
            // this.data = await this.loadData()
        });

        onWillRender(async () => {
            console.log("++++++++++onWillRender++++++");
            
        });

        onRendered(async () => {
            console.log("++++++++++onRendered++++++");
            
        });

        onMounted(async () => {
            console.log("++++++++++onMounted++++++");
            // this.data = await this.loadData()
        });

        // onWillStart(async () => {
        //     console.log("++++++++++onWillStart++++++");
        //     // this.data = await this.loadData()
        // });
    }

    message_box(){
        const message_name = prompt("please write your name")
        // let message_convert_name = parseInt(message_name);
        let num = 0;
        if(message_name){
              return message_name;
        }
        else{
            num++;
            if(num <=3 ){
                return this.message_box();
            }
            else{
                document.alert("bhai tu ja"); 
                return 123;
            }
        }
    }

    objectmethod(description){
        const newTodo = { 
                id: this.id,
                description: description ,
                done : false
            };
            this.todoList.push(newTodo);
            this.id++;
            document.getElementById("todo_name").value = "";
    }

    // add_todo(){
    //     const _name = document.getElementById("todo_name").value;
    //     // let normal_name = parseInt(_name);
    //     if(!_name){
    //         let forgot_name = this.message_box();
    //         if(forgot_name){
    //             this.objectmethod(forgot_name);
    //         }
    //     }
    //     else{            
    //             this.objectmethod(_name);
    //     }

    //     this.inputRef.el.focus()
    // }
    add_todo(ev) {
        if (ev.keyCode === 13){
                const description = document.getElementById('todo_name').value;
                if (!description) {
                    let forgot_name = this.message_box();
                    if(forgot_name){
                        this.objectmethod(forgot_name);
                    }
                }
                else{
                    this.objectmethod(description);
                }
                this.inputRef.el.focus()
            }
    }

    delete_todo(){
        const deleteElement = document.getElementById("delete_todo").value;
        let delete_id = parseInt(deleteElement);
        if(deleteElement){
            const item = this.todoList.find((mainItem) => mainItem.id === delete_id);
            if(item){
                const index = this.todoList.indexOf(item);
                this.todoList.splice(index, 1);
            }
        }
        else{
             window.alert("your accessing the id out the of our database");
        }
    }

    checkTodo(event){
        let checkbox = event.target;
        const v = checkbox.getAttribute('data-id');
        console.log(v);
        const item = this.todoList.find((mainItem) => mainItem.id === parseInt(v));

        if(checkbox.checked){
            // const button = event.currentTarget;
            item.done=true;

        }
        else{
            item.done=false;
        }
    }
    del_check_todo(event) {
        const button = event.currentTarget;
        const v = button.getAttribute('data-id');
        const itemIndex = this.todoList.findIndex((mainItem) => mainItem.id === parseInt(v));
        if (itemIndex !== -1) {
            this.todoList.splice(itemIndex, 1);
        }
    }
    update_todo(event) {
        const button = event.currentTarget;
        const update_id = parseInt(button.getAttribute("data-id"));
        const updatedDescription = prompt("Enter updated description:");

        if (updatedDescription !== null) {
            
            const todoItem = this.todoList.find((mainitem) => mainitem.id === update_id);

            if (todoItem) {
                
                todoItem.description = updatedDescription;
            }
        }
        else{

        }
    }

    // add_Pop_todo() {

    //     const description = this.inputRef.el.value;
    //     if (description) {
    //         this.objectmethod(description);
    //         this.recentlyAddedItems.unshift({ id: this.id, description });
    //         this.id++;
    //         this.inputRef.el.value = "";
    //     }
    // }
 
}

TodoList.components = { Todo };
TodoList.template = "owl_playground.TodoList";