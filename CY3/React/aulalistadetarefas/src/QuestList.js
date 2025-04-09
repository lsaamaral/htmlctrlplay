import "./App.css";

export default function QuestList(props) {
    return (
        <div className="quest-list">
            {props.quests.map((quest) => {
                return <p key={quest.id}>{quest.title}</p>;
            })}
        </div>
    );
}