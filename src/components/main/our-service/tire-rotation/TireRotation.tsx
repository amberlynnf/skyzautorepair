import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import classes from "./TireRotation.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface TireRotationProps {
  id?: string;
}

export function TireRotation({}: TireRotationProps) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Header opened={false} toggle={() => {}} />
        
      <section className={classes.heroSection}>
        <div className={classes.heroFade}></div>

        <Container size="xl" className={classes.heroInner}>
          <div className={classes.heroContent}>
            <Title className={classes.heroTitleMain} data-aos="fade-up">
              Tire <br />
              <span>Rotation</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              The Importance of Tire Rotation. Tire Rotation In Houston, TX.
            </Text>

            <button className={classes.heroButton} onClick={() => navigate('/contact')} data-aos="fade-up" data-aos-delay="150">Book Service</button>
          </div>
        </Container>
      </section>

      <section className={classes.section}>
        <div className={classes.leftVerticalLine}></div>

        <div className={classes.connector1}></div>
        <div className={classes.connector2}></div>
        <div className={classes.connector3}></div>

        <div className={classes.contentWrapper}>
          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Tire Rotation for Your Car</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             Tire rotation is the process of moving your vehicle’s tires from one position to another. This ensures that each tire wears evenly and extends the life of your tires. At Skyz Auto Repair in Houston, TX, we recommend getting your tires rotated about every 5,000 to 7,000 miles, or as suggested by your vehicle’s manufacturer.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Reasons to Get Your Tires Rotated</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Regular tire rotation has many benefits for your vehicle. It helps to maintain proper traction and handling, improves fuel efficiency, and increases the life of your tires. Uneven tire wear can also cause vibrations and noise while driving, which can be avoided with regular tire rotation.

              At Skyz Auto Repair, we have a team of experienced technicians who are trained to perform tire rotations for all types of vehicles. We use state-of-the-art equipment to ensure that your tires are rotated correctly and efficiently. Our goal is to keep your vehicle running smoothly and safely on the road. You can visit us at 13830 Brownsville St, Houston, TX 77015 or give us a call at (346) 802-4919 to schedule an appointment for your tire rotation.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Trust Skyz Auto Repair</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Don’t wait until you start experiencing issues with your tires to get them rotated. Regular tire rotation is an essential part of vehicle maintenance and can save you time and money in the long run. Trust the experts at Skyz Auto Repair in Houston, TX, to keep your tires in top condition and your vehicle running smoothly. Schedule your tire rotation appointment today!
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
