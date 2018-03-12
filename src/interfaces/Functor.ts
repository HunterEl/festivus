/**
 * map :: Functor f => f a ~> (a -> b) -> f b
 *
 * https://en.wikipedia.org/wiki/Functor
 * https://en.wikipedia.org/wiki/Function_word
 * https://en.wikipedia.org/wiki/Functor_category
 *
 * A way of applying a morphism to an existing category type
 * In JS we can think of this as anything which is 'mappable' (remember that we don't always apply map to lists!)
 *
 * The map function can return anything and the responsibility of wrapping up the value(s) back into type Functor<T> should be the job of the `map` implementation
 *
 * u.map(a => a) == u // identity
 * u.map(x => f(g(x))) == u.map(g).map(f) // composition
 *
 * Should return type of Functor<T> so you can continue to apply map operations
 * Also can be called "Covariant Functors" in order to distinguish themselves from "Contravariant Functors"
 */
interface Functor<T> {
  map(mapFn?: (a: Functor<T>) => any): Functor<T>;
}
