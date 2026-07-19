 import axios from "axios";
 const rendezVousURL = "http://localhost:8080/api/rendezVous";
  export const getRendezVous = async () => {
    try {
      const response = await axios.get(
        rendezVousURL + "/listerLesRendezVousPagination",
      );
     return response.data.content;
    } catch (error) {
      throw error;
    }
  };
 