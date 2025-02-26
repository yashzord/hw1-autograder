import { GradeTypes, makeMochaSuite } from 'gradescope-lib';

const PRJ_DIR = process.env['PRJ_DIR'] ?? '.';

const SUITE_OPTS: GradeTypes.TestSuiteOpts = {
  abortOnFail: false,
  visibility: 'visible',
  name: 'Provided Mocha Tests',
};

const TEST_PATH = 'dist/grading-tests/hw1-tests.js'; // This file contains all test cases

const MOCHA_TEST_SUITE = makeMochaSuite(PRJ_DIR, TEST_PATH, SUITE_OPTS);

export default MOCHA_TEST_SUITE;
