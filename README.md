# thenutil

```js
const SPY = {look:''};
const spy = fn => v => (fn(v), v);
const log = spy(console.log);
const pick = spy(v => SPY.look = v);
```

```js
var foo;

async function sendspy(spyFn) {
	let result = await Promise((res, rej) => {
		res(10)
	}) 
		.then(log) // 10
		.then(v => v + 20)
		.then(pick) // SPY.loog is 30
		.then(v => + 5)
		.then(log) // 35
		.then(spy(spyFn)); // 35
	return result;
}

sendspy(v => foo = V)
	.then(log); // 35
console.log(foo); // 35
```