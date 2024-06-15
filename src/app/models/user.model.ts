export class User {
    _id: String;
    email: String;
    password: String;

    constructor(_id = '', email = '', password = '') {
        this._id = _id;
        this.email = email;
        this.password = password;
    }
}
