import type { Meta, StoryObj } from "@storybook/react";
import { Knight } from "./knight";

const meta: Meta<typeof Knight> = {
  component: Knight,
};

export default meta;

type Story = StoryObj<typeof Knight>;

export const Default: Story = {};

export const Styled: Story = {
  args: {
    style: { color: "#16a34a" },
    width: 48,
    height: 48,
  },
};
