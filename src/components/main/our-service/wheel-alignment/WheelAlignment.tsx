import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import classes from "./WheelAlignment.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface WheelAlignmentProps {
  id?: string;
}

export function WheelAlignment({}: WheelAlignmentProps) {
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
              Wheel <br />
              <span>Alignment</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              The Importance of Wheel Alignment Maintenance. In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">Avoid the Wear and Tear</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             As a car owner, you understand the importance of keeping up with routine maintenance and repairs for your vehicle’s overall performance and longevity. One of the most crucial maintenance tasks is wheel alignment. There are different repair and maintenance services associated with wheel alignment. Wheel alignment involves adjusting the angles of the wheels to make certain they are perpendicular to the ground and parallel to each other. Proper alignment helps to ensure your vehicle drives smoothly, maximizes tire life, and avoids unnecessary wear and tear on your suspension system. Visit us at Skyz Auto Repair, in Houston, TX for all your wheel alignment needs.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Repair and Maintenance Services</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Over time, your car’s suspension will experience wear and tear, causing the wheels to shift from their original position. When the wheels are not properly aligned, your car will experience noticeable symptoms, such as uneven tire wear, pulling to one side, and vibrations in the steering wheel. To fix these problems, you’ll need to bring your car to the professionals at Skyz Auto Repair. We provide a variety of services related to wheel alignment. Our certified technicians use state-of-the-art equipment to perform a comprehensive wheel alignment service that includes inspecting the steering and suspension systems, adjusting the camber, caster, and toe angles of the wheels, and verifying that the alignment angles are within factory specifications. This service helps to ensure that your vehicle drives smoothly, handles well, and maximizes tire life.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Schedule With Us Today</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Proper wheel alignment and suspension maintenance are essential to the longevity and performance of your vehicle. At Skyz Auto Repair in Houston, TX, we understand the importance of these services and have the expertise and tools to get the job done right. Our certified technicians are dedicated to providing exceptional service and ensuring your vehicle performs at its best. Schedule your appointment today to experience the difference our maintenance and repair services can make for your vehicle. Visit our shop at 13830 Brownsville St, Houston, TX 77015 or contact us at (346) 802-4919 to schedule an appointment.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
