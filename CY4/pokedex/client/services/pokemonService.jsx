import axios from 'axios';

export async function listPokemon() {
    const { data } = await axios.get("http://localhost:8000/api/pokemon");
    return data;
}

export async function createPokemon(body) {
    const { data } = await axios.post("http://localhost:8000/api/pokemon", body);
    return data;
}

export async function getPokemon(body) {
    const { data } = await axios.get(`http://localhost:8000/api/pokemon/${id}`, body);
    return data;
}

export async function updatePokemon(body) {
    const { data } = await axios.patch(`http://localhost:8000/api/pokemon/${id}`, body);
    return data;
}