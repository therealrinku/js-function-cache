# Function-Cache

A simple npm package for caching the results of function calls, reducing the number of times the function needs to be executed.
https://github.com/therealrinku/js-function-cache

## Installation

`npm i js-function-cache`

## Usage

```javascript
import cache from "cache";

function expensiveFunction(a, b) {
  return a + b;
}

const cachedFunction = cache("id", () => expensiveFunction(2, 4));

cachedFunction(); // executes the function and caches the result
cachedFunction(); // returns cached result
```

## Contributing

Pull requests are welcomed with open heart here
https://github.com/therealrinku/js-function-cache

## License

The package is available as open source under the terms of the ISC License.

## Special Thanks

Special thanks to ChatGPT for helping me generate this readme.md file cause I suck at writing markdown files fr no cap.
