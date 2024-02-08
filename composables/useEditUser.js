export const useEditUser = async (item) => {
  const loggedUser = useLoggedUser();

    const baseUrl = useBaseUrl();
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/user/${item.id}/edit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          token: loggedUser.value.token,
          roles: item.role,
          name: item.name,
          firstname: item.firstname,
          lastname: item.lastname,
          phone: item.phone,
          email: item.email,
          plainPassword: item.password,
        }
      });
      if (error?.value?.statusCode === 401) {
        return navigateTo('/logowanie');
      }
      if (error.value) {
        throw new Error(error.value.message || 'Błąd podczas zmiany danych');
      }
      return data.value.data
    } catch (err) {
      console.error('Błąd zmiany danych:', err.message);
      throw err;
    }
  };