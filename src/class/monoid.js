// @flow
import type { $App } from 'flow-higher';
import type { Semigroup } from './semigroup';

/**
 * `Monoid` type class
 */
export interface Monoid<K, T> extends Semigroup<K, T> {
	empty(): $App<K, T>
}
