---
page_type: sample
languages:
- javascript
- nodejs
products:
- azure-active-directory
description: "A simple Angular single page application calling the Microsoft Graph using MSAL Angular (Azure AD V2 endpoint)."
urlFragment: "active-directory-javascript-singlepageapp-angular"
---

# MSAL Angular Sample Application

A simple Angular single-page application which demonstrates how to configure [MSAL Angular](https://www.npmjs.com/package/@azure/msal-angular) to login, logout, protect a route, and acquire an access token for a protected resource such as the Microsoft Graph.

**Note:** This sample's structure was generated with the [Angular CLI](https://cli.angular.io/).

## Contents

| File/folder       | Description                                |
|-------------------|--------------------------------------------|
| `e2e`             | End-to-end test files.                     |
| `src`             | Sample source code.                        |
| `.editorconfig`   | Defines editor config settings.            |
| `.gitignore`      | Define what to ignore at commit time.      |
| `angular.json`    | Angular configuration file.                |
| `browserslist`    | BrowsersList configuration file.           |
| `CHANGELOG.md`    | List of changes to the sample.             |
| `CODE_OF_CONDUCT.md` | Code of Conduct information.            |
| `CONTRIBUTING.md` | Guidelines for contributing to the sample. |
| `karma.conf.js  ` | Configuration for the karma test runner.   |
| `LICENSE`         | The license for the sample.                |
| `NG_README.md`    | README auto-generated by the Angular CLI.  |
| `package-lock.json` | Lockfile for npm. |
| `package.json`    | Package manifest for npm.                   |
| `README.md`       | This README file.                          |
| `SECURITY.md`     | Security disclosures.                      |
| `tsconfig.*.json` | TypeScript configuration files.            |
| `tslint.json`     | TS Lint configuration files.               |

## Prerequisites

[Node](https://nodejs.org/en/) must be installed to run this sample.

## Setup

1. [Register a new application](https://docs.microsoft.com/azure/active-directory/develop/scenario-spa-app-registration) in the [Azure Portal](https://portal.azure.com). Ensure that the application is enabled for the [implicit flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow).
2. Open the [src/app/app.module.ts](./src/app/app.module.ts) file and provide the required configuration values (inside `MsalModule.forRoot`).
3. On the command line, navigate to the root of the repository, and run `npm install` to install the project dependencies via npm.

## Running the sample

1. To start the sample application, run `npm start`.
2. Next, open a browser to [http://localhost:4200](http://localhost:4200).

## Key concepts

This sample demonstrates the following MSAL Angular concepts:

* Configuration
* Login
* Logout
* Protecting a route
* Acquiring an access token and attaching it to http calls

## Contributing

If you'd like to contribute to this sample, see [CONTRIBUTING.MD](./CONTRIBUTING.md).

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
