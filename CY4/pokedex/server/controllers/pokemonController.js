const Pokemon = require('../models/pokemon');

async function createPokemon(req, res) {
    try {
        const { name, type, level } = req.body;

        const newPokemon = new Pokemon({
            name, 
            type, 
            level
        });

        const savedPokemon = await newPokemon.save();
        res.status(201).json(`Pokemon salvo: ${savedPokemon}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function listPokemon(req, res) {
    try {
        const { name, type, minLevel, sortBy, order = "asc", page = 1, limit = 20} = req.query;
        const filter = {};

        if (name) {
            filter.name = new RegExp(name, "i");
        }

        if (type) {
            const typesArray = Array.isArray(type) ? type : type.split(",").map(t => t.trim());
            filter.type = { $in : typesArray }
        }

        if (minLevel) {
            filter.level = { $gte : Number(minLevel) };
        }

        const sortOption = {};

        if (sortBy) {
            sortOption[sortBy] = order === "desc" ? -1 : 1;
        }

        const pokemons = await Pokemon.find(filter).sort(sortOption).skip((page - 1) * limit).limit(Number(limit));
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao tentar listar os Pokemons"})
    }
}

async function updatePokemon(req, res) {
    try {
        const updated = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
}

async function deletePokemon(req, res) {
    try {
        await Pokemon.findByIdAndDelete(req.params.id)
        res.json({ mensagem: "Pokemon deletado" })
    } catch (error) {
        res.status(400).json({ erro: error.message})
    }
}

module.exports = { createPokemon, listPokemon, updatePokemon, deletePokemon };