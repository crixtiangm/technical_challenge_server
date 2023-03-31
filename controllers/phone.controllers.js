const data = require('../data/phones.json');


exports.listPhoneCntlr = (req, res) => {
    res.status(200).json(data);
}

exports.detailPhoneCntlr = (req, res) => {
    const {id} = req.params;
    const detailPhone = data.filter(phone => phone.id === parseInt(id));
    if(detailPhone.length == 0){
        res.status(400).json({msg: 'EL ID es incorrecto'})
    }
    res.status(200).json(detailPhone[0]);
} 

