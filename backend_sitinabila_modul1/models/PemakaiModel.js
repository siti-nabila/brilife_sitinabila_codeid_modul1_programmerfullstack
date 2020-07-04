var sql = require('../configs/db.js');

var Pemakai = function(pemakai) {
    this.idPropinsi = pemakai.idPropinsi,
    this.idKontrasepsi = pemakai.idKontrasepsi,
    this.jumlahPemakai = pemakai.jumlahPemakai
};

Pemakai.getAllPemakai = function(result) {
    let query = `SELECT * FROM LIST_PEMAKAI_KONTRASEPSI`;
    sql.query(query, function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Pemakai.getById = function(id, result) {
    let query = `SELECT * FROM LIST_PEMAKAI_KONTRASEPSI WHERE Id_List = ?`;
    sql.query(query, id, function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Pemakai.createPemakai = function(newPemakai, result) {
    let query = `INSERT INTO LIST_PEMAKAI_KONTRASEPSI(Id_Propinsi, Id_Kontrasepsi, Jumlah_Pemakai) values(?,?,?)`;
    sql.query(query, [newPemakai.idPropinsi, newPemakai.idKontrasepsi, newPemakai.jumlahPemakai], function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, newPemakai)
        }
    });
};

Pemakai.updatePemakai = function(id, pemakai, result) {
    let query = `UPDATE LIST_PEMAKAI_KONTRASEPSI SET Id_Propinsi = ?, Id_Kontrasepsi = ?, Jumlah_Pemakai = ? WHERE Id_List = ?`;
    sql.query(query, [pemakai.idPropinsi, pemakai.idKontrasepsi, pemakai.jumlahPemakai, id], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Pemakai.deletePemakai = function(id, result) {
    let query = `DELETE FROM LIST_PEMAKAI_KONTRASEPSI WHERE Id_List = ?`;
    sql.query(query, [id], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Pemakai;


