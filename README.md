
# Cypress-Automation-Cucumber

## Maiia website E2E

## Installing

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

Install Cypress for Mac, Linux, or Windows, then [get started](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

```bash
npm install cypress --save-dev
```
or
```bash
yarn add cypress --dev
```

### Cucumber Installation

Install the plugin by running:

```shell
npm install --save-dev cypress-cucumber-preprocessor
```

### Cypress Configuration

Add it to your plugins:

`cypress/plugins/index.js`

```javascript
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Add support for feature files to your Cypress configuration

`cypress.json`

```json
{
  "testFiles": "**/*.feature"
}
```

### Configuration

Please make use of [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) to create a configuration for the plugin, for example, by adding this section to your package.json:

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```

*This will become the default option in a future version*


