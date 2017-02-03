// @flow
import type { $A, $App, $SwapA } from 'flow-higher';

/**
 * `Foldable` type class
 */
export interface Foldable<K, T> {
	reduce<B>(reducer: (a: $A<T>, b: B) => $A<T>, $App<K, $SwapA<T, B>>): $A<T>
}
