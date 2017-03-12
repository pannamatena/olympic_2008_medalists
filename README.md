# Olympics 2008 Medalists

## What is this?
This is a simple React app to display the countries that got medals at the 2008 Olympic Games. The results can be filtered by gold, silver and bronze medals.

## How to install?
Just clone the repo and run `npm install`

## Tests
Run unit tests with `npm run test`

## What is left to improve?
Currently there are only unit tests to test the data aggregator. However, React-specific component tests could improve code quality.

As much as the code tries to follow the Clean Code principles, it is still not perfect. The aggregator could be improved so that filter types or medal keys are not hardcoded into it, making it possible to easily introduce new medal or filter types (eg. the medal types can be added as an array, and all functions in the aggreagator get these values dynamically).

Finally, the fallbacks for slow internet connection or when JavaScript is not available in the browser can be improved in style to provide a better user experience. Browser support notifications are also missing, which would be an essential part of the UX, since React doesn't support IE8, and I'm using flexboxes, which is buggy in IE11 or lower. A thorough testing of the app in different browsers on different devices is also a debt.