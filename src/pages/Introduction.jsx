import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Introduction.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Illustration from "../components/Illustration";
import MoneyAnimation from "../components/Money";
import BuyAnimation from "../components/BuyAnimation";
import ShareAnimation from "../components/ShareAnimation";
import CreateAnimation from "../components/CreateAnimation";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiUser2Fill } from "react-icons/ri";

const cardStyle = {
  width: 200,
  height: 250,
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  paddingTop: "30px",
};

const Introduction = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          animation: "fadeIn 1s",
        }}
      >
        <div className={styles.container}>
          <h1 className={styles.title}>The best product purchase website.</h1>
          <Illustration />
        </div>
        <div className={styles.subdivision}>
          <div className={styles.cards}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Create
                </Typography>
                <CreateAnimation />
              </CardContent>
            </Card>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Buy
                </Typography>
                <BuyAnimation />
              </CardContent>
            </Card>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sell
                </Typography>
                <MoneyAnimation />
              </CardContent>
            </Card>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Share
                </Typography>
                <ShareAnimation />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div>
              <h5>Location</h5>
              <p>Canoas</p>
              <p>Rio grande do Sul</p>
            </div>
            <div>
              <h5>Follow Us</h5>
              <div className={styles.icons}>
                <AiFillFacebook size={30} cursor={"pointer"} />
                <AiFillInstagram size={30} cursor={"pointer"} />
                <AiFillTwitterCircle size={30} cursor={"pointer"} />
                <AiFillLinkedin size={30} cursor={"pointer"} />
              </div>
            </div>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.purpose}>
              <h5>Purpose</h5>
              <p>
                This project was made to put into practice everything I learned
                in college and courses.
              </p>
            </div>
          </div>
          <div>
            <h5>Owner</h5>
            <div className={styles.owner}>
              <RiUser2Fill size={20} />
              <p>Fabrício Caldana Anelli</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
