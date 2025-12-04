import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./EngineRepair.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface EngineRepairProps {
  id?: string;
}

export function EngineRepair({}: EngineRepairProps) {
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
              Engine <br />
              <span>Repair</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              We Can Maintain Your Vehicles. Engine Repair In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">Signs of Belt and Hose Problems</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             Your vehicle’s belts and hoses are essential components that keep your engine running smoothly. Over time, these parts can wear out and become damaged, leading to potential problems and breakdowns. It’s important to know the signs of belt and hose problems so you can address them before they become major issues. Look out for any of the following signs:
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Squealing or screeching noises coming from the engine.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Visible cracks or wear on belts and hoses.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Leaking fluids under the vehicle
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Overheating engine
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Dashboard warning lights, such as the check engine light, coming on
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            If you notice any of these signs, bringing your vehicle to Skyz Auto Repair in Houston, TX, for a thorough inspection and replacement of belts and hoses is important.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">The Importance of Regular Belt and Hose Replacement</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Belts and hoses are crucial for your vehicle’s engine to function properly. They help power essential systems such as the alternator, air conditioning, and cooling system. When these parts become worn or damaged, it can result in major issues, leading to costly repairs. Regular replacement of belts and hoses can help prevent breakdowns and keep your vehicle running at optimal performance. At Skyz Auto Repair, our experienced technicians are trained to identify and address any issues with your vehicle’s belts and hoses. We use top-quality parts and state-of-the-art equipment to ensure your vehicle runs at its best. We aim to provide you with reliable and efficient service so you can have peace of mind knowing your vehicle is in good hands.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Expert Belt and Hose Replacement</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Don’t wait until it’s too late. If you suspect any issues with your vehicle’s belts and hoses, bring them to Skyz Auto Repair in Houston, TX, for a thorough inspection and replacement. Our team is here to keep your vehicle running smoothly and safely on the road. Schedule an appointment with us today at (346) 802-4919 or stop by our shop at 13830 Brownsville St, Houston, TX 77015.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
