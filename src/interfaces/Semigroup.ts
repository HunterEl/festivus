/**
 * concat :: Semigroup a => a ~> a -> a
 *
 * a.concat(b).concat(c) is equivalent to a.concat(b.concat(c)) (associativity)
 *
 * b must be a value of the same Semigroup
 * If b is not the same semigroup, behaviour of concat is unspecified.
 * concat must return a value of the same Semigroup.
 *
 * https://en.wikipedia.org/wiki/Semigroup
 *
 * "A semigroup is a set S together with a binary operation '.' a fucntion  `.: S X S -> S`"
 *  Should hold associative property (E.G. a.concat(b).concat(c) == a.concat(b.concat(c))
 *  "Called 'semigroup' since it generalized a group by only preserving associativity and closure under the binary operation from the axioms defining a group"
 *
 *  Essentially, it's a group of type T which allows you to add another group of type T to it and preserve that the resulting group is of type T
 */
interface Semigroup<T> {
  concat(b: Semigroup<T>): Semigroup<T>;
}
