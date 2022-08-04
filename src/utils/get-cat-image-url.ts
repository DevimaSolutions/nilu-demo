const fallbackImageUrl = 'https://cdn2.thecatapi.com/images/aROxKQCOe.jpg';

const getCatImageUrl = async (): Promise<string> => {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    return data?.[0]?.url;
  } catch (e) {
    return fallbackImageUrl;
  }
};

export default getCatImageUrl;
