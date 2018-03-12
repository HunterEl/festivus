/**
 * invert :: Group g => g ~> () -> g
 *
 * https://en.wikipedia.org/wiki/Group_object
 * https://en.wikipedia.org/wiki/Group_(mathematics)
 * https://en.wikipedia.org/wiki/Inverse_element
 *
 * We have an identity operation(empty), an additive operation(concat) and now invert, if a value is of type Group<T>
 * Groups are generalizations which are built on more complicated structures than sets.
 * Name is derived from 'iversus' (Latin) to mean 'turned upside down'/'overturned'
 * The general idea of inversion is to 'undo' the effect of a previous combination
 * Groups are a set of elements with closure, associativity, identity, and invertibility. Have a look at what this interface extends and see if that sounds familiar.
 *
 * Bringing this into the current context:
 * g.concat(g.invert()) == g.constructor.empty() // right inverse
 * g.invert().concat(g) == g.constructor.empty() // left inverse
 *
 * Based on the properties which need to algebraically hold, `invert` should return the same value as calling `empty` on the type which implements Group<T>.
 */
interface Group<T> extends Monoid<T> {
  invert(): Group<T>;
}
