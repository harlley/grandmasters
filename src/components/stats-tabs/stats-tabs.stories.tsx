import type { StoryObj } from "@storybook/react";
import { StatsTabs } from "./stats-tabs";
import { stats } from "./stats-tabs.mock";
import { GamesData } from "./stats-tabs.types";

const meta = {
  component: StatsTabs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: stats as unknown as GamesData,
  },
};
