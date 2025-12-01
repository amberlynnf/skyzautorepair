import { Text, Title, Container } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Hero.module.css";
import { Data } from "../../../utils/Data";

interface HeroProps {
  id?: string;
}

export function Hero({ id }: HeroProps) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Data.HomePage.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id={id} className={classes.root}>
      <div className={classes.overlay}></div>

      <div className={classes.slideshow}>
        {Data.HomePage.map((item, i) => (
          <img
            key={i}
            src={item.backgroundImage}
            className={`${classes.slide} ${i === index ? classes.active : ""}`}
            alt=""
          />
        ))}
      </div>

      <Container size="lg" className={classes.inner}>
        <div className={classes.textBackdrop}>

          <div className={classes.leftBox}>
            <div className={classes.redStroke}></div>

            <Title order={1} className={classes.title}>
              SKYZ AUTO REPAIR
            </Title>

            <Text className={classes.description}>
              Full-Service Preventive Maintenance and Automotive Repair Center
            </Text>
          </div>
          <div className={classes.rightBox}>
          <div className={classes.rightTitleBox}>
            <Text className={classes.specialTop}>SPECIALIST IN</Text>
            <Text className={classes.specialBottom}>
              <span className={classes.red}>A.D.A.S.</span>
              <span className={classes.white}> — </span>
              <span className={classes.red}>1234yf Refrigerant</span>
              <span className={classes.white}> — </span>
              <span className={classes.red}>Electrical</span>
            </Text>
          </div>

            <img
              src="/images/technet.png"
              alt="technet"
              className={classes.logoTech}
            />

            <button className={classes.appointmentBtn} onClick={() => navigate('/contact')}>
               REQUEST AN APPOINTMENT
            </button>

          </div>
        </div>
      </Container>
    </div>
  );
}
