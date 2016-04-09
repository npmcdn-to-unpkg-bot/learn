import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

import {ArticleComponent} from "./reddit-article";
import {Article} from "./article";

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    template: `
<div class="container m-t-1">
    <div class="row">
        <div class="col-sm-6">
            <form>
                <h3>添加一个链接</h3>
                <fieldset class="form-group">
                    <label for="title">标题</label>
                    <input type="text" name="title" placeholder="请输入标题" class="form-control" #newTitle>
                </fieldset>
                <fieldset class="form-group">
                    <label for="link">链接</label>
                    <input type="text" name="link" placeholder="请输入链接" class="form-control" #newLink>
                </fieldset>
                <button class="btn btn-primary" (click)="addArticle(newTitle, newLink)">提交</button>
            </form>
        </div>
    </div>
    <reddit-article *ngFor="#footbar of sortedArticles()" [article]="footbar"></reddit-article>
</div>
    `
})
class RedditApp {
    articles:Article[];

    constructor() {
        this.articles = [
            new Article('淘宝', 'http://www.taobao.com'),
            new Article('京东', 'http://www.jd.com')
        ]
    }

    addArticle(title:HTMLInputElement, link:HTMLInputElement) {
        this.articles.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
    }

    sortedArticles():Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}
bootstrap(RedditApp);