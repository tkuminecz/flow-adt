// @flow
import type { $A, $SwapA } from 'flow-type-list';
import type { $App } from 'flow-higher';

/**
 * `Functor` type class
 */
export interface Functor<K, T> {
	map<B>(f: (a: $A<T>) => B, fa: $App<K, T>): $App<K, $SwapA<T, B>>
}
