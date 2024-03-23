import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "jsdom",
  coverageReporters: ["html", "text", "lcov"]
};

export default config;