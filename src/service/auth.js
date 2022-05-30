export const getApiHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) return { "x-access-token": user.accessToken };
  else return {};
};

export const isUserLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) return true;
  else return false;
};
