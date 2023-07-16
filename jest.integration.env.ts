// eslint-disable-next-line no-undef
jest.setTimeout(90000); // since we're calling downstream apis

/**
 * sanity check that unit tests are only run the 'test' environment
 *
 * usecases
 * - prevent polluting prod state with test data
 * - prevent executing financially impacting mutations
 */
if (
  process.env.NODE_ENV !== 'test' &&
  process.env.I_KNOW_WHAT_IM_DOING !== 'true'
)
  throw new Error(`unit-test is not targeting stage 'test'`);
