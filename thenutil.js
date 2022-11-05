const SPY = {look:''};
const spy = fn => v => (fn(v), v);
const log = spy(console.log);
const pick = spy(v => SPY.look = v);
