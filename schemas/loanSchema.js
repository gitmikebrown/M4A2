const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    id: String,
    customerName: String,
    phoneNumber: String,
    address: String,
    loanAmount: Number,
    interest: Number,
    loanTermYears: Number,
    LoanType: String,
    descritption: String,
    createdDate: {type: Date, default: Date.now},
    insertedDate: {type: Date, default: Date.now}

})

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;
//Mike Brown - ASU IFT458