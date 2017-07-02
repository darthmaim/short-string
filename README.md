# short-string

[![version][npm-badge]][npm]
[![license][license-badge]](LICENSE)
[![Travis][travis-badge]][travis]
[![Coverage][coverage-badge]][coverage]

[npm-badge]: https://img.shields.io/npm/v/short-string.svg?style=flat-square
[license-badge]: https://img.shields.io/github/license/darthmaim/short-string.svg?style=flat-square
[travis-badge]: https://img.shields.io/travis/darthmaim/short-string.svg?style=flat-square
[coverage-badge]: https://img.shields.io/codecov/c/github/darthmaim/short-string.svg?style=flat-square
[npm]: https://www.npmjs.com/package/short-string
[travis]: https://travis-ci.org/darthmaim/short-string
[coverage]: https://codecov.io/github/darthmaim/short-string

Function to create short strings based on given alphabets for the first char and the remaining ones. Default strings are valid CSS identifiers.

Can for example be used to generate short CSS identifiers as part of a custom encoder for [postcss-reduce-idents](https://github.com/ben-eb/postcss-reduce-idents) or a namer for [modular-css](https://github.com/tivac/modular-css).

## Installation

```
npm install --save short-string
```

## Usage

### Default short-string

```js
import shortString from 'short-string';

shortString(0)
// ⇒ 'a'
```

Parameters:
* `num` - A `Number` identifying the index of the occurrence.


### Factory

```js
import shortStringFactory from 'short-string/lib/factory';

const customShortString = shortStringFactory('ab', 'abc');

customShortString(5);
// ⇒ 'ba'
```

Parameters:
* `characters` - A `String` containing all valid characters for the first char of the generated short string.
* `charactersExtra` - A `String` containing all valid characters for the remaining chars of the generated short string. Must start with `characters`.

## Examples

### [postcss-reduce-idents](https://github.com/ben-eb/postcss-reduce-idents)

This is the configuration of [postcss-reduce-idents](https://github.com/ben-eb/postcss-reduce-idents) to use short-string as encoder.

```js
const options = {
    encoder: (value, occurrence) => shortString(occurrence)
}
```

### [modular-css](https://github.com/tivac/modular-css)

This is an example namer function for [modular-css](https://github.com/tivac/modular-css) using short-string to generate short selector names.

```js
function shortStringNamer() {
    const known = {};
    const nextIndex = 0;

    return function(file, selector) {
        const id = file + selector;

        return shortString(known[id] || (known[id] = nextIndex++));
    }
}

new Processor({
    namer: shortStringNamer()
});
```


## License

**short-string** is licensed under the [MIT License](LICENSE).
