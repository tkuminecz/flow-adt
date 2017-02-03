// @flow
import type { $App } from 'flow-higher';

/**
 * `Setoid` type class
 */
export interface Setoid<K, T> {
	equals(a: $App<K, T>, b: $App<K, T>): bool,
	notEquals(a: $App<K, T>, b: $App<K, T>): bool
}
