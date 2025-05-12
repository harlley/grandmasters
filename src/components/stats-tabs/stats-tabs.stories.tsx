import type { StoryObj } from "@storybook/react";
import { StatsTabs } from "./stats-tabs";
import { stats } from "./stats-tabs.mock";

const meta = {
  component: StatsTabs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { stats },
};
