export const fetchData = async () => {
    try {
      const response = await fetch("./src/data.json");
      if (!response.ok) {
        throw new Error("error!")
      }
      return await response.json();

    } catch (error) {
      throw new Error(error.message);
    }
  };