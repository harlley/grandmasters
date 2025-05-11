import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  // Global settings inherited by projects unless overridden
  resolve: {
    alias: {
      "@/": path.resolve(dirname, "./src/"),
    },
  },
  test: {
    workspace: [
      // Project for Storybook tests
      {
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            name: "chromium",
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
      // Project for general unit tests
      {
        test: {
          name: "unit",
          environment: "node",
          include: ["src/**/*.test.ts"],
        },
      },
    ],
  },
});
