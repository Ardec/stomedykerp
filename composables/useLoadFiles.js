export const useLoadFiles = async (page) => {
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
          page: page ? page: null,
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

export const useEditFile = async (item) => {
  const loggedUser = useLoggedUser();

  const baseUrl = useBaseUrl();
  try {
    const url = `https://${baseUrl}/file/${item.id}/edit`;
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

export const deleteFile = async (item) => {
  const loggedUser = useLoggedUser();
  const baseUrl = useBaseUrl();
  try {
    const url = `https://${baseUrl}/file/${item.id}/delete`
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