import { Dolos } from "@dodona/dolos-lib";

const files = [
  "sample.js",
  "copied_function.js",
  "another_copied_function.js",
  "copy_of_sample.js",
];

const dolos = new Dolos();
const report = await dolos.analyzePaths(files);

for (const scoredPair of report.scoredPairs) {
 const pair = scoredPair.pair;
 for (const fragment of pair.fragments()) {
    const left = fragment.leftSelection;
    const right = fragment.rightSelection;
    console.log(`${pair.leftFile.path}:{${left.startRow},${left.startCol} -> ${left.endRow},${left.endCol}} matches with ${pair.rightFile.path}:{${right.startRow},${right.startCol} -> ${right.endRow},${right.endCol}}`);
 }
}
