import { GradeTypes, makePathTest } from 'gradescope-lib';

function test(path: string, mustExist = true) {
  const neg = mustExist ? '' : ' does not';
  const name = `check ${path}${neg} exists`;
  return makePathTest(path, { name, isForbidden: !mustExist });
}

const PRJ_DIR = process.env['PRJ_DIR'];
const TESTS = [
  test(`${PRJ_DIR}/package.json`),
  test(`${PRJ_DIR}/package-lock.json`),
  test(`${PRJ_DIR}/tsconfig.json`),
  test(`${PRJ_DIR}/src/hw1-sol.ts`),      // Main solution file
  test(`${PRJ_DIR}/src/hw1-tests.ts`),    // Test cases
  test(`${PRJ_DIR}/src/test-utils.ts`),   // Utility functions for tests
  test(`${PRJ_DIR}/node_modules`, false),
  test(`${PRJ_DIR}/dist`, false),
];

const SUITE_OPTS: GradeTypes.TestSuiteOpts = {
  abortOnFail: true,
  visibility: 'visible',
  name: 'Path Tests',
};

export default new GradeTypes.TestSuite(TESTS, SUITE_OPTS);
