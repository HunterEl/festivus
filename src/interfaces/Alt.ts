/**
 * alt :: Alt f => f a ~> f a -> f a
 *
 * https://stackoverflow.com/questions/10167879/distinction-between-typeclasses-monadplus-alternative-and-monoid
 * https://stackoverflow.com/questions/13080606/confused-by-the-meaning-of-the-alternative-type-class-and-its-relationship-to/13174738#13174738
 * https://github.com/fantasyland/fantasy-land/issues/187
 *
 * a.alt(b).alt(c) == a.alt(b.alt(c)) // associativity
 * a.alt(b).map(f) == a.map(f).alt(b.map(f)) // distributivity
 *
 * Similar to Semigroup/Monoid, but also holds distributivity properties and operates on the structural level and not at the value level like monoid/semgroup do
 */
interface Alt<T> extends Functor<T> {
  alt(b: Alt<T>): Alt<T>;
}
