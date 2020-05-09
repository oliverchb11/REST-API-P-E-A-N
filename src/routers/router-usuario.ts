import { Router } from "express";
import {
  getUsuario,
  getUsuarioId,
  postUsuario,
  deleteUsuario,
  updateUsuario,
} from "../controllers/controller";
const router = Router();

router.get("/usuarios", getUsuario);
router.get("/usuarios/:id", getUsuarioId);
router.post("/usuarios", postUsuario);
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);
export default router;
