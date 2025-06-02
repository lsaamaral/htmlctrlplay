import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import { GuildForm } from "./guildForm";

export function Guilds() {
    const navigate = useNavigate();
    const [guilds, setGuilds] = useState([]);

    const updateGuilds = (data) => setGuilds([...guilds, data]);

    return (
        <div className="divrotas">
            <h1>Guildas</h1>
            <ul>
                {guilds.map((guild) => (
                    <li key={guild.id}>
                        {guild.name}
                        <button onClick={() => navigate(guild.id)}>Editar</button>
                    </li>
                ))}
            </ul>
            <GuildForm updateGuilds={updateGuilds}/>
        </div>
    );
}