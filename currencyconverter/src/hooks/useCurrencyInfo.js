import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "npr") {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed
  let day = currentDate.getDate();
  day = day > 9 ? day : "0" + day;

  const date = `${year}-${month}-${day}`;

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => {
        console.error("error to fetch data", error);
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
