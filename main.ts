// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post: this program only hands the grader the
// post's address. It copies POST.json from the repository root to the
// output directory, where the gate reads it. The house then reads the post
// from X (its first picture, the meme, and its text) and hands that to the
// judge. Nothing this program writes is judged.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
