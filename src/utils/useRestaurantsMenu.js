import { useEffect, useState } from "react";
import { ResMenu_Api } from "./constants";

const useRestaurantsMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(ResMenu_Api + id);
    const result = await response.json();
    setResInfo(result.data);
  };
  return resInfo;
};

export default useRestaurantsMenu;
