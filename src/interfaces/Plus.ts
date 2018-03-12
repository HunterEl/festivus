/**
 * zero :: Plus f => () -> f a
 *
 * x.alt(A.zero()) == x // right identity
 * A.zero().alt(x) == x // left identity
 * A.zero().map(f) == A.zero() // annihilation
 *
 * Applied at that type-class level and not at the method/instance level, but can be accessed with a structure like `x.constructor.zero()`
 *
 * Feels very similar to Monoid->empty
 * Get an empty-set value on the type of Plus<T>
 *
 */
interface Plus<T> extends Alt<T> {
  zero(): Plus<T>;
}
