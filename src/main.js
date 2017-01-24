// @flow
import type { $List } from 'flow-higher';

export class Type<Sig: $List<any, any>, Tags> {} // eslint-disable-line no-unused-vars

export class ADT<K, T, D> { // eslint-disable-line no-unused-vars

	static wrap<Sig: $List<any, any>, Tags, Def: Type<Sig, Tags>>(k: Class<Def>, tag: Tags): ADT<Def, Sig, Tags> {
		return ((tag: any): ADT<Def, Sig, Tags>);
	}

	static unwrap<Sig, Tags, Def: Type<Sig, Tags>>(def: Class<Def>, adt: ADT<Def, Sig, Tags>): Tags {
		return ((adt: any): Tags);
	}

}

export type $ADT<K, T> = ADT<K, T, *>

interface InstanceBase<T> {
	$Type: T
}

export function createDataType<Sig: $List<any, any>, TypeInstance: *, Tags, ThisAdt: Type<Sig, Tags>>(
	TypeDef: Class<ThisAdt>,
	instanceClassFn: (base: Class<InstanceBase<Class<ThisAdt>>>, type: Class<ThisAdt>) => Class<TypeInstance>

): TypeInstance  {
	const Base = class {
		$Type = TypeDef
	};

	return new instanceClassFn(Base, TypeDef)();
}
