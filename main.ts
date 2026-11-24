import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke: the standup that should have been an email.
const LINE =
  "Our standup is 15 minutes of five people saying 'no blockers' while all blocked by the same thing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
