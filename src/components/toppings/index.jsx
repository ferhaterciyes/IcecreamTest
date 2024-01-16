<<<<<<< HEAD
import axios from "axios";
import React, { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  console.log(data);
  useEffect(() => {
    axios
      .get("http://localhost:3000/toppings")
      .then((res) => setData(res.data));
  }, []);

  //tiklenmişse sepete ekler değilse cıkarır
  const handleChange = (e, item) => {
    e.target.checked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };
  return (
    <div className="container">
      <h1>Sos Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">3 ₺</span>
      </p>
      <h3>
        Soslar Ücreti : <span>{basket.length * 3} ₺</span>
      </h3>
      <div className="row p-3 gap-3">
        {data.map((item) => (
          <div
            style={{ width: "150px" }}
            key={item.id}
            className="col d-flex flex-column align-items-center py-4 rounded-5 top-card"
          >
            <label
              className="d-flex flex-column align-items-center gap-3"
              htmlFor={item.name}
            >
              <img height={100} src={item.imagePath} alt="" />
              <p className="text-center text-nowrap">{item.name}</p>
            </label>

            <input
              onChange={(e) => handleChange(e, item)}
              id={item.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
=======
import React from 'react'

const Toppings = () => {
  return (
    <div>Toppings</div>
  )
}

export default Toppings
>>>>>>> e0431bdbf3d3e959742ec83346227a7560c21d3d
