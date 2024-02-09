export const useEditUser = async (item) => {
  const loggedUser = useLoggedUser();

  const baseUrl = useBaseUrl();
  try {
    ;
    const url = item.id ? `https://${baseUrl}/user/${item.id}/edit` : `https://${baseUrl}/user/new`
    const { data, error } = await useFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        ...item,
        token: loggedUser.value.token
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

export const deleteUser = async (item) => {
  const loggedUser = useLoggedUser();
  const baseUrl = useBaseUrl();
  try {
    const url = `https://${baseUrl}/user/${item.id}/delete`
    const { data, error } = await useFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        token: loggedUser.value.token
      }
    });
    if (error?.value?.statusCode === 401) {
      return navigateTo('/logowanie');
    }
    if (error.value) {
      throw new Error(error.value.message || 'Błąd podczas usuwania danych');
    }
    return data.value.data
  } catch (err) {
    console.error('Błąd usuwania danych:', err.message);
    throw err;
  }
};