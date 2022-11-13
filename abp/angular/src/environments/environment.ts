import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'NextAuthApp',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44377/',
    redirectUri: baseUrl,
    clientId: 'NextAuthApp_App',
    responseType: 'code',
    scope: 'offline_access NextAuthApp',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44377',
      rootNamespace: 'NextAuthApp',
    },
  },
} as Environment;
