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

export const useLoadInfo = async (id) => {
  const baseUrl = useBaseUrl();
  const myInfo = useState('myInfo', (() => { }))
  try {
    const { data, error } = await useFetch(`https://${baseUrl}/owner/info/${id}`, {
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
    myInfo.value = data?.value?.data.ownerInfo
    return data?.value?.data
  } catch (err) {
    console.error('Błąd pobierania danych:', err.message);
  }
};

export const useEditInfo = async (item) => {
  const loggedUser = useLoggedUser();
  const baseUrl = useBaseUrl();
  try {
    const url = item.id ? `https://${baseUrl}/owner/info/${item.id}/edit` : `https://${baseUrl}/owner/info/new`;
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

export const deleteInfo = async (item) => {
  const loggedUser = useLoggedUser();
  const baseUrl = useBaseUrl();
  try {
    const url = `https://${baseUrl}/owner/info/${item.id}/delete`
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