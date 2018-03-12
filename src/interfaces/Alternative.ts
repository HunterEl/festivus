/**
 * x.ap(f.alt(g)) == x.ap(f).alt(x.ap(g)) // distributivity
 * x.ap(A.zero()) == A.zero() // annihilation
 *
 * TODO: Add better info
 *
 */
interface Alternative<T> extends Applicative<T>, Plus<T> {}
