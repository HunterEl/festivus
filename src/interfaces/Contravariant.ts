/**
 * contramap :: Contravariant f => f a ~> (b -> a) -> f b
 *
 * https://en.wikipedia.org/wiki/Functor#Covariance_and_contravariance
 * https://stackoverflow.com/questions/38034077/what-is-a-contravariant-functor
 * https://medium.com/@drboolean/monoidal-contravariant-functors-are-actually-useful-1032211045c4
 * http://www.tomharding.me/2017/04/03/fantas-eel-and-specification-7/
 *
 * Not to be confused with "Covariant Functors" (Normal Functors)
 * Contravariant Functors can also be referred to (and occasionally are) as "Cofunctors"
 *
 * Contravariant Functors reverse the direction of composition.
 * While this seems a bit ridiculous `contramap :: Contravariant f => f a ~> (b -> a) -> f b`
 * It's actually very useful and easy to understand with some non-cat-theory talk
 * In Covariant Functions, we always point in the same direction  E.G a -> b all the way through
 * In Contravariant Functions, we point in both directions, E.G. One goes a -> b and the other will go b -> a
 * Reason for this is, contravariant provides us a facility for applying a function/morphism to the input and still getting a concrete output
 *
 * Algebra:
 * u.contramap(a => a) == u // (identity) nothing to nothing is still nothing. Thanks, Newton.
 * u.contramap(x => f(g(x))) == u.contramap(f).contramap(g) // (composition) This one left me scratching my head for a little bit, but all it's doing is reversing the direction of composition.
 *
 * In essence, Contravariant Functors provide a facility for applying a morphism to input types before a mapping operation
 * This gives us tremendously flexibility by providing a way to adapt types of input for compatibility purposes.
 */
interface Contravariant<T> {
  contrapmap(mapFn?: (a: Contravariant<T>) => any): Contravariant<T>;
}
