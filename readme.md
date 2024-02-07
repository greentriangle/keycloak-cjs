# keycloak-cjs

## Background

@keycloak/keycloak-admin-client is a pure ESModule package, so it can't be used in CommonJS projects. To use it in CommonJS projects, we need to re-export it as a CommonJS module. Which this package does. 

Based on this: https://github.com/keycloak/keycloak-nodejs-admin-client/issues/523#issuecomment-1273231149
