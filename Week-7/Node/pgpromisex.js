var pgp = require('pg-promise')({

});
var db = pgp({database: 'restaurant2'});

db.query('SELECT * FROM restaurant')
  .then(function (results) {
    results.forEach(function (r) {
      console.log(r);
      console.log(r.id, r.name, r.address, r.category);
    });
  })
  .catch(function (e) {
    console.log(e);
  });
