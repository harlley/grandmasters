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
      // Add alias for util to prevent browser compatibility issues
      // util: "util/", // This was removed as it was ineffective
    },
  },
  optimizeDeps: {
    include: [
      "@storybook/experimental-nextjs-vite",
      "msw-storybook-addon",
      "sb-original/default-loader",
      "sb-original/image-context",
      "clsx",
      "react",
      "vaul",
      "tailwind-merge",
      "@tanstack/react-query",
      "@radix-ui/react-tabs",
      "@radix-ui/react-separator",
    ],
    exclude: [
      "util", // Exclude util from optimization
    ],
  },
  test: {
    workspace: [
      // Project for Storybook tests
      {
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        resolve: {
          alias: {
            "@/": path.resolve(dirname, "./src/"),
          },
        },
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            name: "chromium",
          },
          setupFiles:
            process.env.CI === "true" ? [] : [".storybook/vitest.setup.ts"],
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
