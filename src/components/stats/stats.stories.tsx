import { Meta, StoryObj } from "@storybook/react";
import { Stats } from "./stats";

const meta: Meta<typeof Stats> = {
  component: Stats,
  argTypes: {
    lastRating: { control: "number" },
    bestRating: { control: "number" },
    recordWin: { control: "number" },
    recordLoss: { control: "number" },
    recordDraw: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const Default: Story = {
  args: {
    lastRating: 1500,
    bestRating: 1650,
    recordWin: 25,
    recordLoss: 10,
    recordDraw: 5,
  },
};
