import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "./country";

const meta: Meta<typeof Country> = {
  component: Country,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: "US",
  },
};
