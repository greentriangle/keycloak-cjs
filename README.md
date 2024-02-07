# keycloak-cjs

## Usage

To install, run `yarn add greentriangle/keycloak-cjs#semver:23.0.6`. 

To update this project, run `yarn upgrade` and then run `yarn build` to update the commonjs export `index.js`.

After committing `git commit -a -m "Version upgrade to vX.X.X"`, add a new tag `git tag vX.X.X` and push it using `git push --tags`. Using version tags enable us to use `#semver:` in the `yarn add` command.

Finally, on dependent projects, run `yarn upgrade greentriangle/keycloak-cjs#semver:X.X.X`.

## Background

@keycloak/keycloak-admin-client is a pure ESModule package, so it can't be used in CommonJS projects. To use it in CommonJS projects, we need to re-export it as a CommonJS module. Which this package does. 

Based on this: https://github.com/keycloak/keycloak-nodejs-admin-client/issues/523#issuecomment-1273231149

