import type { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";
import { fn } from "@storybook/test";
import React from "react";

const meta: Meta<typeof TaskList> = {
  title: "Example/TaskList",
  component: TaskList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  args: {
    onPinTask: fn(),
    onArchiveTask: fn(),
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TaskList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: false,
    tasks: [
      { id: "1", title: "Task 1", state: "inbox" },
      { id: "2", title: "Task 2", state: "inbox" },
      { id: "3", title: "Task 3", state: "inbox" },
      { id: "4", title: "Task 4", state: "inbox" },
      { id: "5", title: "Task 5", state: "inbox" },
      { id: "6", title: "Task 6", state: "inbox" },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
