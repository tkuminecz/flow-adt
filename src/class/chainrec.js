// @flow
import type { $A, $SwapA } from 'flow-type-list';
import type { $App } from 'flow-higher';
import type { Chain } from './chain';

/**
 * `ChainRec` type class
 */
export interface ChainRec<K, T> extends Chain<K, T> {
	chainRec<B, C>(fa: (ac: (a: $A<T>) => C, bc: (b: B) => C, a: $A<T>) => $App<K, $SwapA<T, C>>, a: $A<T>): $App<K, $SwapA<B>>
}
