export default () => {
  const user: any = useCookie('loggedInUser');
  if (user.value?.token) {
    return user;
  } else {
    const route = useRoute();
    if (route.path !== '/logowanie') {
      return navigateTo('/logowanie');
    }
  }
}