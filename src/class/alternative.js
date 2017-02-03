// @flow
import type { Applicative } from './applicative';
import type { Plus } from './plus';

/**
 * `Alternative` type class
 */
export interface Alternative<K, T> extends Applicative<K, T>, Plus<K, T> {}
