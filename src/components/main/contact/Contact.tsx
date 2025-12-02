import {
  Text,
  Title,
  Container,
  AppShell,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import classes from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface ContactProps {
  id?: string;
}

export function Contact({ id }: ContactProps) {
  const [opened, { toggle }] = useDisclosure(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

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
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, email, comments });
  };

  const handlePhoneChange = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 10);

    let formatted = numeric;

    if (numeric.length > 3 && numeric.length <= 6) {
      formatted = `(${numeric.slice(0, 3)}) ${numeric.slice(3)}`;
    } else if (numeric.length > 6) {
      formatted = `(${numeric.slice(0, 3)}) ${numeric.slice(3, 6)}-${numeric.slice(6)}`;
    } else if (numeric.length > 0) {
      formatted = `(${numeric}`;
    }

    setPhone(formatted);
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      styles={{
        main: {
          padding: 0,
          margin: 0,
          background: "transparent",
          overflow: "visible",
          minHeight: "100vh",
        },
      }}
      padding={0}
    >
      <Header opened={opened} toggle={toggle} />
      <div id={id} className={classes.root}>
        <Container size="lg" className={classes.inner}>
          <div className={classes.card}>
            <div className={classes.left}>
              <div className={classes.redStroke}></div>

              <Title order={1} className={classes.heading} data-aos="fade-left">
                GET IN TOUCH
              </Title>

              <Text className={classes.subtext}>
                We’re here to answer questions, schedule appointments, and help
                with any services your vehicle needs.
              </Text>

              <div className={classes.infoGroup}>
                <Text className={classes.label}>ADDRESS</Text>
                <Text className={classes.address}>
                  <a
                    href="https://maps.app.goo.gl/d49L1ihn1TNVbVzUA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    13830 Brownsville St, Houston, TX 77015, United States
                  </a>
                </Text>
              </div>

              <div className={classes.infoGroup}>
                <Text className={classes.label}>PHONE</Text>
                <Text className={classes.info}>(346) 802-4919</Text>
              </div>

              <div className={classes.infoGroup}>
                <Text className={classes.label}>EMAIL</Text>
                <Text className={classes.info}>Skyzautorepair@gmail.com</Text>
              </div>
            </div>

            <form className={classes.form} onSubmit={handleSubmit}>
              <TextInput
                label="Full Name"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                className={classes.input}
              />

              <TextInput
                label="Phone Number"
                placeholder="(123) 456-7890"
                required
                value={phone}
                onChange={(e) => handlePhoneChange(e.currentTarget.value)}
                className={classes.input}
              />

              <TextInput
                label="Email"
                placeholder="you@example.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className={classes.input}
              />

              <Textarea
                label="Questions or Comments"
                placeholder="Tell us how we can help..."
                required
                minRows={6}
                value={comments}
                onChange={(e) => setComments(e.currentTarget.value)}
                className={classes.textarea}
              />

              <Button type="submit" className={classes.submit}>
                SUBMIT
              </Button>
            </form>
          </div>
        </Container>
        <div className={classes.bottomLine}></div>
        <Footer />
      </div>
    </AppShell>
  );
}

export default Contact;
