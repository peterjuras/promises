export async function fetchTemperature(url) {
  const query = new URLSearchParams();
  query.append("latitude", "28.3"); // Tenerife 🌴
  query.append("longitude", "-16.66"); // Tenerife 🌴
  query.append("current_weather", "true");

  const fullUrl = `${url}?${query}`;

  const response = await fetch(fullUrl);

  return {
    json: () =>
      response.json().then((result) => ({
        temperature: `It is ${result.current_weather.temperature}° in Teneriffe 🌴`,
      })),
  };
}
