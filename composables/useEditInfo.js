export const useEditInfo = async (item) => {
  const loggedUser = useState('loggedInUser');
  const baseUrl = useBaseUrl();
  try {
    const { data, error } = await useFetch(`https://${baseUrl}/owner/info/${item.id}/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        token: loggedUser.value.token,
        name: item.name,
        phone: item.phone,
        email: item.email,
        shortDescription: item.shortDescription,
        longDescription: item.longDescription,
        logo: item.logo,
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