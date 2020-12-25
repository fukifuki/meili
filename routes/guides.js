const express = require('express');

const {
    createGuide,
    getGuide,
    getGuides,
    updateGuide,
    deleteGuide
} = require('../controllers/guides');

const router = express.Router();

router.route('/')
    .post(createGuide)
    .get(getGuides);

router.route('/:id')
    .get(getGuide)
    .put(updateGuide)
    .delete(deleteGuide);

module.exports = router;