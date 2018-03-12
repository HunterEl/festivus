/**
 * filter :: Filterable f => f a ~> (a -> Boolean) -> f a
 *
 * https://en.wikipedia.org/wiki/Filter_(higher-order_function)
 *
 * Think of it like a normal JS filter you would do.
 * Predicate function which will return true||false based on some logic, presumably, applied to the Filterable<T> passed to filterFn
 * Should return a value of type Filterable<T> (so you can apply more filters obvs!)
 *
 * Some Algebra for ya:
 * f.filter(a => p(a) && q(a)) == f.filter(p).filter(q) // distributivity
 * f.filter(a => true) == f // identity
 * f.filter(a => false) == g.filter(a => false) // IFF F,G are of the same Filterable Type. Annihilation
 *
 * That's all folks. Nothing else to see here. Move along.
 */
interface Filterable<T> {
  filter(filterFn?: (a: Filterable<T>) => Boolean): Filterable<T>;
}
