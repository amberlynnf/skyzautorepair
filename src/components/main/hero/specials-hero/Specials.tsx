import { Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./Specials.module.css";

interface SpecialsProps {
  id?: string;
}

export function Specials({ id }: SpecialsProps) {
  const navigate = useNavigate();

  return (
    <div id={id} className={classes.wrapper}>
      <div className={classes.overlay}></div>

      <div className={classes.inner}>
        <Title order={1} className={classes.mainTitle}>
          SPECIAL OFFERS
        </Title>

        <Text className={classes.desc}>
          All of our services are competitively priced, yet we still offer additional
          discounts and special offers. Click to see our latest coupons that you can
          use for upcoming services.
        </Text>

        <button
          className={classes.specialsBtn}
          onClick={() => navigate("/specials")}
        >
          VIEW ALL SPECIALS
        </button>
      </div>
    </div>
  );
}
