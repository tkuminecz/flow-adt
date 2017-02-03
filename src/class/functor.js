// @flow
import type { $A, $App, $SwapA } from 'flow-higher';

/**
 * `Functor` type class
 */
export interface Functor<K, T> {
	map<B>(f: (a: $A<T>) => B, fa: $App<K, T>): $App<K, $SwapA<T, B>>
}
