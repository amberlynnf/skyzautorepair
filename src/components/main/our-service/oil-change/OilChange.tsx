import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import classes from "./OilChange.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface OilChangeProps {
  id?: string;
}

export function OilChange({}: OilChangeProps) {
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
              Oil <br />
              <span>Change</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              Keep Your Engine Running with an Oil Change. Oil Change In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">The Importance of Regular Oil Changes</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             At Skyz Auto Repair, we understand that your vehicle is an important investment, and keeping it on the road is a top priority. That’s why we offer comprehensive oil change services to help maintain the health and longevity of your engine. Regular oil changes are essential for keeping your engine running its best and avoiding costly repairs down the road. Visit our shop at 13830 Brownsville St, Houston, TX 77015 or contact us at (346) 802-4919 to schedule an appointment.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Oil Change Services</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Our skilled technicians at Skyz Auto Repair are trained to provide top-notch oil change services for all vehicle makes and models. Our services include:

              Oil and filter change: We will drain the dirty oil and replace it with new, high-quality oil, along with a new filter, to ensure maximum engine protection.
              Fluid top-off: We will check and top off all essential fluids, including coolant, brake fluid, power steering fluid, and windshield washer fluid.
              Visual inspection: Our technicians will perform a visual inspection of your vehicle to check for potential issues or areas of concern.
              Regular oil changes offer multiple benefits for your vehicle. Fresh oil helps to lubricate and protect your engine, allowing it to run optimally. It helps reduce friction in your engine, which can improve your vehicle’s gas mileage. Regular oil changes can help prevent wear and tear on your engine, potentially extending its lifespan and helping you avoid costly repairs.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Schedule Your Oil Change</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Don’t wait until it’s too late—schedule your next oil change with Skyz Auto Repair in Houston, TX today and keep your engine running smoothly for years. Our team is dedicated to providing top-quality services and ensuring your satisfaction with every visit. Contact us now to schedule an appointment.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
