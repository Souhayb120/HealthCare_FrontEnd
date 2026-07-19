  import axios from "axios";
  const medecinURL = "http://localhost:8080/api/medecins";
    export const getMedecines = async () => {
      try {
        const response = await axios.get(
          medecinURL + "/listerLesMedecinPagination",
        );
        return response.data.content;
      } catch (error) {
        throw error;
      }
    };