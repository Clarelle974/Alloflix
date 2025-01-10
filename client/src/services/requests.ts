const options = {
  method: "GET",
  url: `${process.env.BASE_URL}`,
  params: { language: "en-FR", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: process.env.API_KEY,
  },
};
