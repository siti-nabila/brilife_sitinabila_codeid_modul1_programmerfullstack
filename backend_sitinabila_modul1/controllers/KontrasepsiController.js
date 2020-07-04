let Kontrasepsi = require('../models/KontrasepsiModel.js');


exports.listKontrasepsi = function(req, res) {
    Kontrasepsi.getAllKontrasepsi(function(err, Kontrasepsi) {
        if (err) {
            res.send(err);
        }
        res.send(Kontrasepsi);
    });
};

exports.addKontrasepsi = function(req, res) {

    let newKontrasepsi = new Kontrasepsi(req.body);
    if (!newKontrasepsi.nama) {
        res.send({
            code: 400,
            message: 'Nama Kontrasepsi Tidak Boleh Kosong !',
            text: newKontrasepsi
        });
    } else {
        Kontrasepsi.createKontrasepsi(newKontrasepsi.nama, function(err, Kontrasepsi) {
           if (err) {
               res.send(err);
           } 
           res.json(Kontrasepsi);
        });
    }
};

exports.getKontrasepsiById = function(req, res) {
    Kontrasepsi.getById(req.params.id, function(err, Kontrasepsi) {
        if (err) {
            res.send(err);
        }
        res.json(Kontrasepsi);
    });
};

exports.editKontrasepsi = function(req, res) {
    Kontrasepsi.updateKontrasepsi(req.params.id, new Kontrasepsi(req.body), function(err, Kontrasepsi) {
        if (err) {
            res.send(err);
        }
        res.json(Kontrasepsi);
    });
};

exports.removeKontrasepsiById = function(req, res) {
    Kontrasepsi.deleteKontrasepsi(req.params.id, function(err, Kontrasepsi) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Kontrasepsi Berhasil Dihapus.'
        });
    });
};
