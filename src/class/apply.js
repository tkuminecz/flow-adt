// @flow
import type { $A, $App, $SwapA } from 'flow-higher';
import type { Functor } from './functor';

/**
 * `Apply` interface
 */
export interface Apply<K, T> extends Functor<K, T> {
	ap<B>(ff: $App<K, (a: $A<T>) => B>, fa: $App<K, T>): $App<K, $SwapA<T, B>>
}
