import useState from "react";

function usePet() {
  const [isTypePetSelected, setIsTypePetSelected] = useState("All");
  const [searchedPetsByType, setSearchedPetsByType] = useState();
  const [petDisplayed, setPetDisplayed] = useState();
  const [advanceSearchPetArray, setAdvanceSearchPetArray] = useState();
  const [myPets, setMyPets] = useState([]);
  const [dashboardPressed, setDashboardPressed] = useState("Pets");
  const token = JSON.parse(localStorage.getItem("token"));

//put inside useeffect
    async function getUserSavedPets() {
      const headersConfig = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const res = await axios.get(
          `http://localhost:8000/users/${currentUser.id}/savedpets`,
          {
            headers: headersConfig,
          }
        );
         setAllSaveByUser(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  
       
  
//put inside useeffect
      async function myPet() {
        const headersConfig = {
          Authorization: `Bearer ${token}`,
        };
        try {
          const res = await axios.get(
            `http://localhost:8000/users/${currentUser.id}/mypets`,
            {
              headers: headersConfig,
            }
          );
          setMyPets(res.data);
        } catch (err) {
          console.log(err);
        }
      }
     
  return (
    getUserSavedPets,
    myPet,
    isTypePetSelected,
    setIsTypePetSelected,
    searchedPetsByType,
    setSearchedPetsByType,
    petDisplayed,
    setPetDisplayed,
    advanceSearchPetArray,
    setAdvanceSearchPetArray,
    myPets,
    setMyPets,
    dashboardPressed,
    setDashboardPressed
  
  );
}
