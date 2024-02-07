import KeycloakAdminClient from '@keycloak/keycloak-admin-client';
import {requiredAction} from '@keycloak/keycloak-admin-client';

import type UserRepresentation from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';
import type {Users} from '@keycloak/keycloak-admin-client/lib/resources/users';
import type {UserStorageProvider} from '@keycloak/keycloak-admin-client/lib/resources/userStorageProvider';
import type {Groups} from '@keycloak/keycloak-admin-client/lib/resources/groups';
import type {Roles} from '@keycloak/keycloak-admin-client/lib/resources/roles';
import type {Clients} from '@keycloak/keycloak-admin-client/lib/resources/clients';
import type {Realms} from '@keycloak/keycloak-admin-client/lib/resources/realms';
import type {ClientScopes} from '@keycloak/keycloak-admin-client/lib/resources/clientScopes';
import type {ClientPolicies} from '@keycloak/keycloak-admin-client/lib/resources/clientPolicies';
import type {IdentityProviders} from '@keycloak/keycloak-admin-client/lib/resources/identityProviders';
import type {Components} from '@keycloak/keycloak-admin-client/lib/resources/components';
import type {ServerInfo} from '@keycloak/keycloak-admin-client/lib/resources/serverInfo';
import type {WhoAmI} from '@keycloak/keycloak-admin-client/lib/resources/whoAmI';
import type {AttackDetection} from '@keycloak/keycloak-admin-client/lib/resources/attackDetection';
import type {AuthenticationManagement} from '@keycloak/keycloak-admin-client/lib/resources/authenticationManagement';
import type {Credentials} from '@keycloak/keycloak-admin-client/lib/utils/auth';
import type {ConnectionConfig, TokenProvider} from '@keycloak/keycloak-admin-client/lib/client';
import type {RequestArgs} from '@keycloak/keycloak-admin-client/lib/resources/agent';

export {
  KeycloakAdminClient,
  requiredAction,
}

export type {
  UserRepresentation,
  Users,
  UserStorageProvider,
  Groups,
  Roles,
  Clients,
  Realms,
  ClientScopes,
  ClientPolicies,
  IdentityProviders,
  Components,
  ServerInfo,
  WhoAmI,
  AttackDetection,
  AuthenticationManagement,
  Credentials,
  ConnectionConfig,
  TokenProvider,
  RequestArgs,
};
