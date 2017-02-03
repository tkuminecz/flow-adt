```javascript

const Maybe = adt(
	([a]) => ({
		kind: MaybeK,
		sig: tlist_1(a),
		tags: [
			tag('Just', [a]),
			tag('Nothing', []),
		],
		cases: (b) => ({
			Just: Arrow.of([a], b),
			Nothing: Arrow.of([], b),
		}),
		instance: {
			map: (f, fa) => {

			}
		}
	})
);

```
