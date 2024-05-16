import type { StorybookConfig } from "@storybook/react-webpack5";

const isProduction = process.env.NODE_ENV === 'production';
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "storybook-css-modules",
      options: {
        cssModulesLoaderOptions: {
          modules: {
            localIdentName: isProduction? "[hash:base64:5]" : "[local]"
          }
        }
      }
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;




