   
   
   
   export const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPatients(patients.filter((patient) => patient.id !== id)); 
      
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };