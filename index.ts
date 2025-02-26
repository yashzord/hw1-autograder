import { runTestSuites, GradeTypes } from 'gradescope-lib';
import fs from 'fs';

const RESULTS = 'results.json';
const DESCR = process.env['PRJ_NAME'];

async function main() {
  const suitePaths = process.argv.slice(2);
  const suites: GradeTypes.TestSuite[] = [];
  try {
    for (const path of suitePaths) {
      const suite: GradeTypes.TestSuite = (await import(path)).default;
      suites.push(suite);
    }
    const result = await runTestSuites(DESCR, suites);
    if (!result.isOk) throw result;
    fs.writeFileSync(RESULTS, JSON.stringify(result.val, null, 2), 'utf8');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

await main();
