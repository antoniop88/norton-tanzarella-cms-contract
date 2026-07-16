import { existsSync, statSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const dtsPath = 'dist/index.d.ts'
const minBytes = 1000

if (existsSync(dtsPath) && statSync(dtsPath).size >= minBytes) {
  console.log(`[cms-contract] using prebuilt ${dtsPath} (${statSync(dtsPath).size} bytes)`)
  process.exit(0)
}

console.log('[cms-contract] prebuilt dist missing/too small; running tsup')
const result = spawnSync('pnpm', ['exec', 'tsup'], { stdio: 'inherit', shell: process.platform === 'win32' })
process.exit(result.status ?? 1)
