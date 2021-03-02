module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleFileExtensions: ['js', 'ts', 'svelte'],
};
