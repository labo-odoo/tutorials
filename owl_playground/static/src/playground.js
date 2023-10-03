/** @odoo-module **/

// import { Component, useState } from "@odoo/owl";
// import { Todo } from "./todo/todo";
import { Counter } from "./counter/counter";
import { Component, useState } from "@odoo/owl";
import { TodoList } from "./todo_list/todo_list";

// import { useAutofocus } from "../utils";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Counter, TodoList };
    // static components = { Counter, Todo };
        // setup() {
            // this.id="";
            // this.name="";
            // this.todo = [];

            // this.state = useState({
            //     todo : [],
            //     name : "",
            //     id : 1

            // });
            // this.todo = { id:1, name: 123, state: false };
        // }
    
}