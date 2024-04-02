import { Router } from 'express';
import {
  createTodo,
  getTodos,
  updateTodos,
  deleteTodos,
} from '../controllers/todos';

const router = Router();

router.get('/', getTodos);

router.post('/', createTodo);

router.patch('/:id', updateTodos);

router.delete('/:id', deleteTodos);

export default router;
