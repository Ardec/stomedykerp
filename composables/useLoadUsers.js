// console.log("moj loggedUser w composables",loggedUser.value)
export const useLoadUser = async () => {
  const loggedUser = useState('loggedInUser');
  console.log("jestem w funkcji loggen inUser i to moj user", loggedUser.value.token )
    const baseUrl = useBaseUrl();
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          token: loggedUser.value.token,
          page:null,
          limit:null,
          name: null,
          firstname: null,
          lastname: null,
          phone: null,
          email: null,
        }
      });
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