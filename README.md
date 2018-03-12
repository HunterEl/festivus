# Festivus

_A Festivus for the rest of us_

A library to provide typed interfaces and definitions for the [Fantasy-land spec](https://github.com/fantasyland/fantasy-land) and some other FP/Haskell types.

This is most likely a terrible idea, but will serve as a learning tool and a way to lower the barrier of entry for FP & Category-Theory concepts.

## Why

I was noticing a trend where people tend to stop their functional programming education after learning a couple of useful tools (E.G `List.of(Map, Filter, Reduce, Monads)`), but I believe that there is tremendous value in providing a flexible and well-documented type-system to implement your own FP-libraries or for educational use.

## What Will Happen Here?

This is obviously in very early stages, so the API/Interface contracts will be shifting for some time, but the basic goal of `this` repository is to provide just the interface contracts from the [Fantasy-land spec](https://github.com/fantasyland/fantasy-land) and other useful FP/Haskell types/libs.

## What's With The Name?

[Festivus](https://en.wikipedia.org/wiki/Festivus). Like Festivus, it should be for the rest of us.

## How To Use

Again, this is super early stages of development, but the idea is this:

Say you want to create a type which is a `Monad` (in terms of the fantasty-land spec), you would create a type which implements the `Monad` interface (These are all `Typescript` definitions).

### MONAD:

```javascript
interface Monad<T> extends Applicative<T>, Chain<T> {}
```

To implement the `Monad` interface for your type, you would need the `Applicative` and `Chain` interfaces for your type

### APPLICATIVE

```javascript
interface Applicative<T> extends Apply<T> {
  of(a: any): Applicative<T>;
}
```

### CHAIN

```javascript
interface Chain<T> extends Apply<T> {
  // TOOD: I may not need to specify arguments for the function
  // just as long as it return a valid Chain implementation
  chain(f: (...args: any[]) => Chain<T>): Chain<T>;
}
```

Both `Chain` and the `Applicative` interfaces require you to implement the `Apply` interface

### APPLY

```javascript
interface Apply<T> extends Functor<T> {
  // b needs to be an Apply<T> of a function
  ap(b: Apply<T>): Apply<T>;
}
```

And of course, `Apply` needs to implement `Functor`.

### FUNCTOR

```javascript
interface Functor<T> {
  map(mapFn?: (a: Functor<T>) => any): Functor<T>;
}
```

So, what the hell did this get us?

Well, if we implemented all these interfaces for our given type, we can now, `legally`, have a `Monad` for our type. This allows you to use `MyType.of(val)`, `monad.map(someFunc)`, `monad.chain(chainFn)`, `monad.ap(applyFn)`. By trying to model the algebra hierarchy as interfaces extending other interfaces, we can add more structure to our FP-laws in JS-land and clearly see the type-structure needed to use more complicated FP types.
