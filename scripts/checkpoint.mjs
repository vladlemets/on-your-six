#!/usr/bin/env node
import { execSync } from "node:child_process";

const label = process.argv.slice(2).join(" ").trim() || "manual checkpoint";
const stamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace(/\.\d+Z$/, "")
  .replace("T", "-")
  .slice(0, 15);
const subject = `checkpoint/${stamp}: ${label}`;

execSync("git add -A", { stdio: "inherit" });
try {
  execSync(`git commit -m ${JSON.stringify(subject)}`, { stdio: "inherit" });
} catch {
  console.log("Nothing to commit (working tree clean).");
  process.exit(0);
}

const hash = execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();
console.log(`\nCheckpoint: ${subject} (${hash})`);
console.log(`Restore: npm run checkpoint:restore -- ${subject.split(":")[0]}`);
