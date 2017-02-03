// @flow
import type { $App } from 'flow-higher';
import type { Functor } from './functor';

/**
 * `Alt` type class
 */
export interface Alt<K, T> extends Functor<K, T> {
	alt(a: $App<K, T>, b: $App<K, T>): $App<K, T>
}
