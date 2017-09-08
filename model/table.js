const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./db/data.db')

class model {
  constructor (raw) {
    this.attribute1 = raw.attribute1
    this.attribute2 = raw.attribute2
    }


  static findAll  (id, cb) {
    let querySiswa = `SELECT * FROM siswa ` ;
    db.run(querySiswa, (err, rows) => {
      cb(err, rows)
    })
  };

  static findWhere (id, cb) {
    let query= `INSERT INTO
    first_name(first, lastname, fullname)
    VALUES ('${}', '${}', '${}')` ;

    db.run(query, () => {
      cb ()
    })
  };

  static create (id, cb) {
    let query = `DELETE FROM
    WHERE
    id = ${req.params.id}` ;
    db.run(queryDelete, () => {
      cb ()
    })
  };

  static update (id, cb) {
    let query = `SELECT * FROM
    WHERE
    id = ${id}`;
    db.run(query, (err) => {
      cb (err)
    })
  }

  static destroy (params, id, cb) {
    db.run(queryEdit, () => {
      let query =
      cb()
    })
  };
};

module.export =
