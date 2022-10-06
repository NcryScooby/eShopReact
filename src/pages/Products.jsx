import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../service/api";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import styles from "../styles/Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/getProducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.cards}>
          {products.map((product) => (
            <Card sx={{ width: 250 }} key={product._id}>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 400,
                }}
                component="img"
                height="140"
                image={`http://localhost:3001/getImageId/${product._id}`}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  U$ {product.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
