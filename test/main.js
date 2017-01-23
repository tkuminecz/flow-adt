// @flow
import type { $1Type, $T1 } from 'flow-higher';
import { ADT, createDataType, TypeDef } from '../src/main';
import test from 'tape';

test('flow-adt', t => {
	t.plan(1);
	t.pass('stub');
});

/**
 * flow tests
 */
if (false) { // eslint-disable-line no-constant-condition

	const Maybe2 = createDataType(
		class MaybeData<T: $1Type<any>> extends TypeDef<T, {
			data:
				| { tag: 'Just', value: $T1<T> }
				| { tag: 'Nothing' }
		}> {},
		(T) => class Maybe {

			Kind = T

			Just<A: *>(a: A): ADT<T, $1Type<A>> {
				return ADT.wrap(T, { tag: 'Just', value: a });
			}

			Nothing(): ADT<T, $1Type<*>> {
				return ADT.wrap(T, { tag: 'Nothing' });
			}

		}
	);

	(Maybe2.Just(42): ADT<Maybe2.Kind, $1Type<number>>); // eslint-disable-line no-unused-expressions

}
