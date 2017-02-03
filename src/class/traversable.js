// @flow
import type { $A, $App, $SwapA } from 'flow-higher';
import type { Applicative } from './applicative';
import type { Foldable } from './foldable';
import type { Functor } from './functor';

/**
 * `Traversable` type class
 */
export interface Traversable<K, T> extends Foldable<K, T>, Functor<K, T> {
	traverse<F, App: Applicative<F>, B>(app: App, f: (a: $A<T>) => $App<F, $SwapA<T, B>>, ta: $App<K, T>): $App<K, $SwapA<T, $App<F, $SwapA<T, B>>>>
}
