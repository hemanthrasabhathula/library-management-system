export class Branch {
    _id: String;
    location: String;
    name: String;
    constructor(_id = '', location = '', name = '') {
        this._id = _id;
        this.location = location;
        this.name = name;
    }
}