export const useLoadArticles = async (published) => {
  const baseUrl = useBaseUrl();
  const loggedUser = useLoggedUser();
  try {
    const { data, error } = await useFetch(`https://${baseUrl}/article/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        //token: loggedUser.value.token, // 'irZ9NLgXFsbdA5kxYsAM2Xgn6RikZ4Mw',
        page: null,
        limit: null,
        title: null,
        category: null,
        intro: null,
        content: null,
        published: published,
        featured: null,
        author: null,
        seoTitle: null,
        seoMetaName: null,
        seoMetaContent: null
      }
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

export const useEditArticle = async (item) => {
  const loggedUser = useLoggedUser();

  const baseUrl = useBaseUrl();
  try {
    ;
    const url = item.id ? `https://${baseUrl}/article/${item.id}/edit` : `https://${baseUrl}/article/new`
    const { data, error } = await useFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        ...item,
        token: loggedUser.value.token,
        author: loggedUser.value.id,
  
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

export const useGetArticle = async (id) => {
  const baseUrl = useBaseUrl();
  try {
    ;
    const url = `https://${baseUrl}/article/${id}`
    const { data, error } = await useFetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
};

export const deleteArticle = async (item) => {
  const loggedUser = useLoggedUser();
  const baseUrl = useBaseUrl();
  try {
    const url = `https://${baseUrl}/article/${item.id}/delete`
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