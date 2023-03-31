const router = require("express").Router();
const {listPhoneCntlr, detailPhoneCntlr} = require('../controllers/phone.controllers');

router.get("/phones",listPhoneCntlr);
router.get("/phone/:id", detailPhoneCntlr);

module.exports = router;
