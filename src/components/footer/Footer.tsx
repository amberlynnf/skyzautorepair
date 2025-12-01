import { Text, Title, Container } from "@mantine/core";
import classes from "./Footer.module.css";
import { IconMapPinFilled, IconClockFilled, IconPhoneFilled } from "@tabler/icons-react";

interface FooterProps {
  id?: string;
}

export function Footer({ id }: FooterProps) {
  return (
    <footer id={id} className={classes.root}>
      <div className={classes.blurOverlay}></div>

      <Container size="xl" className={classes.inner}>

       
        <div className={classes.logoSection}>
          <img
            src="/images/skyz-logo.png"
            alt="skyz auto repair logo"
            className={classes.logo}
          />
        </div>

        
        <div className={classes.quickLinks}>
          <Title order={3} className={classes.heading}>QUICK LINKS:</Title>

          <Text className={classes.link}>HOME</Text>
          <Text className={classes.link}>ABOUT</Text>
          <Text className={classes.link}>SPECIALS</Text>
          <Text className={classes.link}>FINANCING</Text>
          <Text className={classes.link}>CONTACT</Text>
          <Text className={classes.link}>MOTOVISUALS</Text>
        </div>

        
        <div className={classes.storeColumn}>
          <Title order={3} className={classes.heading}>STORE INFO:</Title>

          <div className={classes.infoRow}>
            <IconMapPinFilled className={classes.icon} />
            <Text className={classes.address}>
              <a href="https://maps.app.goo.gl/d49L1ihn1TNVbVzUA" target="_blank" rel="noopener noreferrer">
                13830 Brownsville St, Houston, TX 77015, United States
              </a>
            </Text>
          </div>

          <div className={classes.infoRowPhone}>
            <IconPhoneFilled className={classes.iconPhone} />
            <Text className={classes.phone}>(346) 802-4919</Text>
          </div>
        </div>

       
        <div className={classes.storeColumn}>
          <div className={classes.infoRow}>
            <IconClockFilled className={classes.icon} />
            <Text className={classes.infoText}>
              MON - FRI: 8AM - 6PM<br />
              CLOSED WEEKENDS
            </Text>
          </div>
        </div>

      </Container>

      
      <div className={classes.bottomBar}>
        <Text className={classes.bottomText}>
          © {new Date().getFullYear()} SKYZ Auto Repair. All Rights Reserved.
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
