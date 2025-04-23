import "./App.css";
import QuestItem from "./QuestItem";

export default function QuestList(props) {
    return (
        <div className="quest-list">
            {props.quests.map((quest) => {
                return (
                    <QuestItem
                        key = {quest.id}
                        quest = {quest}
                        saveEditQuest = {props.saveEditQuest}
                        saveConcludedQuest = {props.saveConcludedQuest}
                        saveDeleteQuest={props.saveDeleteQuest}
                    />
                );
            })}
        </div>
    );
}