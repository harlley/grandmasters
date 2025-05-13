import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

initialize({ quiet: true });

import "../src/app/globals.css";
import React from "react";

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default preview;
