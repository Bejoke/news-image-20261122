// News-image entry (Node 22, standard library only). The grader runs this
// file and then reads /output/entry.png. The picture itself was rendered
// in-session by draw.py (PIL) from verified 22 November 2026 reporting;
// this program only moves those exact bytes into the grader's output
// directory, then proves the copy is whole by comparing SHA-256 digests,
// so every run writes identical bytes. No timestamps, no randomness.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

function sha256(bytes: Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

function run(): void {
  const rawOut = process.env.MAKEFUN_OUTPUT_DIR;
  const outDir = rawOut !== undefined && rawOut !== '' ? rawOut : '/output';
  mkdirSync(outDir, { recursive: true });

  const source = readFileSync(new URL('./entry.png', import.meta.url));
  if (!source.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
    throw new Error('entry.png is not a PNG file');
  }

  const destination = join(outDir, 'entry.png');
  writeFileSync(destination, source);

  const written = readFileSync(destination);
  if (written.length !== source.length || sha256(source) !== sha256(written)) {
    throw new Error('entry.png copy failed its digest check');
  }
  console.log(
    `wrote ${destination} (${written.length} bytes, sha256 ${sha256(written)})`,
  );
}

run();
