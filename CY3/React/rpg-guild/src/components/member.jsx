import { useNavigate } from "react-router-dom";
import { MemberForm } from "./memberForm";
import "../App.css";
import { useState } from "react";

export function Members() {
    const navigate = useNavigate();

    const [members, setMembers] = useState([]);

    const updateMembers = (data) => setMembers([...members, data]);

    return (
        <div className="divrotas">
            <h1>Membros</h1>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>
                        {member.name}
                        <button onClick={() => navigate(member.id)}>Editar</button>
                    </li>
                ))}
            </ul>
            <MemberForm updateMembers={updateMembers}/>
        </div>
    );
}