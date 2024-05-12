import { diff } from 'deep-object-diff';
const a = {
    aaa: 11,
    bbb: [],
    ccc: 'ccc',
    fn: () => undefined,
    nesting: {
        xxx: 111,
        yyy: 222
    }
}
const b = {
    aaa: 11,
    bbb: 222,
    ddd: 'ddd',
    fn: () => undefined,
    nesting: {
        xxx: 111,
        zzz: 333
    }
}
console.log(diff(a, b))

