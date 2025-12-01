import { Text, Title, Container } from "@mantine/core";
import classes from "./AboutHero.module.css";

interface AboutHeroProps {
  id?: string;
}

export function AboutHero({ id }: AboutHeroProps) {
  return (
    <div id={id} className={classes.root}>
      <Container size="lg" className={classes.inner}>

        <div className={classes.leftBox}>
          <Title order={2} className={classes.title}>
            ABOUT SKYZ AUTO REPAIR
          </Title>

          <Text className={classes.paragraph}>
            Welcome to <strong>SKYZ Auto Repair</strong>, a full-service preventive maintenance and automotive repair center. We perform high quality, guaranteed service you can trust at fair prices. We repair domestic and foreign vehicles and are your best choice for scheduled maintenance of your car, SUV, truck and fleet vehicles.
          </Text>

          <Text className={classes.paragraph}>
            <strong>SKYZ Auto Repair</strong>  is family owned and operated and when you choose <strong>SKYZ Auto Repair</strong>, you are choosing trained ASE Certified technicians, the highest quality parts, the latest equipment and the newest technology to diagnose and repair your vehicle.
          </Text>

          <Text className={classes.paragraph}>
            As a member of the TechNet Professional Network, we are proud to be able to offer you a nationwide repair warranty that extends over 15,000 TechNet Repair Shops in North America, so you are protected where ever you go for 24 months or 24,000 miles, whichever comes first. ®
          </Text>

          <Text className={classes.paragraph}>
            Call us at <span className={classes.red}>(346) 802-4919</span> to
            schedule service.
          </Text>

          <Text className={classes.notice}>
            We do not take walk-ins. Please schedule an appointment. Thank you!
          </Text>

          <Text className={classes.rate}>
            Our labor rate is <strong>$195/hour</strong>
          </Text>
        </div>

        <div className={classes.rightBox}>
          <img
            src="/images/repair.png"
            alt="repair"
            className={classes.image}
          />
        </div>

      </Container>
    </div>
  );
}
