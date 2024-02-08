export const useLoadInfos = async () => {
    const baseUrl = useBaseUrl();
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/owner/info`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (error?.value?.statusCode === 401) {
        return navigateTo('/logowanie');
      }
      if (error.value) {
        throw new Error(error.value.message || 'Błąd podczas pobierania danych');
      }
      return data?.value?.data
    } catch (err) {
      console.error('Błąd pobierania danych:', err.message);
      throw err;
    }
  };