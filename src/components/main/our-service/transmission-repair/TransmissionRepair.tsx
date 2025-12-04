import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./TransmissionRepair.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface TransmissionRepairProps {
  id?: string;
}

export function TransmissionRepair({}: TransmissionRepairProps) {
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
              Transmission <br />
              <span>Service</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              Keep Your Vehicle Running Smoothly. Transmission Repair In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">Get Regular Service</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             Your vehicle’s transmission transfers power from the engine to the wheels, allowing your vehicle to move. Over time, the transmission can become worn and damaged, leading to issues with shifting gears and overall performance. It’s important to service your transmission regularly. Trust Skyz Auto Repair in Houston, TX, to keep your vehicle running smoothly for years.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Signs You May Need Transmission Service</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              We offer a range of transmission services to keep your vehicle in top condition. The experienced technicians at Skyz Auto Repair are trained to handle all types of transmissions, including manual, automatic, and CVT. We use state-of-the-art equipment and techniques to diagnose and repair any issues with your transmission. If you notice any of the following signs, it may be time to bring your vehicle in for a transmission service:
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Difficulty shifting gears.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Grinding or shaking when shifting.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Leaking transmission fluid.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Burning smell coming from the engine.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Check engine light is on.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            Ignoring these signs can lead to more damage and costly repairs down the line. That’s why we recommend bringing your vehicle in for regular maintenance and addressing any issues as soon as they arise.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Reliable Transmission Services</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              At Skyz Auto Repair, we understand the importance of a reliable and well-functioning transmission. That’s why we use high-quality parts and follow manufacturer guidelines for all our transmission services. Our team is dedicated to providing exceptional customer service and ensuring your satisfaction with every visit. Visit us at 13830 Brownsville St, Houston, TX 77015 or call us at (346) 802-4919 to schedule an appointment for your transmission service today.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
