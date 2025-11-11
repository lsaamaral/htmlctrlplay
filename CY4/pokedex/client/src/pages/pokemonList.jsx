import { useQuery } from '@tanstack/react-query';
import { listPokemon } from '../../services/pokemonService';

export default function PokemonList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['pokemon'],
        queryFn: listPokemon,
    });

    if (isLoading) return <p> Carregando... </p>;
    if (error) return <p>Erro tentando listar pokemons</p>;

    return (
        <div>
            <h1>Lista de Pokemons</h1>
            <ul>
                {data.map((pokemon) => (
                    <li key={pokemon._id}>
                        {pokemon.name} - Nivel {pokemon.level} ({pokemon.type.join(', ')})
                    </li>
                ))}
            </ul>
        </div>
    );
}