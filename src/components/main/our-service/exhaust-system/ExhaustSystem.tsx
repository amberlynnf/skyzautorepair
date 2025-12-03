import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import classes from "./ExhaustSystem.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface ExhaustSystemProps {
  id?: string;
}

export function ExhaustSystem({}: ExhaustSystemProps) {
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
              Muffler & Exhaust  <br />
              <span>System Repair</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              Professional Services for Your Vehicle. Exhaust System In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">Types of Services We Offer</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             If you have exhaust or muffler problems, trust the team at Skyz Auto Repair in Houston, TX. We know a well-functioning muffler and exhaust system for your vehicle is essential. Our experienced technicians are trained to handle any muffler or exhaust system issue, from minor repairs to complete replacements. Visit us at 13830 Brownsville St, Houston, TX 77015 or call us at (346) 802-4919 to schedule an appointment for your muffler and exhaust system repair needs.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Repair, Maintenance, and Custom</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Our Skyz Auto Repair team is equipped to handle a variety of muffler and exhaust system repairs. This includes fixing leaks, replacing damaged or worn-out parts, and addressing any unusual noise or vibrations from your exhaust system. We also offer regular maintenance services to keep your muffler and exhaust system in top condition, preventing any major issues from arising.

              Looking to upgrade your vehicle’s performance and sound? Our skilled technicians can design and install custom exhaust systems tailored to your needs and preferences. We use high-quality materials and advanced techniques to ensure that your custom exhaust system looks great and enhances your car’s performance.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Professional and Reassuring Service</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              At Skyz Auto Repair, we pride ourselves on providing professional and reassuring service to our customers. Our team will thoroughly inspect your muffler and exhaust system, explain any necessary repairs or maintenance, and provide you with a detailed estimate before starting any work. We give you peace of mind and confidence in our work.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
