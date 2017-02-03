// @flow
import type { Setoid } from './setoid';

/**
 * `Eq` type class
 */
export interface Eq<K, T> extends Setoid<K, T> {}
