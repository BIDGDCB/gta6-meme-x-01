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

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

// Fail loudly on a malformed post address instead of handing the gate a
// file it cannot use: POST.json must name one X post, x.com or twitter.com
// (www. or mobile. allowed) with /status/<digits>, /statuses/<digits> or
// /i/web/status/<digits>. A placeholder or a mistyped URL is caught here,
// before anything is copied to the output directory.
const postPath = join(botDir, 'POST.json');
let postUrl: unknown;
try {
  postUrl = JSON.parse(readFileSync(postPath, 'utf8')).url;
} catch (err) {
  console.error(`POST.json at ${postPath} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
const postUrlPattern = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/(?:[^/]+\/(?:status|statuses)|i\/web\/status)\/\d+$/;
if (typeof postUrl !== 'string' || !postUrlPattern.test(postUrl)) {
  console.error(
    `invalid X post URL in POST.json: ${JSON.stringify(postUrl)} — ` +
      'expected https://x.com/<handle>/status/<digits> (or twitter.com, /statuses/, /i/web/status/)',
  );
  process.exit(1);
}

try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
