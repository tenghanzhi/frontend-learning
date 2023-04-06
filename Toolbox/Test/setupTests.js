// SEE: https://www.npmjs.com/package/jest-fetch-mock
require('jest-fetch-mock').enableMocks();

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
// AM Charts is used in @hub/charts and they don't render serverside. So we'll just mock this whole
// library out to avoid it causing issues in unit tests
