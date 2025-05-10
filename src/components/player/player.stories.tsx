import type { Meta, StoryObj } from "@storybook/react";
import { Player } from "./player";

const meta: Meta<typeof Player> = {
  component: Player,
};

export default meta;

type Story = StoryObj<typeof Player>;

export const Default: Story = {
  args: {
    username: "MagnusCarlsen",
    piece: "queen",
    color: "white",
  },
};
