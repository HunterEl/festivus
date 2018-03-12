/**
 * equals :: Setoid a => a ~> a -> Boolean
 *
 * Straight up comparison. That's it.
 * https://en.wikipedia.org/wiki/Setoid
 * set/type with equivalence relation
 */
interface Setoid<T> {
  equals(b: Setoid<T>): Boolean;
}
