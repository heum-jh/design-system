import type { Meta, StoryObj } from "@storybook/react";
import { FloatingInput as Input } from "../../components/Input";

const meta: Meta<typeof Input> = {
    title: "Example/Input",
    component: Input,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "First Name",
    },
};