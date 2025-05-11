import { Meta, StoryObj } from "@storybook/react";
import TimeSince from "./time-since";
import { TimeSinceProps } from "./time-since.types";

const meta: Meta<typeof TimeSince> = {
  component: TimeSince,
  argTypes: {
    timestamp: {
      control: "number",
      description: "The timestamp to calculate the time since.",
    },
  },
};

export default meta;

type Story = StoryObj<TimeSinceProps>;

export const Default: Story = {
  args: {
    timestamp: 1746879838,
  },
};
