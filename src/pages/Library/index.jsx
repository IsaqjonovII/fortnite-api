import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "../../components/Loader";
import c from "./style.module.css";

const MyLibray = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://fortniteapi.io/v2/items/list?lang=en",
        {
          headers: {
            Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857",
          },
        }
      );
      setData(data.items.slice(60));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderCards = ({ id, ...rest }) => {
    return <Card key={id} {...rest} />;
  };

  const getMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setLoading(false);
    }, 2000);
  };

  return (
    <React.Fragment>
      <div className={c.library}>
        <div className={c.cards__wrapper}>
          {data.slice(0, 10 * count).map(renderCards)}
        </div>
        {loading ? (
          <Loader />
        ) : (
          <button className={c.loadmore__btn} onClick={getMoreData}>
            Load more
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default MyLibray;
