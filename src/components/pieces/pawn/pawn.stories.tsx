import type { Meta, StoryObj } from "@storybook/react";
import { Pawn } from "./pawn";

const meta: Meta<typeof Pawn> = {
  component: Pawn,
};

export default meta;

type Story = StoryObj<typeof Pawn>;

export const Default: Story = {};

export const Styled: Story = {
  args: {
    style: { color: "#eab308" },
    width: 48,
    height: 48,
  },
};
