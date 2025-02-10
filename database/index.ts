import User from "./models/usersModel";
import Post from "./models/postsModel";

export default class Database {
    public users = User;
    public posts = Post;
}