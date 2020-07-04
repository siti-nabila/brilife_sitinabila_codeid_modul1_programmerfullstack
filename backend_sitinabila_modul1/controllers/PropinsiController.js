let Propinsi = require('../models/PropinsiModel.js');


exports.listPropinsi = function(req, res) {
    Propinsi.getAllPropinsi(function(err, propinsi) {
        if (err) {
            res.send(err);
        }
        res.send(propinsi);
    });
};

exports.addPropinsi = function(req, res) {

    let newPropinsi = new Propinsi(req.body);
    if (!newPropinsi.nama) {
        res.send({
            code: 400,
            message: 'Nama Propinsi Tidak Boleh Kosong !',
            text: newPropinsi
        });
    } else {
        Propinsi.createPropinsi(newPropinsi.nama, function(err, propinsi) {
           if (err) {
               res.send(err);
           } 
           res.json(propinsi);
        });
    }
};

exports.getPropinsiById = function(req, res) {
    Propinsi.getById(req.params.id, function(err, propinsi) {
        if (err) {
            res.send(err);
        }
        res.json(propinsi);
    });
};

exports.editPropinsi = function(req, res) {
    Propinsi.updatePropinsi(req.params.id, new Propinsi(req.body), function(err, propinsi) {
        if (err) {
            res.send(err);
        }
        res.json(propinsi);
    });
};

exports.removePropinsiById = function(req, res) {
    Propinsi.deletePropinsi(req.params.id, function(err, propinsi) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Propinsi Berhasil Dihapus.'
        });
    });
};
