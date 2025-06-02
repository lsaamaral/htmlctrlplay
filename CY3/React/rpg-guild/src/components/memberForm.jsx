import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import requester from "../axios";
import "../App.css";

export function MemberForm(props) {
    const { memberId } = useParams();
    const [member, setMember] = useState();
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        const getMember = async () => {
            try {
                const response = await requester.get(`/members/${memberId}`);
                setMember(response.data);
            } catch (error) {
                console.error("Erro ao buscar o membro: ", error);
            }
        };
        
        if (memberId) getMember();
    }, [memberId]);

    useEffect(() => {
        const getGuilds = async () => {
            try {
                const response = await requester.get("/guilds");
                setGuilds(response.data);
            } catch (error) {
                console.error("Erro ao buscar as guildas: ", error);
            }
        };
        getGuilds();
    }, []);

    const addMember = async ({ name, guildId }) => {
        const created = {
            name,
            guildId,
        };

        try {
            const response = await requester.post("/members", created);
            setMember(response?.data);
            props.updateMembers?.(response?.data)
        } catch (error) {
            console.error("Erro ao adicionar a membro: ", error);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addMember(member);
    }

    return (
        <form className="divrotas" onSubmit={onSubmit}>
            <div>
                <label>Membro</label>
                <input 
                    role="input" 
                    name="name" 
                    type="text" 
                    defaultValue={member?.name}
                    onChange={(e) => 
                        setMember((prev) => ({...prev, name: e.target.value}))
                    } 
                />
            </div>

            <div>
                <label>Guilda</label>
                <select 
                    role="select" 
                    value={member?.guildId} 
                    name="guild" 
                    placeholder="Guilda" 
                    onChange={(e) => 
                        setMember((prev) => ({...prev, guildId: e.target.value}))
                    }
                >

                    <option value="" />
                    {guilds.map((guild) => (
                        <option key={guild.id} value={guild.id}>
                            {guild.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Confirmar</button>
        </form>
    );
}