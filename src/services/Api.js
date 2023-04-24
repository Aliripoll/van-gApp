const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

const callToApi = (paintingId) => {
    return fetch(BASE_URL + paintingId)
      .then((response) => response.json())
      .then((data) => {
        return {
            id: data.objectID,
            image: data.primaryImageSmall,
            title: data.title,
            date: data.objectEndDate,
            technique: data.medium
        }        
      });
  };
  
  export default callToApi;
  