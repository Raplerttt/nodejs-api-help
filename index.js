const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Jika Anda memiliki authRoutes, pastikan diimport
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const { Pool } = require('pg');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Route Sederhana
app.get('/', (req, res) => {
    res.send('Server untuk React.js berjalan!');
});

app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes); // Jika ada rute otentikasi, aktifkan ini

app.use(errorHandler); // Pastikan middleware ini ada dan berfungsi

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  })

  pool.connect((err) => {
    if (err) {
      console.error('Error connecting to PostgreSQL:', err);
    } else {
      console.log('Connected to PostgreSQL');
    }
  })
// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
