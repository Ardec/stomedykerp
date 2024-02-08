export const useAddInfos = async (item) => {
    const baseUrl = useBaseUrl();
    const loggedUser = useLoggedUser();
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/owner/info/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:{
          token:loggedUser.value.token,
          name:item.name,
          phone:item.phone,
          email:item.email,
          shortDescription:item.shortDescription,
          longDescription:item.longDescription,
          logo:item.logo,
        }
      });
      if (error?.value?.statusCode === 401) {
        return navigateTo('/logowanie');
      }
      if (error.value) {
        throw new Error(error.value.message || 'Błąd podczas pobierania danych');
      }
      console.log(data.value.data)
      return data.value.data
    } catch (err) {
      console.error('Błąd pobierania danych:', err.message);
      throw err;
    }
  };