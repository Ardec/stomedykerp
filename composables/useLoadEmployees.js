export const useLoadEmployees = async (page) => {
  const loggedUser = useLoggedUser();
  const baseUrl = useBaseUrl();
  try {
    const { data, error } = await useFetch(`https://${baseUrl}/employee/`, {
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
    // Zwrot danych
    console.log(data.value.data)
    return data.value.data
  } catch (err) {
    console.error('Błąd pobierania danych:', err.message);
    throw err;
  }
};

export const useEditEmplyee = async (item) => {
  const loggedUser = useLoggedUser();

  const baseUrl = useBaseUrl();
  try {
    ;
    const url = item.id ? `https://${baseUrl}/employee/${item.id}/edit` : `https://${baseUrl}/employee/new`
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

export const deleteEmployee = async (item) => {
  const loggedUser = useLoggedUser();
  const baseUrl = useBaseUrl();
  try {
    const url = `https://${baseUrl}/user/${item.id}/employee`
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