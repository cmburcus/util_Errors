![CMB](logo.png "Corado M. Burcus")

## Error Util

This utility is used to define Javascript errors that can be thrown from within your application. Instead of throwing generic Javascript errors that are non descriptive, this package would allow you to ensure the same format is used accross projects or microservices.

**Table of contents**
* [Usage](#usage)
  * getAuthenticationError
  * getInvalidTokenError
  * getInvalidArgumentError
  * getValidationError
* [Docker](#docker)
* [Development requirements](#requirements-for-evelopment)
* [Setup](#setup)
* [Commands](#commands)
* [Testing](#Testing)
* [Contributions](#contributions)

---

## Usage

In your `package.json`, add the following dependency:

```
"error-util": "git+ssh://git@github.com:cmburcus/util_Errors.git"
```

Then install your dependencies with `npm` or `yarn`

In your code, import the package:

`const errorUtil = require('error-util');`

Use the following functions as required:

`getAuthenticationError(error)` - Gets an authentication error
* type: AuthenticationError
* message: 'Authentication failed'
* status: `401`
* error: `error` as passed as an argument or null

`getInvalidTokenError(error)` - Gets an invalid token error
* type: InvalidTokenError
* message: 'Invalid token'
* status: `401`
* error: `error` as passed as an argument or null

`getInvalidArgumentError(error)` - Gets an invalid argument error
* type: InvalidArgumentError
* message: 'Invalid argument'
* status: `400`
* error: `error` as passed as an argument or null

`getValidationError(error)` - Gets a validation error
* type: ValidationError
* message: 'Validation failed'
* status: `400`
* error: `error` as passed as an argument or null

`getSystemError(error)` - Gets a system error
* type: SystemError
* message: 'Internal server error'
* status: `500`
* error: `error` as passed as an argument or null

`getNotFoundError(error)` - Gets a not found error
* type: NotFoundError
* message: 'Not found'
* status: `404`
* error: `error` as passed as an argument or null

`notFoundHandler(request, response, next)` - Middleware to handle 404 routes
Calls the `next` callback with a NotFoundError and no argument

`errorHandler(error, request, response, next)` - Middleware to handle error responses
Returns a json response with the error. The status code of the response will be determined by the error

If the error is a system error not thrown on purpose, a `SystemError` will be returned that will include the stack trace of the error.
If the environment is production, the stack trace will not be included.

## Docker

To make development and deployment easy, this service makes use of [Docker and Docker Compose](https://docs.docker.com/).

**Containers**
 * node:9.11.1
   * name: error_util_node

## Requirements for Development

In order to run this project, you simply need [Docker and Docker Compose](https://docs.docker.com/).

Any other system dependencies come already set up using Docker so you do not need to install them locally on your machine.

 * Docker >= 18.03
 * Docker Compose >= 1.21

## Setup

```
git clone git@github.com:cmburcus/util_Errors.git

cd util_Errors
```

## Commands

You shouldn't have to run the commands inside the `package.json` file as you should be using docker to run your project. The commands to run are setup in the `Makefile` file

**Build development environment**

`make build`

Your docker container will be built (including having dependencies installed)

**Build and run tests in the environment**

`make test`

Runs the `build` command but also runs your tests and closes the environment once it's done

---

**Build container**

`make start`

Simply builds your docker container

**Stop development environment**

`make stop`

Stops the docker container

**Clean development environment**

`make clean`

Stops environment and removes associated images.

---

**Install node dependencies**

`make install-dependencies`

Installs the node dependencies in the node container

**run-tests**

`make run-tests`

Runs the series of tests

NOTE: It assumes that the environment is up and dependencies have been installed

**SSH into the node container**

`make ssh`

Gives SSH access to the node container

**Display logs**

`make logs`

Displays the logs generated

**Format code with ESLint and Prettier**

`make format`

This will spin up the environment, format the code and then stop the environment

## Testing

Testing should be a priority. All aspects of the application should be fully tested as much as possible.

This project is using [Mocha](https://mochajs.org/) with [Chai](http://www.chaijs.com/). The test subdirectories and files should be placed under the `test` folder.

**To run the tests one time**

This command will start the environment (unless already running), run the tests and then stop the environment

`make test`

**If you're planning on running tests multiple times, you can run the following commands instead**

Start the environment

`make build`

Run your tests. You can modify the test files in between runs

`make run-tests`

When you're done, you can stop the testing environment

`make stop`

## Contributions

 **Features**

Adding new functionality to the application or changing existing functionalities

_Case A: Small feature (one branch)_
* Branch out of `master`
* Prefix branch name with `feature/your-branch-name`
* Before committing:
  * Rebase your branch from `master` to get the latest changes
  * Run `make format` to ensure code standards (There is no automated system)
  * Run `make test` to test the application
* Make a Pull Request into `master`

_Case B_ - _Bigger feature (two or more branches)_

* Branch out of `master`
* Create an integration branch named `feature-name/master`
* Push `feature-name/master` to origin
* For each small feature:
  * Branch out of `feature-name/master`
  * Name your branch `feature/your-branch-name`
  * Before committing:
    * Rebase your branch from `feature-name/master` to get the latest changes
    * Run `make format` to ensure code standards (There is no automated system)
    * Run `make test` to test the application
  * Make a Pull Request into `feature-name/master`
* When your big feature is complete:
  * Rebase `feature-name/master` from `master` to get the newest version
  * Run `make format` to ensure code standards (There is no automated system)
  * Run `make test` to test the application
  * Make a Pull Request from `feature-name/master` to `master`

 **Fixes**

Fixing bugs that might have been generated from features

* Branch out of `master`
* Name your branch `fix/your-branch-name`
* Before committing:
  * Rebase your branch from `master` to get the latest changes
  * Run `make format` to ensure code standards (There is no automated system)
  * Run `make test` to test the application
* Make a Pull Request into `master`
* Make a Pull Request into `develop`

 **Support**

No code modification should be performed in a support branch. You may update documentation or perform tasks to improve development (such as updating node_modules).

* Branch out of `master`
* Name your branch `support/your-branch-name`
* Before committing:
  * Rebase your branch from `master` to get the latest changes
  * Run `make format` to ensure code standards (There is no automated system)
  * Run `make test` to test the application
* Make a Pull Request into `develop`

 **Releases**

Version that has aquired enough features / bug fixes to be released.

Use `pre-release` as needed. Ideally all major versions should have a pre-release, but it can also be used for minor versions.

_Versioning_

`major.minor.patch` or `major.minor.patch-rc.iteration`

* `patch` - MUST be incremented if only backwards compatible bug fixes are introduced
* `minor` - MUST be incremented if new backwards compatible functionality is introduced
  * SHOULD be incremented if a functionality is marked as deprecated
  * MAY be incremented if substantial new functionality or improvements are introduced within the private code
  * MAY include patch level changes
  * Patch version MUST be reset to 0 when minor version is incremented
* `major` - MUST be incremented if any backwards incompatible
* `rc` - Stands for release candiate
* `iteration` - MUST be incremented when changes were brought to the release candidate

_Case A: Pre-release_

:warning: `No new features should be added until release is ready!`

* Make sure you are on the latest version of `master`
* Create an anotated tag using the format `major.minor.patch-rc.iteration`
* You may continue adding `fix` or `support` branches to `master` if the release candidate requires it. If you do, you MUST create a new pre-release and increment the iteration when ready

_Case B: Release - Ready to be deployed to production_

* Make sure you are on the latest version of `master`
* Create an anotated tag using the format `major.minor.patch`

```
# Once done with any of the two cases above, push the tags

git push origin --tags
```
