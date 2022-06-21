import useGithubStats from "./index";
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe("useGithubStats", () => {
  it("updates every second", () => {
    const { result } = renderHook(() => useGithubStats("munafio"));

    expect(result).toBeDefined();
  });
});
