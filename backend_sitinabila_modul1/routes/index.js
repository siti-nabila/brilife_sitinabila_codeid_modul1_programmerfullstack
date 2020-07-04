
module.exports = function (app) {

  const PropinsiController = require('../controllers/PropinsiController');
  app.route('/')
    .get(PropinsiController.listPropinsi)
    .post(PropinsiController.addPropinsi);
  app.route('/propinsi/:id')
    .get(PropinsiController.getPropinsiById)
    .put(PropinsiController.editPropinsi)
    .delete(PropinsiController.removePropinsiById);

  const KontrasepsiController = require('../controllers/KontrasepsiController');

  app.route('/kontrasepsi')
    .get(KontrasepsiController.listKontrasepsi)
    .post(KontrasepsiController.addKontrasepsi);
  app.route('/kontrasepsi/:id')
    .get(KontrasepsiController.getKontrasepsiById)
    .put(KontrasepsiController.editKontrasepsi)
    .delete(KontrasepsiController.removeKontrasepsiById);


  const PemakaiController = require('../controllers/PemakaiController');

  app.route('/pemakai')
    .get(PemakaiController.listPemakai)
    .post(PemakaiController.addPemakai);
  app.route('/pemakai/:id')
    .get(PemakaiController.getPemakaiById)
    .put(PemakaiController.editPemakai)
    .delete(PemakaiController.removePemakaiById);
};

