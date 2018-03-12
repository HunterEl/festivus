/**
 * lte :: Ord a => a ~> a -> Boolean
 *
 * a.lte(b) or b.lte(a) (totality)
 * If a.lte(b) and b.lte(a), then a.equals(b) (antisymmetry)
 * If a.lte(b) and b.lte(c), then a.lte(c) (transitivity)
 *
 * rank comparison
 * ord for ordering comparisons
 * https://en.wikipedia.org/wiki/Category_of_preordered_sets
 */
interface Ord<T> extends Setoid<T> {
  lte(b: Ord<T>): Boolean;
}
