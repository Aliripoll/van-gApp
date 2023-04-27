const baseUrl = "./data/art.json";

const callToLocalApi = () => {
    return fetch (baseUrl)
    .then((response) => response.json())
    .then((data) => data);
};

export default callToLocalApi;