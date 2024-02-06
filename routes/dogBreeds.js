import Router from 'express';
const router = Router();
import { getMultiple } from '../services/dogBreeds.js';

/* GET Dog Breeds. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Dog Breeds `, err.message);
    next(err);
  }
});

/* POST dog Breeds */
router.post('/', async function(req, res, next) {
    try {
      res.json(await dogBreeds.create(req.body));
    } catch (err) {
      console.error(`Error while creating Dog Breed`, err.message);
      next(err);
    }
});

/* PUT Dog Breed */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await dogBreeds.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating Dog Breed`, err.message);
      next(err);
    }
});

export default router;