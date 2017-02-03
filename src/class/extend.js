// @flow
import type { $App, $SwapA } from 'flow-higher';

/**
 * `Extend` type class
 */
export interface Extend<K, T> {
	extend<B>(f: (ea: $App<K, T>) => B, $App<K, T>): $App<K, $SwapA<T, B>>
}
