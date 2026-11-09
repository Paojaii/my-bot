import { getCommand } from "../src/commands.js";
import assert from "node:assert";

const cmds = ["help", "status", "ping", "เวลา", "ราคา"];
for (const c of cmds) {
  assert.equal(typeof getCommand("/" + c), "function", "missing /" + c);
  assert.equal(typeof getCommand("!" + c), "function", "missing !" + c);
  const r = getCommand("/" + c)();
  assert.equal(typeof r, "string", "non-string for " + c);
  assert.ok(r.length > 0, "empty response for " + c);
}
assert.equal(getCommand("/unknown"), undefined, "unknown should be undefined");
console.log("All command tests passed (" + cmds.length + " commands)");
