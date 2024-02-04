export const useLogin = async (email, plainPassword) => {
    const User = useState('loggedInUser', () => ({}));
    const menuVisible = useState('menuVisible');

    const baseUrl = useBaseUrl();
    const toast = useToast();
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email,
          plainPassword,
        }
      });
      if (error.value) {
        toast.add({
          id: 'failed',
          title: 'Błąd logowania',
          color: "red",
          description: 'Sprawdź czy dane są poprawne i spróbuj ponownie',
          icon: 'i-octicon-desktop-download-24',
          timeout: 6000,
        })
        throw new Error(error.value.message || 'Błąd podczas logowania');
      }
      // Aktualizacja globalnego stanu użytkownika
      User.value = data.value.data.user;
      toast.add({
        id: 'success',
        title: 'Witaj '+data.value.data.user.name+'!',
        color: "green",
        description: 'Od teraz możesz korzystać ze wszystkich funkcji aplikacji',
        icon: 'i-octicon-desktop-download-24',
        timeout: 6000,
      })
      menuVisible.value = true;
    } catch (err) {
      toast.add({
        id: 'failed',
        title: 'Błąd logowania',
        color: "red",
        description: 'Sprawdź czy dane są poprawne i spróbuj ponownie',
        icon: 'i-octicon-desktop-download-24',
        timeout: 6000,
      })
      console.error('Błąd logowania:', err.message);
      throw err;
    }
  };