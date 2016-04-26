System.register(['angular2/platform/browser', 'angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, common_1;
    var MyForm;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            MyForm = (function () {
                function MyForm(fb) {
                    this.myForm = fb.group({
                        sku: ['', common_1.Validators.required]
                    });
                }
                MyForm.prototype.onSubmit = function (value) {
                    console.log(value);
                };
                MyForm = __decorate([
                    core_1.Component({
                        selector: 'my-form',
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n<div class=\"container m-t-1\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h2>SKU DEMO</h2>\n        </div>\n        <div class=\"col-sm-12\">\n            <form [ngFormModel]=\"myForm\" (submit)=\"onSubmit(myForm.value)\">\n                <div class=\"form-group\">\n                    <label>SKU</label>\n                    <input [ngFormControl]=\"myForm.controls['sku']\" type=\"text\" placeholder=\"sku name\" class=\"form-control\">\n                </div>\n                <input type=\"submit\" value=\"submit\" class=\"btn btn-primary\">\n            </form>\n        </div>\n    </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], MyForm);
                return MyForm;
            }());
            exports_1("MyForm", MyForm);
            browser_1.bootstrap(MyForm);
        }
    }
});
//# sourceMappingURL=form.js.map