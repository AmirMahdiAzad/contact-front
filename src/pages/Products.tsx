import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const url = new URL(`http://localhost:1337/api/products`);

      url.searchParams.append("populate", "*");
      try {
        const response = await axios.get(url.toString());
        console.log("response ===> ", response);
        console.log("response.data =>", response.data);
        setProducts(response.data);
      } catch {
        console.log("getCotches error");
      }
    };
    getProducts();
  }, []);

  console.log("milaaad => ", products);
  if (!products.data) {
    return "no";
  }
  return (
    <div>
      {products &&
        products.data.map((pro) => (
          <>
            <img width={100} src={`http://localhost:1337${pro.image.url}`} />
            <h1>{pro.name}</h1>
          </>
        ))}
    </div>
  );
};
export default Products;
