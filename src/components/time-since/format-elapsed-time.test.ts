import { describe, it, expect } from "vitest";
import { formatElapsedTime } from "./format-elapsed-time";

describe("formatElapsedTime", () => {
  it("should format 0 milliseconds correctly", () => {
    expect(formatElapsedTime(0)).toBe("00:00:00");
  });

  it("should format 1 second correctly", () => {
    expect(formatElapsedTime(1000)).toBe("00:00:01");
  });

  it("should format 1 minute correctly", () => {
    expect(formatElapsedTime(60000)).toBe("00:01:00");
  });

  it("should format 1 hour correctly", () => {
    expect(formatElapsedTime(3600000)).toBe("01:00:00");
  });

  it("should format a complex time correctly", () => {
    // 1 hour, 23 minutes, 45 seconds
    const milliseconds = (1 * 3600 + 23 * 60 + 45) * 1000;
    expect(formatElapsedTime(milliseconds)).toBe("01:23:45");
  });
});
