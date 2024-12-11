import { DataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: DataBaseService) {

    } 

    async getPosts() {
        // this.posts = await this.localDataBaseService.getFakePosts();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}