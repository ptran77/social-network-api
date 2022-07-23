const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts for GET and POST
router.route('/')
  .get(getAllThought)
  .post(createThought)

// /api/thoughts/:id for GET by id, PUT, and DELETE
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions for POST and DELETE reaction
router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction)

module.exports = router;