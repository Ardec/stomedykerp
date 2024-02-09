export const useLoadFiles = async () => {
  const user = useLoggedUser();
  if (user) {
    const baseUrl = useBaseUrl();
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/file/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          token: user?.value?.token,
          page: null,
          limit: null,
          name: null
        }
      });
      if (error?.value?.statusCode === 401) {
        return navigateTo('/logowanie');
      }
      if (error.value) {
        throw new Error(error.value.message || 'Błąd podczas pobierania danych');
      }
      return data.value.data
    } catch (err) {
      console.error('Błąd pobierania danych:', err.message);
      throw err;
    }
  }

};