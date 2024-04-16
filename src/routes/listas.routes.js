import { Router } from "express";
import { getAll, insertLista, getOne, updateLista, deleteLista } from '../controllers/listas.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:code', getOne);
router.post('/', insertLista);
router.put('/:code', updateLista);
router.delete('/De/:code', deleteLista);

export default router;
