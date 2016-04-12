import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup} from 'angular2/common';

@Component({
    selector: 'my-form',
    directives: [FORM_DIRECTIVES],
    template: `
<div class="container m-t-1">
    <div class="row">
        <div class="col-sm-12">
            <h2>SKU DEMO</h2>
        </div>
        <div class="col-sm-12">
            <form [ngFormModel]="myForm" (submit)="onSubmit(myForm.value)">
                <div class="form-group">
                    <label>SKU</label>
                    <input [ngFormControl]="myForm.controls['sku']" type="text" placeholder="sku name" class="form-control">
                </div>
                <input type="submit" value="submit" class="btn btn-primary">
            </form>
        </div>
    </div>
</div>
    `
})
export class MyForm {
    myForm: ControlGroup;

    constructor(fb: FormBuilder){
        this.myForm = fb.group({
            sku: ['ABC123']
        });
    }

    onSubmit(value: any): void{
        console.log(value);
    }
}

bootstrap(MyForm);