// The One-Line Laugh — entry program.
//
// Copies the one funny line in entry.txt (next to this script) to
// $MAKEFUN_OUTPUT_DIR/entry.txt, where the gate reads it.
//
// Node stdlib only. The entry file is resolved relative to this script's
// own directory, never the process working directory, so the program
// works no matter where the grader runs it from.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "entry.txt");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
const destination = join(outputDir, "entry.txt");
copyFileSync(source, destination);

// Read back what was written and check the gate: UTF-8 text of
// 1–200 characters, not only whitespace.
const written = readFileSync(destination, "utf8");
const length = [...written].length;
if (length < 1 || length > 200 || written.trim().length === 0) {
  console.error(`entry.txt failed the gate: ${length} characters`);
  process.exit(1);
}
