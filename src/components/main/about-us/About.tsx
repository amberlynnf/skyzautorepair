import { Container, Title, Text } from "@mantine/core";
import { useEffect } from "react"; 
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import classes from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface AboutProps {
  id?: string;
}



export function About({ id }: AboutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

    useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });

    AOS.refresh(); 
  }, []);


  return (
    <>
      <Header opened={false} toggle={() => {}} />

      <section id={id} className={classes.section}>
        <Container size="xl" className={classes.grid}>
          <div className={classes.leftImages}>
            <div className={classes.gear3}>
              <img src="/images/gears3.png" className={classes.gearImg} />
            </div>
            <img src="/images/gears4.png" className={classes.circleCenter} />
            <div className={classes.gear5}>
              <img src="/images/gears5.png" className={classes.gearImg} />
            </div>
            <div className={classes.badgeBox}>
              <div className={classes.badgeContent}>
                <img src="/images/skyz-logo.png" className={classes.badgeLogo} />
                <span>Full-Service Preventive Maintenance and Automotive Repair Center </span>
              </div>
            </div>
              <div className={classes.bottomContainerWrapper}>
                <div
                  className={classes.redContainer}
                  data-aos="flip-left"
                  data-aos-delay="200"
                >
                  <img src="/images/nationwide.png" className={classes.realImg} />
                  <p className={classes.bottomText}>
                    Where you go, our warranty goes with you and is honored at 15,000+ TechNet locations in North America, giving you peace of mind protection.
                  </p>
                </div>

                <div
                  className={classes.redContainer}
                  data-aos="flip-right"
                  data-aos-delay="350"
                >
                  <img src="/images/roadside.png" className={classes.realImg} />
                  <p className={classes.bottomText}>
                    Coverage so you can get help when you need it most. You are covered for lock out, flat tire repair, fluid delivery, battery jump, start or tow.
                  </p>
                </div>
              </div>

          </div>
          <div className={classes.rightContent}>
            <span className={classes.subTitle} data-aos="fade-up">ABOUT US</span>

            <Title 
              order={1} 
              className={classes.mainTitle}
              data-aos="fade-left"
              data-aos-delay="150"
            >
              Our Repair Expertise <span className={classes.red}>Inspires</span> Confidence.
            </Title>
            
            <Text className={classes.desc}>
              <strong>SKYZ Auto Repair</strong> is a full service preventive maintenance and automotive repair center. We perform high quality, guaranteed service you can trust at a fair price. We repair domestic and foreign vehicles and are your best choice for scheduled maintenance of your car, SUV, truck and fleet vehicles. Family owned and operated, we use the latest diagnostic equipment to guarantee your vehicle is serviced correctly while maintaining your manufacturer's warranty. We only use quality replacement parts, and our technicians are ASE-certified.
              We offer a National Warranty, Roadside Assistance and Road Hazard Tire Protection. As a proud member of the TechNet professional network these warranties are honored at over 15,000+ repair facilities across North America.
            </Text>

            <div className={classes.listGroup}>
              <div className={classes.listItem}>
                <div className={classes.iconCircle}>✓</div>
                <div>
                  <Text className={classes.listTitle}>Certified Technicians</Text>
                  
                  <Text className={classes.listDesc}>
                     ASE-certified experts providing trusted vehicle maintenance.
                  </Text>
                </div>
              </div>

              <div className={classes.listItem}>
                <div className={classes.iconCircle}>✓</div>
                <div>
                  <Text className={classes.listTitle}>Nationwide Warranty</Text>
                  <Text className={classes.listDesc}>
                    Warranty honored at 15,000+ TechNet repair facilities.
                  </Text>
                </div>
              </div>
            </div>

            <div className={classes.quoteBox}>
              <Text>
                Our service quality ensures your vehicle is handled with precision and
                long-lasting reliability.
              </Text>
            </div>
          </div>

        </Container>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}