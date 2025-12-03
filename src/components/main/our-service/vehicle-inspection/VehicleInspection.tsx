import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import classes from "./VehicleInspection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface VehicleInspectionProps {
  id?: string;
}

export function VehicleInspection({}: VehicleInspectionProps) {
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
              Vehicle <br />
              <span>Inspection</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              Trust Us for Your Vehicle Inspection Needs. Vehicle Inspection In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">Keeping Your Vehicle At Its Best</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             Keeping your vehicle operating at its best and being compliant with state guidelines is your responsibility as a car owner. We offer comprehensive vehicle inspections to ensure your car is safe and running at its best. Our team of experienced technicians is highly trained and experienced in performing thorough inspections on all vehicle makes and models. Contact us at Skyz Auto Repair in Houston, TX, for all your vehicle inspections.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Different Types of Vehicle Inspections</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              There are a variety of vehicle inspections to meet customers’ specific needs. Some of the vehicle inspections you may need include:

              Pre-Purchase Inspections: If you’re in the market for a used car, our pre-purchase inspections can give you peace of mind by identifying any potential issues before purchasing.

              Annual Safety Inspections: In many states, annual safety inspections are required to ensure your vehicle meets safety standards. Our technicians will thoroughly check your car’s brakes, tires, lights, and other important components to make sure it passes the inspection.

              Routine Maintenance Inspections: Regular maintenance is crucial for running your vehicle optimally. Our routine maintenance inspections can help identify potential problems before they become major, saving you time and money in the long run.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">We Offer Convenience</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              We strive to make the vehicle inspection process as convenient as possible for our customers. You can visit us at 13830 Brownsville St, Houston, TX 77015 or call us at (346) 802-4919 to schedule an appointment. Our friendly staff will work with you to find a time that fits your schedule. Don’t wait until it’s too late. Trust Skyz Auto Repair for all your vehicle inspection needs. Our expert technicians and convenient services make us the top choice for drivers in Houston, TX. Contact us today to schedule your inspection.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
