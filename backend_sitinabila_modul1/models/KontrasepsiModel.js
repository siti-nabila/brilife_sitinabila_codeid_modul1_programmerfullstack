var sql = require('../configs/db.js');

var Kontrasepsi = function(propinsi) {
    this.nama = propinsi.nama
};

Kontrasepsi.getAllKontrasepsi = function(result) {
    sql.query("SELECT * FROM LIST_KONTRASEPSI", function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Kontrasepsi.getById = function(id, result) {
    let query = `SELECT * FROM LIST_KONTRASEPSI WHERE Id_Kontrasepsi = ?`;
    sql.query(query, id, function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Kontrasepsi.createKontrasepsi = function(newKontrasepsi, result) {
    let query = `INSERT INTO LIST_KONTRASEPSI(Nama_Kontrasepsi) values(?)`;
    sql.query(query, [newKontrasepsi], function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, newKontrasepsi)
        }
    });
};

Kontrasepsi.updateKontrasepsi = function(id, propinsi, result) {
    let query = `UPDATE LIST_KONTRASEPSI SET Nama_Kontrasepsi = ? WHERE Id_Kontrasepsi = ?`;
    sql.query(query, [propinsi.nama, id], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Kontrasepsi.deleteKontrasepsi = function(id, result) {
    let query = `DELETE FROM LIST_KONTRASEPSI WHERE Id_Kontrasepsi = ?`;
    sql.query(query, [id], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


module.exports = Kontrasepsi;


