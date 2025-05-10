import type { Meta, StoryObj } from "@storybook/react";
import { PlayerList } from "./player-list";
import { http, HttpResponse } from "msw";

const meta: Meta<typeof PlayerList> = {
  component: PlayerList,
  parameters: {
    msw: {
      handlers: {
        profile: http.get("https://api.chess.com/pub/titled/GM", () => {
          return HttpResponse.json({
            players: [
              "0blivi0usspy",
              "123lt",
              "124chess",
              "1977ivan",
              "1stsecond",
            ],
          });
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
      const response = await fetch("https://api.chess.com/pub/titled/GM");
      const data = await response.json();
      return { players: data.players };
    },
  ],
  render: (args, { loaded }) => {
    return <PlayerList players={loaded.players} />;
  },
};
