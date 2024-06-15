export class Transaction {
    _id: String;
    user_id: String;
    copy_id: String;
    branch_id: String;
    checkout_date: Date;
    checkin_date: Date;
    late_fee: Number;
    constructor(_id = '', user_id = '', copy_id = '', branch_id = '', checkout_date = new Date(), checkin_date = new Date(), late_fee = 0) {
        this._id = _id;
        this.user_id = user_id;
        this.copy_id = copy_id;
        this.branch_id = branch_id;
        this.checkout_date = checkout_date;
        this.checkin_date = checkin_date;
        this.late_fee = late_fee;
    }
}
