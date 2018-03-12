/**
 * traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
 *
 *
 *
 *
 * has `.map` and `.reduce`
 */
interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse(a: Applicative<any>, travFn: (...args: any[]) => typeof a): typeof a;
}
