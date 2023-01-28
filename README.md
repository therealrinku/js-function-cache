# Function-Cache

A simple npm package for caching the results of function calls, reducing the number of times the function needs to be executed.

## Installation

npm i js-function-cache

## Usage

```javascript
import cache from "cache";

function expensiveFunction(a, b) {
  return a + b;
}

const cachedFunction = cache("id", () => expensiveFunction(2, 4));

cachedFunction(); // executes the function and caches the result
cachedFunction(); // returns cached result, without executing the function again
```

## Contributing
Pull requests are welcomed with open heart here
https://github.com/therealrinku/function-cache

## License
The package is available as open source under the terms of the ISC License.


