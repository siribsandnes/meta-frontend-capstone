module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(test|spec).(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/src/test/styleMock.ts',
  },
};
