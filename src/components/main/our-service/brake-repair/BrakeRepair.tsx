import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import classes from "./BrakeRepair.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface BrakeRepairProps {
  id?: string;
}

export function BrakeRepair({}: BrakeRepairProps) {
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
              Brake <br />
              <span>Repair</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              Schedule Brake Services With Us. Brake Repair In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">What to Know about Brake Repair</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             Welcome to Skyz Auto Repair, your go-to auto repair center in Houston, TX. We understand the importance of safe driving for all car owners, starting with a properly functioning brake system. Your brakes are your vehicle’s most essential safety system, and it’s important to keep them in their best condition. We offer many brake repair and maintenance services associated with your braking system. Visit our shop at 13830 Brownsville St, Houston, TX 77015 or contact us at (346) 802-4919 to schedule an appointment.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Brake Services for Your Car</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              If you’re experiencing any issues with your brakes, such as squeaking, grinding, or reduced stopping power, don’t ignore them. At Skyz Auto Repair, we offer full brake system diagnosis and repair services, which include fixing worn-out components, replacing brake lines, and repairing or replacing the ABS (anti-lock brake system).

              A brake inspection is the first step in determining whether your brakes need repair or maintenance. We perform a thorough inspection, which includes checking the brake pads, rotors, calipers, and brake fluid. We use top-of-the-line equipment to identify any issues, and our skilled technicians provide you with a detailed report of your brake system. Brake pads are essential to your brake system and require regular replacement. They are made of a durable material that wears down over time, particularly if you drive in stop-and-go traffic. Driving with worn-out brake pads can be risky, as they increase your vehicle’s stopping distance and reduce your control on the road. We can replace your brake pads with quality ones that meet your car manufacturer’s specifications, ensuring your brakes perform optimally. Rotors are the metal discs your brake pads press against to slow down or stop your vehicle. Over time, they can become warped, grooved, or excessively thin, making it difficult for the brake pads to do their job.

              In some cases, it’s possible to resurface rotors to smooth out any imperfections. However, if the rotors are too thin or have large grooves, they will require replacement. Brake fluid is a hydraulic fluid that transports force from the brake pedal to the brake pads. Eventually, brake fluid can become contaminated with water or debris, lowering its boiling point and effectiveness. Whether you need brake pads, rotors, a flush, or have another problem with your braking system, we are here to help.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">We Offer Quality Brake Services</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Your brakes are a critical part of your vehicle’s safety system, and it’s essential to maintain and repair them regularly. At Skyz Auto Repair, we provide brake repair and maintenance services that meet standards of quality and professionalism. Whether you need a routine inspection or a full brake system repair, our experienced technicians have covered it for you. Schedule an appointment with us today. Let us help you keep your vehicle running reliably and safely on the road.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
