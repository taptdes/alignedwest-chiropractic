import path, { dirname } from "path"
import { fileURLToPath } from "url"
import type { StorybookConfig } from "@storybook/react-vite"

// Define __dirname manually for ESM environments
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Utility to resolve absolute paths in monorepos
function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
      "@": path.resolve(__dirname, "../src"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/lib": path.resolve(__dirname, "../src/lib"),
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
      "@/styles": path.resolve(__dirname, "../src/styles"),
      "@/assets": path.resolve(__dirname, "../src/assets"),
    },
    }

    return config
  },
}

export default config