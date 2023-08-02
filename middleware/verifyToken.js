const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../db/keys')

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const bearerToken = token;
  const tokenWithoutBearer = bearerToken.split(" ")[1];
  // console.log(tokenWithoutBearer)

  jwt.verify(tokenWithoutBearer, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;