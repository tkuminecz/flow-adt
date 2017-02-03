// @flow
import type { $App } from 'flow-higher';
import type { Alt } from './alt';

/**
 * `Plus` type class
 */
export interface Plus<K, T> extends Alt<K, T> {
	zero(): $App<K, T>
}
