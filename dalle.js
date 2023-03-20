




function dalle() {
  const apiKey = <API_KEY>;
  const apiUrl = "https://api.openai.com/v1/images/generations";
  let entrada = document.getElementById("text").value;

  const params = {
    prompt: `${entrada}`,
    n: 1,
    size: "1024x1024",
    response_format: "url",
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.data[0].url;
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      document.body.appendChild(imageElement);
      console.log("funciona")
    })
    .catch((error) => console.log(error));
}
