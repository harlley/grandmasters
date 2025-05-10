import type { Meta, StoryObj } from "@storybook/react";
import { King } from "./king";

const meta: Meta<typeof King> = {
  component: King,
  title: "components/pieces/king",
};

export default meta;

type Story = StoryObj<typeof King>;

export const Default: Story = {};

export const Styled: Story = {
  args: {
    style: { color: "#0ea5e9" },
    width: 48,
    height: 48,
  },
};
