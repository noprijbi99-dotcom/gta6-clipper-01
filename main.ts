// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the YouTube clip itself; this program has exactly one job:
// hand the clip's address to the grader. It copies VIDEO.json from the bot
// directory (this repository, once mounted) into the output directory,
// where the gate reads it. Views are read from YouTube by the house, so
// nothing else needs to be computed or written here.
//
// Local dry run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const sourcePath = join(botDir, 'VIDEO.json');
const targetPath = join(outDir, 'VIDEO.json');

// Fail loudly on a missing or malformed VIDEO.json: the gate would refuse
// the entry anyway, and a clear error beats a silent zero.
let video;
try {
  video = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${err.message}`);
  process.exit(1);
}
if (typeof video.url !== 'string' || video.url.length === 0) {
  console.error('VIDEO.json holds no video url');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(sourcePath, targetPath);
console.log(`handed in ${video.url} -> ${targetPath}`);
