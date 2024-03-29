/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '/__tests__/.*\\.(test|spec)\\.ts$',
};
// export default {
//   clearMocks: true,
//   testEnvironment: 'node',
//   preset: 'ts-jest/presets/default-esm',
//   transform: {
//     '^.+\\.m?[tj]s?$': ['ts-jest', { useESM: true }],
//   },
//   moduleNameMapper: {
//     '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
//   },
//   testRegex: '/__tests__/.*\\.(test|spec)\\.ts$',
//   coverageDirectory: 'coverage',
//   collectCoverageFrom: [
//     'src/**/*.ts',
//     'src/**/*.mts',
//     '!src/**/*.d.ts',
//     '!src/**/*.d.mts',
//   ],
//   coveragePathIgnorePatterns: ['node_nodules', 'src/dao'],
// };
