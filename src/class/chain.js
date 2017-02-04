// @flow
import type { $A, $SwapA } from 'flow-type-list';
import type { $App } from 'flow-higher';
import type { Apply } from './apply';

/**
 * `Chain` type class
 */
export interface Chain<K, T> extends Apply<K, T> {
	chain<B>(next: (a: $A<T>) => $App<K, $SwapA<T, B>>, ma: $App<K, T>): $App<K, $SwapA<T, B>>
}
