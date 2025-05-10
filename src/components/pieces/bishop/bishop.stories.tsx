import type { Meta, StoryObj } from "@storybook/react";
import { Bishop } from "./bishop";

const meta: Meta<typeof Bishop> = {
  component: Bishop,
  title: "components/pieces/Bishop",
};

export default meta;

type Story = StoryObj<typeof Bishop>;

export const Default: Story = {};

export const Styled: Story = {
  args: {
    style: { color: "#a21caf" },
    width: 48,
    height: 48,
  },
};
