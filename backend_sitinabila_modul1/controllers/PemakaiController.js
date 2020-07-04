let Pemakai = require('../models/PemakaiModel.js');


exports.listPemakai = function(req, res) {
    Pemakai.getAllPemakai(function(err, pemakai) {
        if (err) {
            res.send(err);
        }
        res.send(pemakai);
    });
};

exports.addPemakai = function(req, res) {

    let newPemakai = new Pemakai(req.body);
    if (!newPemakai.idPropinsi || !newPemakai.idKontrasepsi || !newPemakai.jumlahPemakai) {
        res.send({
            code: 400,
            message: 'Nama Pemakai Tidak Boleh Kosong !',
            text: newPemakai
        });
    } else {
        Pemakai.createPemakai(newPemakai, function(err, pemakai) {
           if (err) {
               res.send(err);
           } 
           res.json(pemakai);
        });
    }
};

exports.getPemakaiById = function(req, res) {
    Pemakai.getById(req.params.id, function(err, pemakai) {
        if (err) {
            res.send(err);
        }
        res.json(pemakai);
    });
};

exports.editPemakai = function(req, res) {
    Pemakai.updatePemakai(req.params.id, new Pemakai(req.body), function(err, pemakai) {
        if (err) {
            res.send(err);
        }
        res.json(pemakai);
    });
};

exports.removePemakaiById = function(req, res) {
    Pemakai.deletePemakai(req.params.id, function(err, pemakai) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Pemakai Berhasil Dihapus.'
        });
    });
};
