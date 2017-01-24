// @flow
import { exhaust } from 'flow-helpers';
import type { $1List, $2List, $T1, $T2 } from 'flow-higher';
import { type $ADT, ADT, createDataType, Type } from '../src/main';
import test from 'tape';

test('flow-adt', t => {
	t.plan(1);
	t.pass('stub');
});

/**
 * flow tests
 */
if (false) { // eslint-disable-line no-constant-condition

	const Maybe = createDataType(
		class MaybeData<T: $1List<any>> extends Type<T,
			| { tag: 'Just', value: $T1<T> }
			| { tag: 'Nothing' }
		> {},
		(Impl, Kind) => class Maybe extends Impl {

			Just<A: *>(a: A): $ADT<Kind, $1List<A>> {
				return ADT.wrap(Kind, { tag: 'Just', value: a });
			}

			Nothing(): $ADT<Kind, $1List<*>> {
				return ADT.wrap(Kind, { tag: 'Nothing' });
			}

		}
	);

	(Maybe.Just(42): $ADT<Maybe.$Type, $1List<number>>); // eslint-disable-line no-unused-expressions

	const Either = createDataType(
		class EitherType<T: $2List<any, any>> extends Type<T,
			| { tag: 'Left', value: $T1<T> }
			| { tag: 'Right', value: $T2<T> }
		> {},
		(Impl, Kind) => class Either extends Impl {

			Left<T: *>(a: $T1<T>): $ADT<Kind, T> {
				return ADT.wrap(Kind, { tag: 'Left', value: a });
			}

			Right<T: *>(b: $T2<T>): $ADT<Kind, T> {
				return ADT.wrap(Kind, { tag: 'Right', value: b });
			}

			cases<T: *, B>(patterns: { Left: (a: $T1<T>) => B, Right: (b: $T2<T>) => B }, either: $ADT<Kind, T>): B {
				const data = ADT.unwrap(Kind, either);

				switch (data.tag) {
				case 'Left':
					return patterns.Left(data.value);

				case 'Right':
					return patterns.Right(data.value);

				default:
					return exhaust(data.tag);
				}
			}

		}
	);

	// $FlowFixMe
	(Either.Left('tim'): $ADT<Either.$Type, $2List<number, string>>); // eslint-disable-line no-unused-expressions
	// $FlowFixMe
	(Either.Right('tim'): $ADT<Either.$Type, $2List<string, number>>); // eslint-disable-line no-unused-expressions

}
