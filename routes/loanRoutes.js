const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

router
  .route('/')
  .get(loanController.getData)
  .post(loanController.postData);

router
  .route('/:id')
  .get(loanController.getDataByID)
  .patch(loanController.patchDataByID)
  .put(loanController.updateDataByID)
  .delete(loanController.deleteDataByID);

module.exports = router;
