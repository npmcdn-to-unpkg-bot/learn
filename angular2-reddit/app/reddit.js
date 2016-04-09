System.register(['angular2/platform/browser', 'angular2/core', "./reddit-article", "./article"], function(exports_1, context_1) {
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
    var browser_1, core_1, reddit_article_1, article_1;
    var RedditApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reddit_article_1_1) {
                reddit_article_1 = reddit_article_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new article_1.Article('淘宝', 'http://www.taobao.com'),
                        new article_1.Article('京东', 'http://www.jd.com')
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    this.articles.push(new article_1.Article(title.value, link.value));
                    title.value = '';
                    link.value = '';
                };
                RedditApp.prototype.sortedArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [reddit_article_1.ArticleComponent],
                        template: "\n<div class=\"container m-t-1\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <form>\n                <h3>\u6DFB\u52A0\u4E00\u4E2A\u94FE\u63A5</h3>\n                <fieldset class=\"form-group\">\n                    <label for=\"title\">\u6807\u9898</label>\n                    <input type=\"text\" name=\"title\" placeholder=\"\u8BF7\u8F93\u5165\u6807\u9898\" class=\"form-control\" #newTitle>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label for=\"link\">\u94FE\u63A5</label>\n                    <input type=\"text\" name=\"link\" placeholder=\"\u8BF7\u8F93\u5165\u94FE\u63A5\" class=\"form-control\" #newLink>\n                </fieldset>\n                <button class=\"btn btn-primary\" (click)=\"addArticle(newTitle, newLink)\">\u63D0\u4EA4</button>\n            </form>\n        </div>\n    </div>\n    <reddit-article *ngFor=\"#footbar of sortedArticles()\" [article]=\"footbar\"></reddit-article>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            browser_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=reddit.js.map