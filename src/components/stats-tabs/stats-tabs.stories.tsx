import type { StoryObj } from "@storybook/react";
import { StatsTabs } from "./stats-tabs";
import { games } from "./stats-tabs.mock";
import { GamesData } from "./stats-tabs.types";

const meta = {
  component: StatsTabs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    games: games as unknown as GamesData,
  },
};
