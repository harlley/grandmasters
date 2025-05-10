import type { Meta, StoryObj } from "@storybook/react";
import { Player } from "./player";
import { PIECES, COLORS } from "./constants";

const meta: Meta<typeof Player> = {
  component: Player,
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center h-screen bg-gray-500">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    piece: {
      control: { type: "select" },
      options: PIECES,
    },
    color: {
      control: { type: "select" },
      options: COLORS,
    },
  },
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
