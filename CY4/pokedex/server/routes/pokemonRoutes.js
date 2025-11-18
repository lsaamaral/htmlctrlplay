const express = require('express');

const pokemonController = require('../controllers/pokemonController');

const router = express.Router();

router.post("/pokemon", pokemonController.createPokemon);

router.get("/pokemon", pokemonController.listPokemon);

router.patch("/pokemon/:id", pokemonController.updatePokemon);

router.delete("/pokemon/:id", pokemonController.deletePokemon);

module.exports = router