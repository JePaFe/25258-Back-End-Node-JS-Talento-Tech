import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'S3cr3t!', (error) => {
    if (error) return res.sendStatus(403);
    next();
  })
};
