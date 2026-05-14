const ADMIN_SESSION_KEY = "portfolio-admin-authenticated";

export const ADMIN_EMAIL = "beeplap9821@gmail.com";
export const ADMIN_PASSWORD = "hi1@2#3$";

export const isAdminAuthenticated = () => {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
};

export const setAdminSession = () => {
  sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
};

export const clearAdminSession = () => {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
};
