export default () => {
  const user: any = useCookie('loggedInUser');
  if (user.value?.token) {
    return user;
  } else {
    return navigateTo('/logowanie');
  }
}