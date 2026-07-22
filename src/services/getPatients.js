import axios from "axios";
const patientsURL = "http://localhost:8080/api/patients";
export const getPatients = async () => {
  try {
    const response = await axios.get(
      patientsURL + "/listerLesPatientsPagination?page=0&size=4"
    );
    return response.data.content;
  } catch (errore) {
    throw errore;
  }

};
  export const getCountPatients = async () => {
        try {
          const response = await getPatients()
          return response.length;
        } catch (error) {
          throw error;
        }
};
