import { GradeTypes, makeCmdTest } from 'gradescope-lib';

const PRJ_DIR = process.env['PRJ_DIR'];

const CMD = `
  cd ${PRJ_DIR} ;
  cp -r ${process.env.SRC}/grading-tests src ;
  npm ci ;
  npm run build ;
`;

const TESTS = [
  makeCmdTest(CMD, { name: 'make' }),
];

const SUITE_OPTS: GradeTypes.TestSuiteOpts = {
  abortOnFail: true,
  visibility: 'visible',
  name: 'Make Tests',
  timeoutMillis: 60_000,
};

export default new GradeTypes.TestSuite(TESTS, SUITE_OPTS);
