import { Container, Text, Title } from "@mantine/core";
import classes from "./Financing.module.css";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { useEffect } from "react";

interface FinancingProps {
  id?: string;
}

export function Financing({ id }: FinancingProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header opened={false} toggle={() => {}} />

      <section id={id} className={classes.section}>
        <Container size="xl" className={classes.container}>
          <div className={classes.contentWrapper}>
            <a
              href="https://www.synchrony.com/mmc/CQ217246500"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.imageLink}
            >
              <img
                src="/images/Synchrony.png"
                alt="Synchrony Financing"
                className={classes.image}
              />
            </a>

            <div className={classes.textBox}>
              <Title className={classes.title}>
                6 MONTHS PROMOTIONAL FINANCING
              </Title>
              <Text className={classes.subtitle}>
                on purchases of $199 or more.
              </Text>
              <Text className={classes.note}>
                Click the image to know more.
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
