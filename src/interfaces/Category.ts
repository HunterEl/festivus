/**
 * id :: Category c => () -> c a a
 *
 * a.compose(C.id()) is equivalent to a (right identity)
 * C.id().compose(a) is equivalent to a (left identity)
 *
 * id must return a value of the same Category
 */
interface Category<T> extends Semigroupoid<T> {
  id(): Category<T>;
}
