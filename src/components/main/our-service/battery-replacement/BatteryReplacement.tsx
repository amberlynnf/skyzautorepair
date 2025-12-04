import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./BatteryReplacement.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface BatteryReplacementProps {
  id?: string;
}

export function BatteryReplacement({}: BatteryReplacementProps) {
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
              Battery <br />
              <span>Replacement</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              Importance of a Reliable Car Battery In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">Signs of Battery Problems and When to Replace</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             At Skyz Auto Repair in Houston, TX, we understand the importance of a reliable car battery. We offer top-notch battery replacement services to keep your vehicle running smoothly. But how do you know when it’s time to replace your battery? Look out for these signs:
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Slow engine crank: If your engine is taking longer than usual to start, it could be a sign of a weak battery.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Dim headlights: A failing battery can cause your headlights to appear dim or flicker.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Warning light: If your battery warning light is illuminated on your dashboard, it’s   time to check your battery.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - Corrosion: Check your battery terminals for any corrosion signs affecting their performance.
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
            - If you notice any of these signs, don’t wait until you’re stranded on the side of the road. Bring your car to Skyz Auto Repair for a battery check and replacement.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">EV Batteries and Maintenance</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              As electric vehicles (EVs) become more popular, it’s important to understand the unique needs of their batteries. EV batteries require regular maintenance and replacement, just like traditional car batteries. Our Skyz Auto Repair team is trained and equipped to handle EV battery replacements, ensuring that your electric vehicle stays on the road for years to come.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Reliable Battery Services</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Regarding your car’s battery, you can depend on the experts at our auto repair shop. Our experienced technicians will provide a thorough inspection and replacement, if needed, using high-quality batteries from trusted brands. We also offer competitive pricing and a satisfaction guarantee, so you can have peace of mind knowing your car is in good hands. Visit us at Skyz Auto Repair in Houston, TX, for all your battery needs.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
