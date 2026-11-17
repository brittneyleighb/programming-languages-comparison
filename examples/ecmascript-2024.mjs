/**
 * ECMAScript 2024 features, checked with Node.js 22+.
 *
 * The exact tested API versions are described in the ES2024 specification:
 * https://tc39.es/ecma262/2024/
 *
 * This is deliberately not a decorator or pattern-matching test: those are
 * TC39 proposals, not standardized ES2024 syntax.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("Object.groupBy (ES2024) groups values under string keys", () => {
  const scores = [
    { name: "Ada", passed: true },
    { name: "Grace", passed: false },
    { name: "Linus", passed: true }
  ];
  const grouped = Object.groupBy(scores, (student) =>
    student.passed ? "passed" : "retry"
  );
  assert.deepEqual(grouped.passed.map((item) => item.name), ["Ada", "Linus"]);
  assert.deepEqual(grouped.retry.map((item) => item.name), ["Grace"]);
  assert.equal(Object.getPrototypeOf(grouped), null,
    "Object.groupBy returns a null-prototype object");
});

test("Map.groupBy (ES2024) can group using object identity", () => {
  const group = { team: "A" };
  const other = { team: "B" };
  const grouped = Map.groupBy(
    [{ id: 1, team: group }, { id: 2, team: other }, { id: 3, team: group }],
    ({ team }) => team
  );
  assert.deepEqual(grouped.get(group).map((item) => item.id), [1, 3]);
  assert.deepEqual(grouped.get(other).map((item) => item.id), [2]);
});

test("Promise.withResolvers (ES2024) exposes resolve/reject functions", async () => {
  const { promise, resolve, reject } = Promise.withResolvers();
  assert.equal(typeof reject, "function");
  setImmediate(() => resolve(42));
  assert.equal(await promise, 42);
});

test("documentation distinguishes proposals from finalized editions", () => {
  const guide = readFileSync(new URL("../guide.md", import.meta.url), "utf8");
  assert.match(guide, /Decorators and pattern matching are TC39 proposals/);
  assert.match(guide, /TypeScript's type annotations are erased/);
  assert.match(guide, /C\+\+20/);
  assert.match(guide, /free-threaded/);
  assert.doesNotMatch(guide, /ES2024\+ features \(decorators, pattern matching\)/);
  assert.doesNotMatch(guide, /\| \*\*Performance\*\* \| Highest/);
});
