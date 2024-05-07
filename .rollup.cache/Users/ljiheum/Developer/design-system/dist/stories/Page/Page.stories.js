import { __awaiter } from "tslib";
import { within, userEvent, expect } from "@storybook/test";
import { Page } from "./Page";
const meta = {
    title: "Example/Page",
    component: Page,
    parameters: {
        layout: "fullscreen",
    },
};
export default meta;
export const LoggedOut = {};
export const LoggedIn = {
    play: (_a) => __awaiter(void 0, [_a], void 0, function* ({ canvasElement }) {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole("button", { name: /Log in/i });
        yield expect(loginButton).toBeInTheDocument();
        yield userEvent.click(loginButton);
        yield expect(loginButton).not.toBeInTheDocument();
        const logoutButton = canvas.getByRole("button", { name: /Log out/i });
        yield expect(logoutButton).toBeInTheDocument();
    }),
};
//# sourceMappingURL=Page.stories.js.map