module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/src/test/jest.polyfills.js'],
  testMatch: ['**/?(*.)+(test|spec).(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/src/test/styleMock.ts',
  },
};
