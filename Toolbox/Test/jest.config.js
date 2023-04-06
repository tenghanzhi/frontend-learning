module.exports = {
  roots: ['test'],
  setupFiles: ['<rootDir>/test/jest-react-polyfill.js', '<rootDir>/test/jest-helper.js'],
  moduleFileExtensions: ['js', 'jsx'],
  // coverageThreshold: {
  //   global: {
  //     branches: 20,
  //     functions: 20,
  //     lines: 20,
  //     statements: 20,
  //   },
  // },
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  moduleNameMapper: {
    '^.+\\.(css|scss|pcss|png|jpg|jpeg|gif|svg)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['node_modules[/\\\\](?!(@hub[/\\\\]pages)'],
  transformIgnorePatterns: ['node_modules[/\\\\](?!@amcharts[/\\\\]amcharts4)'],
  collectCoverage: true,
  notify: false,
  cacheDirectory: '<rootDir>/tmp',
  collectCoverageFrom: ['src/intelligentsync/pages/**/[A-Z]*.{js,jsx}'],
};
