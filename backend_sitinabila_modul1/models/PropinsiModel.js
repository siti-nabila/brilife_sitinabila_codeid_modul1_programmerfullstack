var sql = require('../configs/db.js');

var Propinsi = function(propinsi) {
    this.nama = propinsi.nama
};

Propinsi.getAllPropinsi = function(result) {
    sql.query("SELECT * FROM LIST_PROPINSI", function(err, res) {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Propinsi.getById = function(id, result) {
    let query = `SELECT * FROM LIST_PROPINSI WHERE Id_Propinsi = ?`;
    sql.query(query, id, function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Propinsi.createPropinsi = function(newPropinsi, result) {
    let query = `INSERT INTO LIST_PROPINSI(Nama_Propinsi) values(?)`;
    sql.query(query, [newPropinsi], function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, newPropinsi)
        }
    });
};

Propinsi.updatePropinsi = function(id, propinsi, result) {
    let query = `UPDATE LIST_PROPINSI SET Nama_Propinsi = ? WHERE Id_Propinsi = ?`;
    sql.query(query, [propinsi.nama, id], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Propinsi.deletePropinsi = function(id, result) {
    let query = `DELETE FROM LIST_PROPINSI WHERE Id_Propinsi = ?`;
    sql.query(query, [id], function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


module.exports = Propinsi;


