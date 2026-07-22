 import axios from "axios";
 const rendezVousURL = "http://localhost:8080/api/rendezVous";
  export const getRendezVous = async () => {
    try {
      const response = await axios.get(
        rendezVousURL + "/listerLesRendezVousPagination?page=0&size=4",
      );
     return response.data.content;
    } catch (error) {
      throw error;
    }
  };
 

   export const getCountRendezVous = async () => {
          try {
            const response = await getRendezVous()
            return response.length;
          } catch (error) {
            throw error;
          }
        };