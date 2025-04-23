import QuestItem from "./QuestItem";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, describe, expect} from "@jest/globals";

const createdQuest = {
    id: 1,
    title: "beber agua",
    status: "aberto",
    created_at: new Date(Date.now()).toUTCString(),
};

const concludedQuest = {
    id: 2,
    title: "falar com minha mae",
    status: "concluido",
    created_at: new Date(Date.now()).toUTCString(),
}

describe("testando item", () => {
    test("testando se esta visivel", () => {
        render(<QuestItem quest={createdQuest} />);
        expect(screen.getByTestId("questItem")).toBeVisible();
        expect(screen.getByTestId("title").textContent).toBe("beber agua");
    });
    test("testando se a edicao esta acessivel", () => {
        render(<QuestItem quest={createdQuest} />);
        expect(screen.getByTestId("buttons")).toBeVisible();
        fireEvent.click(screen.getByTestId("editButton"));
        expect(screen.getByTestId("input")).toBeVisible();
        expect(screen.getByTestId("input")).toHaveValue("beber agua");
    });
    test("testando se a edicao e bloqueada quando foi concluida", () => {
        render(<QuestItem quest={concludedQuest} />);
        expect(screen.queryByTestId("buttons")).toBeNull();
    })
});