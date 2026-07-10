import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

export default config;