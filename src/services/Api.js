const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

const callToApi = (paintingId) => {
    return fetch(BASE_URL + paintingId)
      .then((response) => response.json())
      .then((data) => {
        let finalTechnique = 'No definida';
        if(data.medium.includes("Oil")) {
          finalTechnique = "paint";
        } else if(data.medium.includes("ink")) {
          finalTechnique = "draw";
        }
        
        return {
            id: data.objectID,
            image: data.primaryImageSmall,
            title: data.title,
            date: data.objectEndDate,
            techniqueOrigin: data.medium,
            technique: finalTechnique,
            dimensions: data.dimensions
        }        
      });
  };
  
  export default callToApi;
  