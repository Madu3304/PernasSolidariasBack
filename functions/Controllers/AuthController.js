import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import { Usuario } from "../Models/UsuarioModel.js";

export const login = async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) return res.status(404).json({ msg: "Usuário não encontrado" });

  if(usuario.senha !== senha){
    return res.status(401).json({msg:"Senha Inválida"})
  }

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, "secretaJWT", { expiresIn: "1h" });

  res.json({ token });
};
