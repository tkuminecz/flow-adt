// @flow
import type { $App } from 'flow-higher';

/**
 * `Semigroup` type class
 */
export interface Semigroup<K, T> {
	concat(a: $App<K, T>, b: $App<K, T>): $App<K, T>
}
