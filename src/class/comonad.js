// @flow
import type { $A } from 'flow-type-list';
import type { $App } from 'flow-higher';
import type { Extend } from './extend';
import type { Functor } from './functor';

/**
 * `Comonad` type class
 */
export interface Comonad<K, T> extends Extend<K, T>, Functor<K, T> {
	extract(ca: $App<K, T>): $A<T>
}
