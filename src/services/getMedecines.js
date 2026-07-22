import axios from "axios";
const medecinURL = "http://localhost:8080/api/medecins";
export const getMedecines = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      medecinURL + "/listerLesMedecinPagination?page=0&size=4",
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

export const getCountMedecins = async () => {
  try {
    const response = await getMedecines();
    return response.length;
  } catch (error) {
    throw error;
  }
};
