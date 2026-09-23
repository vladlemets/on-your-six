#!/usr/bin/env node
import { execSync } from "node:child_process";

const target = process.argv[2];
if (!target) {
  console.error("Usage: npm run checkpoint:restore -- checkpoint/YYYYMMDD-HHMMSS");
  process.exit(1);
}

const hash = execSync(`git log --all --format=%H --grep=^${target} -n 1`, {
  encoding: "utf8",
}).trim();

if (!hash) {
  console.error(`No checkpoint found matching: ${target}`);
  process.exit(1);
}

execSync(`git checkout ${hash} -- .`, { stdio: "inherit" });
console.log(`Restored working tree from ${target} (${hash.slice(0, 7)})`);
