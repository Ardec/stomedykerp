export const useRegister = async (item) => {
  console.log(item)

    const baseUrl = useBaseUrl();
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          name: item.value.name,
          firstname: item.value.firstname,
          lastname: item.value.lastname,
          phone: item.value.phone,
          email: item.value.email,
          plainPassword: item.value.plainPassword,
        }
      });
      if (error.value) {
        throw new Error(error.value.message || 'Błąd podczas zmiany danych');
      }
      return data.value.data
    } catch (err) {
      console.error('Błąd zmiany danych:', err.message);
      throw err;
    }
  };