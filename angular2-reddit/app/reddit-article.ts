import {Component} from 'angular2/core';
import {Article} from "./article";

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    template: `
<div class="row m-t-1">
    <div class="col-sm-12">
        <div>
            <a href="{{ article.link }}">{{ article.title }}</a>{{ article.domain() }}
            <span class="m-l-2">{{ article.votes }}票</span>
        </div>
        <button class="btn btn-primary" (click)="voteUp()">顶</button>
        <button class="btn btn-primary" (click)="voteDown()">踩</button>
    </div>
</div>`
})

export class ArticleComponent {
    article:Article;

    constructor() {
    }

    voteUp():void {
        this.article.voteUp();
    }

    voteDown():void {
        this.article.voteDown();
    }
}

