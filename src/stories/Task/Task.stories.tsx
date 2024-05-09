import type { Meta, StoryObj } from "@storybook/react";
import { Task, SkeletonTask } from "../../components/Task";
import { fn } from "@storybook/test";
import React from "react";

const meta = {
  title: "Example/Task",
  component: Task,
  subcomponents: { SkeletonTask },
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
} satisfies Meta<typeof Task>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: { id: "1", title: "Default", state: "inbox" },
  },
};

export const PinChecked: Story = {
  args: {
    task: { id: "1", title: "PinChecked", state: "pin" },
  },
};

export const ArchiveChecked: Story = {
  args: {
    task: { id: "1", title: "ArchiveChecked", state: "archive" },
  },
};

export const SkeletomTask = {
  render: () => (
    <div className="p-4" >
      <SkeletonTask />
    </div>
  )
  // decorators: [
  //   () => (
  //   ),
  // ],
};