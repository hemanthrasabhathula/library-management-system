import { Branch } from "./branch.model";

export class Copy {
    _id: String;
    title: String;
    author: String;
    branch_id: String;
    genre: String;
    status: String;
    ISBN:String;
    branch_info: Branch;
    constructor(_id = '', title = '', author = '', branch_id = '', genre = '', status = '', ISBN = '') {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.branch_id = branch_id;
        this.genre = genre;
        this.status = status;
        this.ISBN = ISBN;
        this.branch_info = new Branch();
    }
}