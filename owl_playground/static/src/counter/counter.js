/** @odoo-module */

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    setup() {
        this.state = useState({ value: 1 });
    }

    increment() {
        this.state.value = this.state.value + 1;

    }
    decrement() {
        if(this.state.value > 0){

        this.state.value = this.state.value - 1;
        }
    }
}

Counter.template = "owl_playground.Counter";