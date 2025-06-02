import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import { GuildForm } from "./guildForm";
import requester from "../axios";

export function Guilds() {
    const navigate = useNavigate();
    const [guilds, setGuilds] = useState([]);

    const updateGuilds = (data) => setGuilds([...guilds, data]);

    useEffect(() => {
        const getGuilds = async () => {
            try {
                const response = await requester.get("/guilds");
                setGuilds(response.data);
            } catch (error) {
                console.error("Erro ao buscar as guildas", error);
            }
        };

        getGuilds();
    }, []);

    const deleteGuild = async ({id}) => {
        try {
            await requester.delete(`/guilds/${id}`);
            setGuilds(guilds.filter((guild) => guild.id !== id));
        } catch (error) {
            console.error("Erro ao deletar a guilda: ", error);
        }
    }

    return (
        <div className="divrotas">
            <h1>Guildas</h1>
            <ul>
                {guilds.map((guild) => (
                    <li key={guild.id}>
                        {guild.name}
                        <button onClick={() => navigate(guild.id)}>Editar</button>
                        <button onClick={() => deleteGuild(guild)}>Excluir</button>
                    </li>
                ))}
            </ul>
            <GuildForm updateGuilds={updateGuilds}/>
        </div>
    );
}