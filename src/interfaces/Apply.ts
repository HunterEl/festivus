/**
 * ap :: Apply f => f a ~> f (a -> b) -> f b
 *
 * Takes an Apply<T>, which is an Apply<T> of a function, and applies it to the calling Apply<T> value
 *
 * v.ap(u.ap(a.map(f => g => x => f(g(x))))) == v.ap(u).ap(a) // (composition)
 *
 * Basically, think of the apply function in normal JS-land and invert the call signature. You have some wrapped value, in this case it's Apply<T> of a value
 * and you call `.ap` with an Apply<T> of a function to apply to your value (could be another function for composition purposes) and it will return an Apply<T>
 * wrapping of the returned value (either concrete or another function)
 */
interface Apply<T> extends Functor<T> {
  // b needs to be an Apply<T> of a function
  ap(b: Apply<T>): Apply<T>;
}
