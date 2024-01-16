import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "../cart";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/scoops")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("API Hatası:", error); // Hataları logla
      });
  }, []);

  return (
    <div className="container my-5">
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi: <span className="text-success">20 ₺</span>
      </p>
      <h3>
        Çeşitler Ücreti:{" "}
        <span className="text-success">{basket.length * 20} ₺</span>
      </h3>

      <div className="row p-3 gap-5 justify-content-between mt-4 ">
        {data.map((i) => (
          <Cart key={i.name} item={i} basket={basket} setBasket={setBasket} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
