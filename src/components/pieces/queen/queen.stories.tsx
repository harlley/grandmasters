import type { Meta, StoryObj } from "@storybook/react";
import { Queen } from "./queen";

const meta: Meta<typeof Queen> = {
  component: Queen,
  title: "components/pieces/queen",
};

export default meta;

type Story = StoryObj<typeof Queen>;

export const Default: Story = {};

export const Styled: Story = {
  args: {
    style: { color: "#f43f5e" },
    width: 48,
    height: 48,
  },
};
