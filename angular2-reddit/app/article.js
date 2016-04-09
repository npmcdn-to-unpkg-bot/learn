System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Article;
    return {
        setters:[],
        execute: function() {
            Article = (function () {
                function Article(title, link) {
                    this.title = title;
                    this.link = link;
                    this.votes = 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                Article.prototype.domain = function () {
                    try {
                        var link = this.link.split('//')[1];
                        return link.split('/')[0];
                    }
                    catch (error) {
                        return null;
                    }
                };
                return Article;
            }());
            exports_1("Article", Article);
        }
    }
});
//# sourceMappingURL=article.js.map