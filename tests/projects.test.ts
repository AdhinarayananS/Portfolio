
import { projects } from "@/lib/data";
import { describe, expect, test } from "@jest/globals";

describe("Portfolio projects", () => {
  test("includes project details required by the project cards", () => {
    expect(projects.length).toBeGreaterThan(0);

    for (const project of projects) {
      expect(project.name).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.work.length).toBeGreaterThan(0);
    }
  });

  test("uses a unique name for each project", () => {
    const names = projects.map((project) => project.name);

    expect(new Set(names).size).toBe(names.length);
  });
});
