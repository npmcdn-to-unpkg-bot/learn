import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `
    <ul>
        <li  *ngFor="#name of names">{{ name }}</li>
    </ul>
    `
})
class HelloWorld {
    names: Array<string>;
    constructor() {
        this.names = ['王二', '妮儿', '尼古拉斯赵四'];
    }
}
bootstrap(HelloWorld);
