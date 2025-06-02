import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

import requester from "../axios";

export function GuildForm(props) {
    const { guildId } = useParams();
    const [guild, setGuild] = useState();

    useEffect(() => {
        const getGuild = async () => {
            try {
                const response = await requester.get(`/guilds/${guildId}`);
                setGuild(response.data);
            } catch (error) {
                console.error("Erro ao buscar a guilda: ", error);
            }
        };

        if (guildId) getGuild();
    }, [guildId]);

    const editGuild = async (guild) => {
        const {id, name} = guild;

        const updated = {
            name,
        };

        try {
            const response = await requester.patch(`/guilds/${id}`, updated);
            setGuild(response.data);
        } catch (error) {
            console.error("Erro ao editar a guilda: ", error);
        }
    };

    const addGuild = async (guild) => {
        const { name } = guild;

        const created = { name };

        try {
            const response = await requester.post("/guilds", created);
            props.updateGuilds?.(response.data);
        } catch (error) {
            console.error("Erro ao adicionar a guilda: ", error);
        }
    };

    const handleSubmit = guildId ? editGuild : addGuild;
    
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(guild);
    }

    return (
        <form onSubmit={onSubmit} className="divrotas">
            <div>
                <label>Guilda</label>
                <input name="name" type="text" defaultValue={guild?.name} onChange={(e) => setGuild((prev) => ({...prev, name: e.target.value}))} />
            </div>

            <button className="botaoconfirmar" type="submit">Confirmar</button>
        </form>
    );
}