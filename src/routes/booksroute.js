import books from '../controllers/books.js';
import express from 'express';
const router = express.Router();

router.get('/', books.findAll);
router.get('/:id', books.findOne);
router.post('/', books.create);
router.put('/:id', books.update);
router.delete('/:id', books.delete);

export default router;