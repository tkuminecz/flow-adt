// @flow
import { type $App } from 'flow-higher';
import { type DictOf } from 'flow-helpers';

/**
 * `Unfoldable` type class
 */
export interface Unfoldable<K, T> {
	cata<B, C: DictOf<(a: any) => B>>(cases: C, ta: $App<K, T>): B
}
