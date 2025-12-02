import { Container, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  IconCar,
  IconClock,
  IconWifi,
} from "@tabler/icons-react";
import classes from "./LearnMore.module.css";

interface LearnMoreProps {
  id?: string;
}

export function LearnMore({ id }: LearnMoreProps) {
  const navigate = useNavigate();

  return (
    <div id={id} className={classes.root}>
      <div className={classes.leftSection}>
        <div className={classes.gearWrapper}>
          <img src="/images/gears.png" alt="gears" className={classes.gears} />
        </div>

        <div className={classes.leftTextBox}>
          <Text className={classes.why}>WHY CHOOSE US</Text>

          <Title order={1} className={classes.mainTitle}>
            CHOOSE QUALITY,
            <br />
            CHOOSE US
          </Title>

          <button
            className={classes.appointmentBtn}
            onClick={() => navigate("/contact")}
          >
            LEARN MORE ABOUT US
          </button>
        </div>
      </div>

      <Container size="lg" className={classes.rightSection}>
        <div className={classes.featuresWrapper}>
          <div className={classes.featureBox}>
            <div className={classes.iconCircle}>
              <IconCar size={30} stroke={1.7} color="#ff3b3b" />
            </div>
            <Text className={classes.featureTitle}>FREE SHUTTLE</Text>
          </div>

          <div className={classes.featureBox}>
            <div className={classes.iconCircle}>
              <IconClock size={30} stroke={1.7} color="#ff3b3b" />
            </div>
            <Text className={classes.featureTitle}>AFTER HOURS DROP OFF</Text>
          </div>

          <div className={classes.featureBox}>
            <div className={classes.iconCircle}>
              <IconWifi size={30} stroke={1.7} color="#ff3b3b" />
            </div>
            <Text className={classes.featureTitle}>FREE WI-FI</Text>
          </div>
        </div>

        <div className={classes.logoRow}>
          <div className={classes.logoCard}>
            <img src="/images/automotive.png" alt="automotive" className={classes.logo} />
          </div>

          <div className={classes.logoCard2}>
            <img src="/images/carcare.png" alt="carcare" className={classes.logo} />
          </div>
        </div>
      </Container>
    </div>
  );
}
