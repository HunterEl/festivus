/**
 * empty :: Monoid m => () -> m
 *
 * NOTE that this is implemented at the type level and not the instance level
 * E.G. MyType.empty() NOT let a = new MyType(); a.empty();
 *
 * https://en.wikipedia.org/wiki/Monoid
 * https://en.wikibooks.org/wiki/Haskell/Monoids
 * https://math.stackexchange.com/questions/156952/why-the-terminology-monoid
 *
 * Monoids are semigroups with an identity operation
 * "The identity element of a monoid is unique. For this reason the identity is regarded as a constant, i.e. 0-ary (or nullary) operation."
 *
 * Essentially, a Monoid is a Semigroup with an identity operation.
 * The identity operation is 0-ary (takes no arguments) and returns the identity of the set (Monoid<T>)
 * Usually, this would mean an empty set of type Monoid<T> or ∅ (empty set)
 * The return value of an identity operation should be that to not change the value of a group or set if added
 *
 * a.concat(M.empty()) == a
 * M.empty().concat(a) == a
 *
 * A lot (if not all) associatve operations with a an identity element can be classified as Monoids (Integer numbers with addiditon as the concat operation and 0 being the identity element)
 *
 */
interface Monoid<T> extends Semigroup<T> {
  // Identity operation
  empty(): Monoid<T>;
}
