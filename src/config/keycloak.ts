import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  clientId: 'task-tracker-dev',
  realm: 'task-tracker-dev',
  url: 'http://localhost:8080',
});

keycloak.init({
  pkceMethod: 'S256',
});
