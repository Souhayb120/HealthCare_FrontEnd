import axios from "axios";
const dossierMedicalURL = "http://localhost:8080/api/dossierMedical";
export const getDossierMedical = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      dossierMedicalURL + "/getAllDossierMedical?page=0&size=4",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.content;
  } catch (error) {
    throw error;
  }
};

export const getCountDossierMedical = async () => {
  try {
    const response = await getDossierMedical();
    return response.length;
  } catch (error) {
    throw error;
  }
};
