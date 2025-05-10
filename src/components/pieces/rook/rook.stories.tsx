import type { Meta, StoryObj } from "@storybook/react";
import { Rook } from "./Rook";

const meta: Meta<typeof Rook> = {
  component: Rook,
  title: "components/pieces/Rook",
};

export default meta;

type Story = StoryObj<typeof Rook>;

export const Default: Story = {};

export const Styled: Story = {
  args: {
    style: { color: "#64748b" },
    width: 48,
    height: 48,
  },
};
