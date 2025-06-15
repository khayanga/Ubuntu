import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableCell,
  TableRow,
} from "../ui/table";
const specsData = {
  "NB-IoT": [
    { name: "Meter Type", value: "Multi-jet /Ultrasonic water meter" },
    { name: "Frequency", value: "B3(1800),B5(850),B8(900)" },
    { name: "Pressure loss", value: " ≤ 0.063mpa" },
    { name: "Accuracy", value: "±0.5% at full scale" },
    { name: "Humidity", value: "≤95%RH" },
    { name: "Power Source", value: "Lithium battery (6+ year lifespan)" },
    { name: "Operating Temperature", value: "0℃-55℃" },
    { name: "IP Rating", value: "IP68 (fully waterproof)" },
    { name: "Communication", value: "Narrow band(LTE Cat.NB)" },
  ],
  "4G CAT 1": [
    { name: "Model", value: "AquaFlow 4G-3000" },
    { name: "Dimensions", value: "130 x 85 x 65 mm" },
    { name: "Weight", value: "480g" },
    { name: "Measurement Range", value: "0.5 to 150 liters/min" },
    { name: "Accuracy", value: "±0.5% at full scale" },
    { name: "Power Source", value: "Lithium battery (4+ year lifespan)" },
    { name: "Operating Temperature", value: "-10°C to 60°C" },
    { name: "IP Rating", value: "IP68 (fully waterproof)" },
    { name: "Data Storage", value: "Up to 36 months of usage data" },
    { name: "Communication", value: "4G CAT 1, LTE-M" },
  ],
  LoRaWAN: [
    { name: "Modulation", value: "LoRa modulation technology" },
    { name: "Number of channels", value: "48" },
    { name: "Clock accuracy", value: "5 seconds / day error" },
    { name: "Relative humidity", value: "≤95%RH" },
    { name: "Accuracy", value: "± 1 pulse" },
    { name: "Power Source", value: "3.6V battery" },
    { name: "Receiving sensitivity", value: "146dBm ＠ 10Kbps" },
    { name: "Operating Temperature", value: "-40 ℃ ～ 60 ℃" },
    { name: "Data Storage", value: "10 years" },
    { name: "Communication", value: "LoRaWAN, CN470MHz / EU868MHz / US915MHz / AS923MHz" },
  ],
};

const WaterMeterSpecs = ({ technology = "NB-IoT" }) => {
  const specs = specsData[technology] || specsData["NB-IoT"];
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-sky-600">
          Technical Specifications
        </h3>
        <Table className="dark:bg-gray-900">
          <TableHeader>
            <TableRow>
              <TableHead>Specification</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {specs.map((spec, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{spec.name}</TableCell>
                <TableCell>{spec.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default WaterMeterSpecs;
