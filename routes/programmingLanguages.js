import Router from 'express';
const router = Router();
import { getMultiple } from '../services/programmingLanguages.js';

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* POST programming language */
router.post('/', async function(req, res, next) {
    try {
      res.json(await programmingLanguages.create(req.body));
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
});

/* PUT programming language */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await programmingLanguages.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating programming language`, err.message);
      next(err);
    }
});

export default router;