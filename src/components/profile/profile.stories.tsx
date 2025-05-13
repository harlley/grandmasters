import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { Profile } from "./profile";
import { Player } from "@/types";
import { mock } from "./profile.mock";

const endpoint = "https://api.chess.com/pub/player/john";

const meta: Meta<typeof Profile> = {
  component: Profile,
  parameters: {
    msw: {
      handlers: {
        playerProfile: http.get(endpoint, () => {
          return HttpResponse.json(mock);
        }),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  loaders: [
    async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      return { player: data as Player };
    },
  ],
  render: (args, { loaded }) => {
    return <Profile player={loaded.player} />;
  },
};

export const NoAvatar: Story = {
  render: () => {
    return <Profile player={{ ...mock, avatar: undefined }} />;
  },
};
