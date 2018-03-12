/**
 * a.compose(b).compose(c) === a.compose(b.compose(c)) (associativity)
 *
 * compose :: Semigroupoid c => c i j ~> c j k -> c i k
 *
 * for composing application logic and order flow
 *
 */
interface Semigroupoid<T> {
  compose(b: Semigroupoid<T>): Semigroupoid<T>;
}
