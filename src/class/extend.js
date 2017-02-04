// @flow
import type { $App } from 'flow-higher';
import type { $SwapA } from 'flow-type-list';

/**
 * `Extend` type class
 */
export interface Extend<K, T> {
	extend<B>(f: (ea: $App<K, T>) => B, $App<K, T>): $App<K, $SwapA<T, B>>
}
