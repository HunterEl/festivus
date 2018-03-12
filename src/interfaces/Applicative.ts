/**
 * of :: Applicative f => a -> f a
 *
 * http://learnyouahaskell.com/functors-applicative-functors-and-monoids
 * https://stackoverflow.com/questions/35013293/what-is-applicative-functor-definition-from-the-category-theory-pov
 * https://stackoverflow.com/questions/23342184/difference-between-monad-and-applicative-in-haskell
 * https://en.wikipedia.org/wiki/Applicative_functor
 *
 * v.ap(A.of(x => x)) == v // Identity
 * A.of(x).ap(A.of(f))  == A.of(f(x)) // homomorphism
 * A.of(y).ap(u) == u.ap(A.of(f => f(y))) // interchange
 *
 * This function is applied at the type-class level and not at the instance level, but could be accessed like `f.constructor.of(a)`
 * Applicative is a powerhouse. Plain and simple. Since it implements `Apply<T>` and subsequently `Functor<T>` we have a facility of wrapping a value (concrete or a function) `A.of(x)`
 * in our type of Applicative<T> and use `.ap` and `.map` to perform the appropriate operartions afterwards.
 * So we can get any value into our type of Applicative<T> and have a way of utilizing and reading from it. Pretty good.
 */
interface Applicative<T> extends Apply<T> {
  of(a: any): Applicative<T>;
}
