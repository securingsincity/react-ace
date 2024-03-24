import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "jsdom",
  coverageReporters: ["html", "text", "lcov"],
  reporters: ["default", "summary"],
};

export default config;