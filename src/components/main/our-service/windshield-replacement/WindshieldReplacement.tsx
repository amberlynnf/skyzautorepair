import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./WindshieldReplacement.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface WindshieldReplacementProps {
  id?: string;
}

export function WindshieldReplacement({}: WindshieldReplacementProps) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [opened, handlers] = useDisclosure(false);
  const toggle = () => handlers.toggle();

  return (
    <>
      <Header opened={opened} toggle={toggle} />
        
      <section className={classes.heroSection}>
        <div className={classes.heroFade}></div>

        <Container size="xl" className={classes.heroInner}>
          <div className={classes.heroContent}>
            <Title className={classes.heroTitleMain} data-aos="fade-up">
              Windshield <br />
              <span>Wiper Blades</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              Keep Your Windshield Clear with New Wipers. Windshield Replacement In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">New Wipers for a Better View</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
            A clear view is important when you’re driving. At Skyz Auto Repair in Houston, TX, we offer top-quality windshield wipers for all vehicle makes and models. Our wipers are designed to provide a streak-free and smooth wipe, ensuring your safety on the road. Whether you’re driving in rain, snow, or dust, our wipers will keep your windshield clear and your vision unobstructed.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Signs You Need New Wipers</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Having the right wipers is only half the battle. Proper installation is crucial for optimal performance. That’s why our team of expert technicians at Skyz Auto Repair is here to help. It’s essential to know when it’s time to replace your wipers. Here are some signs that indicate you need new wipers:
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Streaks or smears on your windshield.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Squeaking or chattering noises while in use.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Worn or cracked rubber blades.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Inconsistent wiping or missed spots on your windshield.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            If you notice any of these signs, it’s time to visit Skyz Auto Repair for new wipers. Our team will inspect your wipers and recommend the best replacement option for your vehicle.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Visit or Call Us</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Don’t let worn-out wipers compromise your safety on the road. Visit us at 13830 Brownsville St, Houston, TX 77015 or call (346) 802-4919 to schedule an appointment for new wipers today. Our Skyz Auto Repair team is dedicated to providing top-quality products and services to keep your vehicle pristine. Trust us for your auto repair needs.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
