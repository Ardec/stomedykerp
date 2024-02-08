export const useLogout = async () => {
    const loggedUser = useCookie('loggedInUser');
    console.log(loggedUser.value.email)
    console.log(loggedUser.value.token)
    const baseUrl = useBaseUrl();
    const toast = useToast();
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: loggedUser.value.email,
          token: loggedUser.value.token,
        }
      });
      if (error.value) {
        toast.add({
          id: 'logout_failed',
          title: 'Błąd wylogowania',
          color: "red",
          description: 'Sprawdź czy dane są poprawne i spróbuj ponownie',
          icon: 'i-octicon-desktop-download-24',
          timeout: 6000,
        })
        throw new Error(error.value.message || 'Błąd podczas logowania');
      }
      loggedUser.value = null;
      await navigateTo('/logowanie');
      toast.add({
        id: 'logout_success',
        title: 'Wylogowano Cię z aplikacji '+data.value.data.user.name+'!',
        color: "green",
        description: 'Chyba nadszedł czas, żeby zrobić sobie przerwę',
        icon: 'i-octicon-desktop-download-24',
        timeout: 6000,
      })
    } catch (err) {
      toast.add({
        id: 'logout_failed',
        title: 'Błąd wylogowania',
        color: "red",
        description: 'Sprawdź czy dane są poprawne i spróbuj ponownie',
        icon: 'i-octicon-desktop-download-24',
        timeout: 6000,
      })
      console.error('Błąd logowania:', err.message);
      throw err;
    }
  };