import axios from 'axios';

export const bizPortalAPI = axios.create({
  baseURL:
    import.meta.env.VITE_BIZ_PORTAL_API ??
    'https://portal-api.dev.carplat-raidea.net',
});
