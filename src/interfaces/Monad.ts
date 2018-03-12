/**
 * A value that implements the Monad specification must also implement the Applicative and Chain specifications.
 * M.of(a).chain(f) is equivalent to f(a) (left identity)
 * m.chain(M.of) is equivalent to m (right identity)
 *
 * Core pieces of FP. `.chain`, `.of` provide clean ways for unwrapping and creating
 */
interface Monad<T> extends Applicative<T>, Chain<T> {}
