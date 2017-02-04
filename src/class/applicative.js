// @flow
import type { $A } from 'flow-type-list';
import type { $App } from 'flow-higher';
import type { Apply } from './apply';

/**
 * `Applicative` type class
 */
export interface Applicative<K, T> extends Apply<K, T> {
	of(a: $A<T>): $App<K, T>
}
