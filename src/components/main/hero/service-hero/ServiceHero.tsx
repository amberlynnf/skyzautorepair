import { useState, useEffect } from "react";
import { Container, Title } from "@mantine/core";
import {
  IconWind,
  IconTools,
  IconCarTurbine,
  IconEngine,
  IconRoad,
  IconRotate,
  IconCertificate,
  IconArrowsDiagonal,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import classes from "./ServiceHero.module.css";

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const services: ServiceItem[] = [
  { title: "Auto A/C Repair", icon: <IconWind size={50} />, path: "/services/auto-ac-repair" },
  { title: "Belts & Hoses", icon: <IconTools size={50} />, path: "/services/belts-hoses" },
  { title: "Brake Repair", icon: <IconCarTurbine size={50} />, path: "/services/brake-repair" },
  { title: "Engine Repair", icon: <IconEngine size={50} />, path: "/services/engine-repair" },
  { title: "Exhaust System Repair", icon: <IconRoad size={50} />, path: "/services/exhaust-system-repair" },
  { title: "Tire Rotation", icon: <IconRotate size={50} />, path: "/services/tire-rotation" },
  { title: "Vehicle Inspection", icon: <IconCertificate size={50} />, path: "/services/vehicle-inspection" },
  { title: "Wheel Alignment", icon: <IconArrowsDiagonal size={50} />, path: "/services/wheel-alignment" },
];

export default function ServiceHero() {
  const [cardWidth, setCardWidth] = useState(345);
  const [visibleCards, setVisibleCards] = useState(6);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w <= 480) {
        setVisibleCards(1);
        setCardWidth(242);
      } else if (w <= 820) {
        setVisibleCards(2.2);
        setCardWidth(330);
      } else {
        setVisibleCards(6);
        setCardWidth(345);
      }

      setIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(services.length - Math.ceil(visibleCards), 0);

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className={classes.root}>
      <Container size="xl">
        <Title order={2} className={classes.title}>
          Our Services
        </Title>

        <div className={classes.sliderWrapper}>
          <div
            className={classes.slider}
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className={classes.card}
                onClick={() => navigate(service.path)}
                style={{ cursor: "pointer" }}
              >
                <div className={classes.outerRedCircle}>
                  <div className={classes.iconInnerCircle}>{service.icon}</div>
                </div>
                <p className={classes.cardText}>{service.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.bottomControls}>
          <button onClick={prev} className={classes.navBtn}>
            ‹
          </button>

          <div className={classes.dotsWrapper}>
            {Array.from({ length: maxIndex + 1 }).map((_, d) => (
              <div
                key={d}
                className={`${classes.dot} ${index === d ? classes.dotActive : ""}`}
              />
            ))}
          </div>

          <button onClick={next} className={classes.navBtn}>
            ›
          </button>
        </div>
      </Container>
    </section>
  );
}

export { ServiceHero };
