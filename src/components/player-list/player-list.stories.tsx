import type { Meta, StoryObj } from "@storybook/react";
import { PlayerList } from "./player-list";
import { http, HttpResponse } from "msw";
import { mock } from "./player-list.mock";

const endpoint = "https://api.chess.com/pub/titled/GM";

const meta: Meta<typeof PlayerList> = {
  component: PlayerList,
  parameters: {
    msw: {
      handlers: {
        profile: http.get(endpoint, () => {
          return HttpResponse.json(mock);
        }),
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof PlayerList>;

export const Default: Story = {
  loaders: [
    async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      return { players: data.players };
    },
  ],
  render: (args, { loaded }) => {
    return <PlayerList players={loaded.players} />;
  },
};
