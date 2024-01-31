export const useLogin = async (email, plainPassword) => {
    const User = useState('loggedInUser', () => ({}));
    const baseUrl = useBaseUrl();
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
        throw new Error(error.value.message || 'Błąd podczas logowania');
      }
      // Aktualizacja globalnego stanu użytkownika
      User.value = data.value.data.user;
    } catch (err) {
      console.error('Błąd logowania:', err.message);
      throw err;
    }
  };
  