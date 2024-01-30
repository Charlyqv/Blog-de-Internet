const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog"
})

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM entradas";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
})

app.post('/api/insert', (req, res) => {

  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const fecha = req.body.fecha;
  const contenido = req.body.contenido;

  const sqlInsert = "INSERT INTO entradas (titulo, autor, fecha, contenido) VALUES (?,?,?,?)"
  db.query(sqlInsert, [titulo, autor, fecha, contenido], (err, result) => {
    res.send(result);
  })
});

app.get('/entradas', (req, res) => {
  const sql = "SELECT * FROM entradas";
  db.query(sql, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})

app.listen(3001, ()=> {
  console.log('Contectado al puerto 3001');
})