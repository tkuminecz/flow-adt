// @flow
import type { $A, $App } from 'flow-higher';
import type { Apply } from './apply';

/**
 * `Applicative` type class
 */
export interface Applicative<K, T> extends Apply<K, T> {
	of(a: $A<T>): $App<K, T>
}
