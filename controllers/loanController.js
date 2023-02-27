const Loan = require('../schemas/loanSchema.js');


  exports.getData = async (req, res) => {
    const loans = await Loan.find()
      res.status(200).json({
          status: 'success',
          results: loans.length,
          data: {
              loans
          }
      });
  }


  exports.postData = async (req, res) => {
    const newLoan = req.body;
    const loan = await Loan.create(newLoan)

    res. status(201). json({
        status: 'success',
        data: loan
    });
  }



//By ID
  exports.getDataByID = async (req, res) => {
    const {id} = req.params;
    const students = await Loan.find({_id: id})
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
  }

exports.updateDataByID = (req, res) => {res.send('Hello World! from Loan Controller PUT');}
exports.patchDataByID = (req, res) => {res.send('Hello World! from Loan Controller PATCH');}
exports.deleteDataByID = (req, res) => {res.send('Hello World! from Loan Controller DELETE');}



