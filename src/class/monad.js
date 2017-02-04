// @flow
import type { $A, $SwapA } from 'flow-type-list';
import type { $App } from 'flow-higher';
import type { Applicative } from './applicative';
import type { Chain } from './chain';

/**
 * `Monad` type class
 */
export interface Monad<K, T> extends Applicative<K, T>, Chain<K, T> {
	andThen<B>(next: (a: $A<T>) => $App<K, $SwapA<T, B>>, ma: $App<K, T>): $App<K, $SwapA<T, B>>
}
