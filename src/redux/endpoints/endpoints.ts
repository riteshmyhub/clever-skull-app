const endpoints = Object.freeze({
   auth: {
      login: "/auth/login",
      logout: "/auth/logout",
      register: "/auth/register",
   },
   user: {
      getProfile: "/user/profile",
      createProfile: "/user/create-profile",
   },
});

export default endpoints;
