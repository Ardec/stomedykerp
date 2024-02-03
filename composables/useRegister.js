export const useRegister = async (item) => {
  console.log(item);
  const toast = useToast();
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
      toast.add({
        id: 'register_failed',
        title: 'Błąd rejestracji',
        color: "red",
        description: 'Dane zostały podane w sposób nieprawidłowy',
        icon: 'i-octicon-desktop-download-24',
        timeout: 6000,
      })
      throw new Error(error.value.message || 'Błąd podczas zmiany danych');
    }
    toast.add({
      id: 'register_success',
      title: 'Rejestracja przebiegła pomyślnie',
      color: "green",
      description: 'Gotowe, teraz możesz się zalogować i korzystać z aplikacji',
      icon: 'i-octicon-desktop-download-24',
      timeout: 6000,
    })
    return data.value.data
  } catch (err) {
    toast.add({
      id: 'register_failed',
      title: 'Błąd rejestracji',
      color: "red",
      description: 'Dane zostały podane w sposób nieprawidłowy',
      icon: 'i-octicon-desktop-download-24',
      timeout: 6000,
    })
    console.error('Błąd zmiany danych:', err.message);
    throw err;
  }
};