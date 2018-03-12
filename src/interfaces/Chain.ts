/**
 * A value that implements the Chain specification must also implement the Apply specification.
 * m.chain(f).chain(g) is equivalent to m.chain(x => f(x).chain(g)) (associativity)
 * f must be a function which returns a value
 * - If f is not a function, the behaviour of chain is unspecified.
 * - f must return a value of the same Chain
 * chain must return a value of the same Chain
 *
 * chain :: Chain m => m a ~> (a -> m b) -> m b
 * used at the instance/method level. Takes a function who must return a value of the same chain and the chain call itself needs
 * to return a value in the same chain to keep categorical consistency
 * One of the two pillars of monads
 * Could unwrap values, perform logic, and then return wrapped up values again
 */
interface Chain<T> extends Apply<T> {
  // TOOD: I may not need to specify arguments for the function
  // just as long as it return a valid Chain implementation
  chain(f: (...args: any[]) => Chain<T>): Chain<T>;
}
