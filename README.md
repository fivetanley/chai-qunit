Chai QUnit [![Build Status](https://travis-ci.org/fivetanley/chai-qunit.svg?branch=master)](https://travis-ci.org/fivetanley/chai-qunit)
==========

Chai-QUnit is a layer on top of QUnit using the [chai][chai] assertion library.

## Installation

`bower install --save-dev chai-qunit`

or

`npm install --save-dev chai-qunit`

Then include it using a script tag:

```html
<script type="text/javascript" src="/path/to/bower_components/chai-qunit/dist/chai-qunit.js">
  chaiQUnit.globalize();
</script>
```

or use your favorite module system (AMD, CJS, ES6):

```js
var chaiQUnit = require('chai-qunit');
chaiQUnit.globalize();
```

## Why

Chai tends to have better error messages if you don't provide one yourself, and
has a bunch of other useful helpers(like `include`, `match`, etc.)
and a robust plugin system for creating your own.

## Usage

See the [Chai Docs][chai-docs] for more usage information, but this implementation
currently uses the `assert` syntax exposed as globals (`expect` and `should`
are planned to be supported soon). For example, with chai standalone, you would
say `assert.matches("hello", /hello/i)`. In chai-qunit, you would say `matches("hello", /hello/i)`.

## Test Example

```js

module("My Module");

test("title matches something", function(){
  var title = "A Book about Nothing";
  matches(title, /book/i);
});
```

## License

MIT. See the `LICENSE` file included with this repository.

<!-- links -->
[chai]: http://chaijs.com
[chai]: http://chaijs.com/api/assert/
