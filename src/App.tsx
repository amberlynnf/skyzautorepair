import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";
import { theme } from "./theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const mantineProps: Record<string, unknown> = {
    theme: {
      ...theme,
      colorScheme: "light", 
    },
    defaultColorScheme: "light", 
  };

  (mantineProps as any).forceColorScheme = "light";

  return (
    <MantineProvider {...(mantineProps as any)}>
      <Router />
    </MantineProvider>
  );
}
