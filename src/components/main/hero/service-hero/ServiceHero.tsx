import { useState, useEffect, useRef } from "react";
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
import classes from "./ServiceHero.module.css";

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  { title: "Auto A/C Repair", icon: <IconWind size={50} /> },
  { title: "Belts & Hoses", icon: <IconTools size={50} /> },
  { title: "Brake Repair", icon: <IconCarTurbine size={50} /> },
  { title: "Engine Repair", icon: <IconEngine size={50} /> },
  { title: "Exhaust System Repair", icon: <IconRoad size={50} /> },
  { title: "Tire Rotation", icon: <IconRotate size={50} /> },
  { title: "Vehicle Inspection", icon: <IconCertificate size={50} /> },
  { title: "Wheel Alignment", icon: <IconArrowsDiagonal size={50} /> },
];

export default function ServiceHero() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [cardWidth, setCardWidth] = useState(330);
  const [visibleCards, setVisibleCards] = useState(6);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;

      const w = window.innerWidth;

      if (w <= 480) {
      
        setVisibleCards(1.15);
        setCardWidth(width + 20);
      } else if (w <= 780) {
    
        setVisibleCards(2.5);
        setCardWidth(width + 28);
      } else {
     
        setVisibleCards(6);
        setCardWidth(width + 40);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(services.length - visibleCards);

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
                ref={i === 0 ? cardRef : null}
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
          <button onClick={prev} className={classes.navBtn}>‹</button>

          <div className={classes.dotsWrapper}>
            {Array.from({ length: maxIndex + 1 }).map((_, d) => (
              <div
                key={d}
                className={`${classes.dot} ${index === d ? classes.dotActive : ""}`}
              />
            ))}
          </div>

          <button onClick={next} className={classes.navBtn}>›</button>
        </div>
      </Container>
    </section>
  );
}

export { ServiceHero };
