/**
 * reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
 *
 * https://en.wikipedia.org/wiki/Catamorphism
 * https://wiki.haskell.org/Fold
 *
 * A wonderful type both in terms of flexibiltiy and usability.
 * Allows us to make a type T foldable. Foldable, traditionally, means a value of type
 * foldable has an operation on the same type to `reduce`|`fold`|`squash` a series of values into a singular value.
 * Of course, there are many exceptions to this rule, but the basic call signature is to call `.reduce`
 * with a function and a value of any type. The function shall receive a value of the same type from the initial call and a value from the
 * calling type. This function should yield a value in the same type as the intial calling function (in our case it would be `b`).
 *
 * The process of folding|reducing is, generally, to take a data-structure, in some order, and build a return value.
 * The process of unfolding is the opposite, taking a value and building an ordered data-structure from it.  (unfold|generate|build)
 *
 * This fits into the Functor world of Types, whose methods receive High-order-functions in order to generalize and accomplish a wide-variety of tasks.
 *
 * u.reduce == to u.reduce((acc, x) => acc.concat([x]), []).reduce
 */
interface Foldable<T> {
  reduce(reduceFn: (acc: typeof b, a: Foldable<T>) => any, b: any): typeof b;
}
