export function awaitTest(time = 2000) {
  return new Promise((resolve) => setTimeout(() => resolve("done"), time));
}
