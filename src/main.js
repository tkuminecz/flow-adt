// @flow
import type { $TList } from 'flow-higher';

export class TypeDef<Sig: $TList<any, any>, Opts: { data: any }> {} // eslint-disable-line no-unused-vars

export class ADT<K, T> { // eslint-disable-line no-unused-vars

	static wrap<Sig: $TList<any, any>, Data, Def: TypeDef<Sig, { data: Data }>>(k: Class<Def>, data: Data): ADT<Def, Sig> {
		return ((data: any): ADT<Def, Sig>);
	}

	static unwrap<Sig, Data, Def: TypeDef<Sig, { data: Data }>>(def: Def, adt: ADT<Def, Sig>): Data {
		return ((adt: any): Data);
	}

}

export function createDataType<Sig: $TList<any, any>, TypeInstance: *, Data, ThisAdt: TypeDef<Sig, { data: Data }>>(
	TypeSpec: Class<ThisAdt>,
	instanceClassFn: (type: Class<ThisAdt>) => Class<TypeInstance>

): TypeInstance  {
	return new instanceClassFn(TypeSpec)();
}
