import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { createPokemon, getPokemon, updatePokemon } from '../services/pokemonService';

export default function PokemonForm() {
    const { register, handleSubmit, reset, setValue } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();

    const { mutate: create} = useMutation({
        mutationFn: createPokemon,
        onSuccess: () => {
            alert("O pokemon foi cadastrado com sucesso");
            reset();
            navigate("/");
        },
        onError: () => {
            alert("Erro tentando cadastrar o pokemon");
        },
    });

    const { mutate: update} = useMutation({
        mutationFn: ({id, data}) => updatePokemon(id, data),
        onSuccess: () => {
            alert("O pokemon foi editado com sucesso");
            reset();
            navigate("/");
        },
        onError: () => {
            alert("Erro tentando editar o pokemon");
        },
    });

    function onSubmit(data) {
        if (id) {
            update({id, data});
        } else {
            create(data);
        }
    }

    const { data } = useQuery({
        queryKey: ["pokemon", id],
        queryFn: () => getPokemon(id),
        enabled:  !!id
    });

    useEffect(() => {
        if (data) {
            setValue("name", data.name);
            setValue("type", data.type.join(", "));
            setValue("level", data.level);
        }
    }, [data, setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nome" {...register("name")}></input>
            <input placeholder="Tipo" {...register("type")}></input>
            <input type="number" placeholder="Nivel" {...register("level")}></input>
            <button type="submit">Cadastrar</button>
        </form>
    );
}