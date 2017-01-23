// @flow
import type { $TList, $1Type, $T1, $T2 } from 'flow-higher';
import { HKT, t1 } from 'flow-higher';

/**
 * DataType class
 */
export class DataType<Kind, TypeSignature: $TList<any, any>, Instance, Data> {

	instance: Instance

	data: Data

	constructor(kind: Class<Kind>, instance: Instance, data: Data): void {
		this.instance = instance;
		this.data = data;
	}

	/**
	 * wrap :: Class Kind -> Data -> DataType Kind TypeSignature Data
	 */
	static wrap<Kind, TSig: $TList<any, any>, Instance, Data, DataTypeClass: DataType<Kind, TSig, Instance, Data>>(dataType: DataTypeClass, data: Data): HKT<DataTypeClass, TypeSignature> {
		return ((data: any): HKT<DataTypeClass, TypeSignature>);
	}

	/**
	 * unwrap :: Class Kind -> DataType Kind TypeSignature Data -> Data
	 */
	static unwrap<Kind, TypeSignature: $TList<any, any>, Data>(kind: Class<Kind>, wrappedData: DataType<Kind, TypeSignature, Data>): Data {
		return ((wrappedData: any): Data);
	}

}


class IsMaybe {}

type MaybeData<T> =
	| { tag: 'Just', value: $T1<T> }
	| { tag: 'Nothing' }

// type $Maybe<T> = KindWithInstance<IsMaybe, Maybe, MaybeData<T>>

// class MaybeType<T: $TList<any, any>> extends DataType<IsMaybe, T, MaybeData<T>> {}

// class Maybe {}



class IsEither {}

type Either<T> =
	| { tag: 'Left', value: $T1<T> }
	| { tag: 'Right', value: $T2<T> }




class TypeDef<Sig, Opts: { data: any }> {

}

class ADT<K, T> {

	static wrap<Sig, Data, Def: TypeDef<Sig, { data: Data }>>(k: Class<Def>, data: Data): ADT<Def, Sig> {
		return ((data: any): ADT<Def, Sig>);
	}

	static unwrap<Sig, Data, Def: TypeDef<Sig, { data: Data }>>(def: Def, adt: ADT<Def, Sig>): Data {
		return ((adt: any): Data);
	}

}

type TypeSpec<T, I> = {
	type: T,
	instance: I
}

class Instance<K> {
	Kind: Class<K>
	constructor(kind: Class<K>): void {
		this.Kind = kind;
	}
}

function createDataType<Kind, Sig, TypeInstance: *, Data, ThisAdt: TypeDef<Sig, { data: Data }>>(
	TypeSpec: Class<ThisAdt>,
	instanceClassFn: (type: Class<ThisAdt>) => Class<TypeInstance>

): TypeInstance  {
	const KindClass = ((class {}: any): Class<Kind>);

	const InstanceClass = instanceClassFn(TypeSpec);

	return new InstanceClass();
}


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

(Maybe2.Just(42): ADT<Maybe2.Kind, $1Type<number>>);
