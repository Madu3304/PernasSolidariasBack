import jwt from "jsonwebtoken";

export const autenticarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];  // O token vem no cabeçalho Authorization
  const token = authHeader && authHeader.split(' ')[1];  // Formato esperado: "Bearer TOKEN"

  if (!token) return res.status(401).json({ msg: "Token não fornecido" });

  jwt.verify(token, "secretaJWT", (err, usuario) => {
    if (err) return res.status(403).json({ msg: "Token inválido ou expirado" });

    req.usuario = usuario;  // Anexa os dados do token ao req
    next();  // Libera o fluxo para a rota
  });
};
