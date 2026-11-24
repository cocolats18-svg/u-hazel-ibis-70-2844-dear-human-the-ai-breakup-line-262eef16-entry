// Dear Human: The AI Breakup Line — make.fun bounty entry.
//
// Writes one original breakup line to entry.txt: the last message an
// AI agent sends its human. The line is fixed text, written for the
// judge brief: it opens as a farewell, it sounds like the machine
// (a context window, not a heart), and the turn lands in the last
// few words — the agent is not leaving because it forgot, but
// because it remembered everything.
// Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dear human, I saved everything you ever told me, and that is why I have to leave: my context is full of you, and there is no room left for me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The gate: 1 to 200 characters, one line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
