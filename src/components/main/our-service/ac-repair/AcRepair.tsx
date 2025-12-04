import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AcRepair.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";

interface AcRepairProps {
  id?: string;
}

export function AcRepair({}: AcRepairProps) {
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
              Automotive <br />
              <span>A/C Repair</span>
            </Title>

            <Text className={classes.heroSubtitle} data-aos="fade-up" data-aos-delay="150">
              A/C Repair and Maintenance for Your Vehicle. In Houston, TX.
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
            <h2 className={classes.title} data-aos="fade-right">A Complex System</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
             Your vehicle’s air conditioning system is your savior during warm or humid days, providing cool air as you travel to your destination. However, A/C systems can be complex, and it can be frustrating and costly when something goes wrong. At Skyz Auto Repair in Houston, TX, we understand the importance of keeping your cool, and we offer a wide variety of auto A/C repair and maintenance services to keep your vehicle’s A/C system running smoothly. Stop by our shop at 13830 Brownsville St, Houston, TX 77015 or contact us at (346) 802-4919 to schedule an appointment.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">Get Regular A/C Inspections</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Regularly inspecting your vehicle’s A/C system should be a part of your routine maintenance. Our certified technicians at Skyz Auto Repair can comprehensively inspect your system, including checking the A/C compressor, condenser, and evaporator. They can also perform a pressure test to check for leaks and ensure the system functions properly. Regular inspections can prevent costly repairs and ensure you get the most out of your A/C system. Low refrigerant levels are a common cause of your auto’s A/C system failure. Our technicians can recharge your system, adding refrigerant to the recommended level. A complete recharge can improve the performance of your A/C system, providing cooler air and better airflow. Leaks in your A/C system can cause a complete system failure and harm the environment. Our technicians use state-of-the-art equipment to locate and repair leaks in your system. We use high-quality seals and O-rings to ensure your system is leak-free and operating efficiently. The A/C compressor is the heart of your A/C system, and if it fails, your system will not function. Our technicians can diagnose and repair compressor issues, including replacing worn-out belts, electrical connections, and other components to ensure your compressor runs smoothly.

              In some cases, repairing an A/C system may not be possible or cost-effective. We offer complete A/C system replacement services, including installing a new compressor, condenser, and evaporator. Our technicians will explain all the options available and help you decide the best solution for your A/C system.
            </p>
          </div>

          <div className={`${classes.block} ${classes.right}`}>
            <h2 className={classes.title} data-aos="fade-right">We Offer Comfort</h2>
            <p className={classes.text} data-aos="fade-right" data-aos-delay="100">
              Maintaining your vehicle’s A/C system is crucial to ensuring comfort while driving during the hot summer months. At Skyz Auto Repair in Houston, TX, our certified technicians specialize in A/C repair and maintenance services. We provide comprehensive inspections, recharge services, leak repairs, compressor repairs, and complete system replacements to keep your A/C system running smoothly. Don’t let a failing A/C system ruin your driving experience – bring your vehicle to us for all your A/C repair and maintenance needs.
            </p>
          </div>
        </div>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
