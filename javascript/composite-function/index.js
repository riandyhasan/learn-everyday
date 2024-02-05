// Composite function

// Basiclly you call function that
// the parameters is a return value of function

// Example: double(increment(1))

const increment = (x) => x + 1;
const double = (x) => x * 2;

const result = double(increment(1)); // 4

// Compose and pipe
// Group the composite calls into a function

// Compose: the first call is in the right
const compose = (...fn) => {
  if (fn.length <= 0) return;
  if (fn.length <= 1) typeof fn[0] === 'function' ? fn[0]() : fn[0];
  let result =
    typeof fn[fn.length - 1] === 'function'
      ? fn[fn.length - 1]()
      : fn[fn.length - 1];
  fn.reverse()
    .slice(1)
    .forEach((f) => {
      result = f(result);
    });
  return result;
};
// Usage
const result_compose = compose(double, increment, 1); // 4

// Pipe: the first call is in the left
const pipe = (...fn) => {
  if (fn.length <= 0) return;
  if (fn.length <= 1) typeof fn[0] === 'function' ? fn[0]() : fn[0];
  let result = typeof fn[0] === 'function' ? fn[0]() : fn[0];
  fn.slice(1).forEach((f) => {
    result = f(result);
  });
  return result;
};
//Usage
const result_pipe = pipe(1, increment, double); // 4

// More complex usage
const map = (fn) => (x) => x.map(fn);
const reduce = (fn, initial) => (x) => x.reduce(fn, initial);

const complex_operation = pipe(
  [1, 2, 3, 4],
  map(double),
  reduce((acc, curr) => acc + curr, 0)
); // 20

// Real Usecase
// Middleware -> for wrapping middleware and handlers
