const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'chris',
  password: 'chris123',
  database: 'practica_patrones'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos MySQL exitosa');
});

app.get('/usuarios', (req, res) => {
    // Ejemplo de consulta a la base de datos para obtener todos los usuarios
    db.query('SELECT * FROM clientes', (err, resultados) => {
      if (err) {
        console.error('Error al realizar la consulta: ' + err.stack);
        res.status(500).send('Error en el servidor');
        return;
      }
      // Enviar resultados como respuesta
      res.json(resultados);
    });
  });
  
  // Ruta para obtener un usuario por nombre
  app.get('/usuarios/:nombre', (req, res) => {
    const nombre = req.params.nombre;
  
    // Ejemplo de consulta a la base de datos para obtener un usuario por nombre
    db.query('SELECT * FROM clientes WHERE Nombre = ?', [nombre], (err, resultados) => {
      if (err) {
        console.error('Error al realizar la consulta: ' + err.stack);
        res.status(500).send('Error en el servidor');
        return;
      }
  
      // Verificar si se encontraron resultados
      if (resultados.length === 0) {
        res.status(404).send('Usuario no encontrado');
      } else {
        // Enviar resultados como respuesta
        res.json(resultados[0]);
      }
    });
  });

// Resto de la configuración de tu aplicación Express aquí

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});