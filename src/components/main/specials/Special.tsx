import { Container, Text, Title, Button } from "@mantine/core";
import classes from "./Special.module.css";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { useRef } from "react";
import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";

interface SpecialProps {
  id?: string;
}

interface CouponProps {
  title: string;
  desc: string;
  expires: string;
  align: "left" | "right";
}

// ❗ FIXED: keep the card, keep zig-zag, remove right-side duplicated text
const Coupon = ({ title, desc, expires, align }: CouponProps) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!printRef.current) return;

    const mainContent = printRef.current.innerHTML;
    const win = window.open("", "PRINT", "height=800,width=650");

    if (win) {
      win.document.write(`
      <html>
      <head>
        <title>SKYZ AUTO REPAIR – Coupon</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            padding: 30px;
            background: #f7f7f7;
          }
          .coupon-wrapper {
            background: white;
            padding: 30px;
            border: 3px dashed #c40000;
            border-radius: 18px;
            width: 100%;
            max-width: 500px;
            margin: auto;
            text-align: center;
          }
          .brand-title {
            font-size: 26px;
            font-weight: 900;
            color: #c40000;
            margin-bottom: 6px;
          }
          .brand-sub {
            font-size: 14px;
            color: #555;
            margin-bottom: 18px;
          }
          .coupon-title {
            font-size: 22px;
            font-weight: bold;
            color: #c40000;
            margin-bottom: 10px;
          }
          .coupon-desc {
            font-size: 16px;
            margin-bottom: 12px;
            line-height: 1.4;
          }
          .coupon-expire {
            font-size: 15px;
            color: #333;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="coupon-wrapper">
          <div class="brand-title">SKYZ AUTO REPAIR</div>
          <div class="brand-sub">Quality • Integrity • Performance</div>

          ${mainContent}
        </div>
      </body>
      </html>
      `);

      win.document.close();
      win.focus();
      win.print();
      win.close();
    }
  };

  return (
    <div className={`${classes.coupon} ${align === "right" ? classes.reverse : ""}`}>
      <div
        className={classes.box}
        data-aos={align === "left" ? "fade-right" : "fade-left"}
      >
        <div ref={printRef}>
          <Text className={classes.boxTitle}>{title}</Text>
          <Text className={classes.boxDesc}>{desc}</Text>
          <Text className={classes.boxExpire}>Expires: {expires}</Text>
        </div>

        <Button className={classes.printBtn} onClick={handlePrint}>
          Print Coupon
        </Button>
      </div>
    </div>
  );
};

export function Special({ id }: SpecialProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [opened, handlers] = useDisclosure(false);
  const toggle = () => handlers.toggle();

  return (
    <>
      <Header opened={opened} toggle={toggle} />

      <section id={id} className={classes.section}>
        <Container size="xl">
          <div className={classes.top}>
            <Title className={classes.mainTitle}>COUPONS</Title> 
          </div>

          <div className={classes.wrapper}>
            <Coupon
              title="$75 OFF A PURCHASE OF $800 OR MORE ON LABOR"
              desc="Not valid for purchases of batteries or tires. Most Vehicles. See store for details. Not valid with other offers/discounts. Only applies to labor. Parts excluded"
              expires="12-25-2026 • Cannot be combined with other offers."
              align="left"
            />

            <Coupon
              title="$50 OFF A PURCHASE OF $350 OR MORE ON LABOR"
              desc="Not valid for purchases of batteries or tires. Most Vehicles. See store for details. Not valid with other offers/discounts. Only applies to labor. Parts excluded"
              expires="12-31-2026 • Cannot be combined with other offers."
              align="right"
            />

            <Coupon
              title="$25 OFF A PURCHASE OF $100 OR MORE ON LABOR"
              desc="Not valid for purchases of batteries or tires. Most Vehicles. See store for details. Not valid with other offers/discounts. Only applies to labor. Parts excluded"
              expires="12-31-2026 • Cannot be combined with other offers."
              align="left"
            />

            <Coupon
              title="$5 OFF VEHICLE STATE INSPECTION"
              desc="Most Vehicles, Only applies to labor."
              expires="12-31-2026 • Cannot be combined with other offers."
              align="right"
            />

            <Coupon
              title="$5 OFF OIL CHANGE SERVICE"
              desc="Includes up to 5 quarts major brand oil, new oil filter, plus vehicle maintenance inspection. Only applies to labor. Most Vehicles. See store for details."
              expires="12-31-2026 • Cannot be combined with other offers."
              align="left"
            />
          </div>
        </Container>
      </section>

      <div className={classes.bottomLine}></div>

      <Footer />
    </>
  );
}
