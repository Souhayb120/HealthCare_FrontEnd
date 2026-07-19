import axios from "axios";
const patientsURL = "http://localhost:8080/api/patients";
export const getPatients = async () => {
  try {
    const response = await axios.get(
      patientsURL + "/listerLesPatientsPagination",
    );
    return response.data.content;
  } catch (errore) {
    throw errore;
  }
};
