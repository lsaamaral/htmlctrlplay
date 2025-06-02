import { useParams } from "react-router-dom";
import { useState } from "react";
import "../App.css";

import requester from "../axios";

export function GuildForm(props) {
    const { guildId } = useParams();
    const [guild, setGuild] = useState();

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
    
    const onSubmit = (e) => {
        e.preventDefault();
        addGuild(guild)
    }

    return (
        <form onSubmit={onSubmit} className="divrotas">
            <div>
                <label>Guilda</label>
                <input name="name" type="text" defaultValue={guild?.name} onChange={(e) => setGuild((prev) => ({...prev, name: e.target.value}))} />
            </div>

            <button type="submit">Confirmar</button>
        </form>
    );
}