const pool = require('../utils/db');
const bcrypt = require('bcryptjs');
const User = {
  create: async (user) => {
    const hashedPassword = await bcrypt.hash(user.user_password, 10);
    const res = await pool.query(
      'INSERT INTO a_user (user_name, user_email, user_password, user_role) VALUES ($1,$2,$3,$4) RETURNING *',
      [user.user_name, user.user_email, hashedPassword, user.user_role]
    );
    return res.rows[0];
  },
  getByEmail: async (email) => {
    const res = await pool.query('SELECT * FROM a_user WHERE user_email=$1', [email]);
    return res.rows[0];
  },
  getById: async (id) => {
    const res = await pool.query('SELECT * FROM a_user WHERE user_id=$1', [id]);
    return res.rows[0];
  },
  getAll: async () => {
    const res = await pool.query('SELECT * FROM a_user ORDER BY user_id ASC');
    return res.rows;
  }
};
module.exports = User;
