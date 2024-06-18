const eq = jest.fn();
const select = jest.fn(() => ({ eq }));
const from = jest.fn(() => ({ select }));

const createClient = jest.fn(() => ({
  from,
}));

export { createClient };
