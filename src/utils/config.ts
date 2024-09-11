// Use nginx backend url if dev environment is started via docker compose.
const isUsingNginx = import.meta.env.NGINX;
const nginxBackendUrl = import.meta.env.VITE_NGINX_BACKEND_URL;

// Otherwise use the local backend url.
const localBackendUrl = import.meta.env.VITE_LOCAL_BACKEND_URL;
const BACKEND_URL = isUsingNginx ? nginxBackendUrl : localBackendUrl;

export default {
  BACKEND_URL,
};
