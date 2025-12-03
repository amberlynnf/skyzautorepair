import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import classes from "./CoolingSystem.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface CoolingSystemProps {
  id?: string;
}

export function CoolingSystem({}: CoolingSystemProps) {
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
              Cooling <br />
              <span>System</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              We Can Maintain Your Vehicles. Cooling System In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">Understanding Your Vehicle’s Cooling System</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             If you are having trouble with your vehicle’s cooling system, look no further than Skyz Auto Repair in Houston, TX, for all your cooling system repairs. Your vehicle’s cooling system keeps your engine at a safe operating temperature. It works by transmitting coolant through the engine and radiator, absorbing excess heat and preventing your engine from overheating. Without a properly functioning cooling system, your engine could suffer severe damage and leave you stranded on the side of the road. Visit our shop at 13830 Brownsville St, Houston, TX 77015 or contact us at (346) 802-4919 to schedule an appointment.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Common Cooling System Repairs</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              At Skyz Auto Repair, our team of experienced technicians is prepared to handle all cooling system repairs. The most common issues we see include leaks, clogs, and thermostat malfunctions. Various factors, such as old age, wear and tear, or lack of maintenance, can cause these. Our team will thoroughly inspect your cooling system to determine the main cause of the problem and provide you with an accurate diagnosis.

              Preventative maintenance is key to keeping your cooling system in top condition. Our team recommends having your cooling system inspected and serviced at least once a year. This includes flushing and replacing the coolant, checking for leaks and clogs, and ensuring all components function properly. Regular maintenance helps prevent costly repairs and extends the lifespan of your vehicle’s cooling system.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Let Us Help</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              When it comes to your vehicle’s cooling system, trust the experts at Skyz Auto Repair in Houston, TX. Our team has the knowledge and experience to handle any cooling system issue, big or small. We use only high-quality parts and state-of-the-art equipment to ensure your vehicle receives the best care possible. Plus, with our competitive pricing and unparalleled customer service, you can feel confident that you’re getting the best value for your money. Don’t wait until it’s too late – schedule your cooling system repair or maintenance service with us today. Our team is dedicated to keeping your engine cool and your vehicle running smoothly.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
