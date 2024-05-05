export const fetchJobData = async (offSet) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        limit: 10,
        offset: offSet,
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };
  
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.text();
  
      return JSON.parse(result);
      
    } catch (error) {
      console.error(error);
    }
  };