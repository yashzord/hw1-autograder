import { GradeTypes, makeCmdTest } from 'gradescope-lib';

const CMD = `cd ${process.env.PRJ_DIR} && node dist/hw1-tests.js`;

const SUITE_OPTS: GradeTypes.TestSuiteOpts = {
  abortOnFail: false,
  visibility: 'visible',
  name: 'Provided Tests',
  timeoutMillis: 60_000,
};

export default new GradeTypes.TestSuite(
  [ makeCmdTest(CMD, { name: 'Run Student Tests' }) ],
  SUITE_OPTS
);
