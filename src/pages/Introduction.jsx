import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Introduction.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import illustration from "../imgs/illustration.js"

const Introduction = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>The best product purchase website.</h1>
        <img src={illustration} alt="Illustration" className={styles.img} />
      </div>
      <div className={styles.subdivision}>
        <div className={styles.cards}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Create
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create your own product and sell it to the world.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Buy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Buy the best products from the best sellers.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sell
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sell your products to the world.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Share
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Share your products with your friends.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Fabrício Caldana Anelli</p>
      </div>
    </>
  );
};

export default Introduction;
