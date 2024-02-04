export const useLoadInfo = async (id) => {
    const baseUrl = useBaseUrl();
    const myInfo = useState('myInfo',(()=>{}))
    try {
      const { data, error } = await useFetch(`https://${baseUrl}/owner/info/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (error.value) {
        throw new Error(error.value.message || 'Błąd podczas pobierania danych');
      }
      console.log("moja data",data.value.data.ownerInfo)
      myInfo.value = data?.value?.data.ownerInfo
      console.log(myInfo.value)
      return data?.value?.data
    } catch (err) {
      console.error('Błąd pobierania danych:', err.message);
      throw err;
    }
  };