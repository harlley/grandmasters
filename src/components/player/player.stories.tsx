import type { Meta, StoryObj } from "@storybook/react";
import { Player } from "./player";
import { PIECES } from "@/constants";
import { COLORS } from "./constants";
import { mock } from "../profile/profile.mock";
import { http, HttpResponse } from "msw";

const endpoint = "https://api.chess.com/pub/player/john";

const meta: Meta<typeof Player> = {
  component: Player,
  parameters: {
    msw: {
      handlers: {
        playerProfile: http.get(endpoint, () => {
          return HttpResponse.json(mock);
        }),
      },
    },
  },

  decorators: [
    (Story) => (
      <div className="flex justify-center items-center">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    piece: {
      control: "select",
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
    color: "gm-dark-square",
  },
};
