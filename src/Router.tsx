import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Contact from "./components/main/contact/Contact";
import { About } from "./components/main/about-us/About";
import { Special } from "./components/main/specials/Special";
import { Financing } from "./components/main/financing/Financing";
import { AcRepair } from "./components/main/our-service/ac-repair/AcRepair";
import { BatteryReplacement } from "./components/main/our-service/battery-replacement/BatteryReplacement";
import { BeltsHoses } from "./components/main/our-service/belts-hoses/BetlsHoses";
import { BrakeRepair } from "./components/main/our-service/brake-repair/BrakeRepair";
import { CoolingSystem } from "./components/main/our-service/cooling-system/CoolingSystem";
import { EngineRepair } from "./components/main/our-service/engine-repair/EngineRepair";
import { ExhaustSystem } from "./components/main/our-service/exhaust-system/ExhaustSystem";
import { OilChange } from "./components/main/our-service/oil-change/OilChange";
import { TireRotation } from "./components/main/our-service/tire-rotation/TireRotation";
import { TransmissionRepair } from "./components/main/our-service/transmission-repair/TransmissionRepair";
import { VehicleInspection } from "./components/main/our-service/vehicle-inspection/VehicleInspection";
import { WheelAlignment } from "./components/main/our-service/wheel-alignment/WheelAlignment";
import { WindshieldReplacement } from "./components/main/our-service/windshield-replacement/WindshieldReplacement";


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/specials" element={<Special/>} />
        <Route path="/financing" element={<Financing/>} />
        
          <Route path="/services/auto-ac-repair" element={<AcRepair />} />
          <Route path="/services/battery-replacement" element={<BatteryReplacement />} />
          <Route path="/services/belts-hoses" element={<BeltsHoses />} />
          <Route path="/services/brake-repair" element={<BrakeRepair />} />
          <Route path="/services/cooling-system-repair" element={<CoolingSystem />} />
          <Route path="/services/engine-repair" element={<EngineRepair />} />
          <Route path="/services/exhaust-system-repair" element={<ExhaustSystem />} />
          <Route path="/services/oil-change" element={<OilChange />} />
          <Route path="/services/tire-rotation" element={<TireRotation />} />
          <Route path="/services/transmission-repair" element={<TransmissionRepair />} />
          <Route path="/services/vehicle-inspection" element={<VehicleInspection />} />
          <Route path="/services/wheel-alignment" element={<WheelAlignment />} />
          <Route path="/services/windshield-wiper-replacement" element={<WindshieldReplacement />} />
        </Routes>

    </BrowserRouter>
  );
}
