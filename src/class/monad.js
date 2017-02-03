// @flow
import type { Applicative } from './applicative';
import type { Chain } from './chain';

/**
 * `Monad` type class
 */
export interface Monad<K, T> extends Applicative<K, T>, Chain<K, T> {}
