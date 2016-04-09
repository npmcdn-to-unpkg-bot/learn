export class Article {
    votes: number;
    link: string;
    title: string;

    constructor(title:string, link:string) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    domain():string {
        try {
            let link:string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (error) {
            return null;
        }
    }
}