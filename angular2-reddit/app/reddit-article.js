System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['article'],
                        template: "\n<div class=\"row m-t-1\">\n    <div class=\"col-sm-12\">\n        <div>\n            <a href=\"{{ article.link }}\">{{ article.title }}</a>{{ article.domain() }}\n            <span class=\"m-l-2\">{{ article.votes }}\u7968</span>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"voteUp()\">\u9876</button>\n        <button class=\"btn btn-primary\" (click)=\"voteDown()\">\u8E29</button>\n    </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=reddit-article.js.map