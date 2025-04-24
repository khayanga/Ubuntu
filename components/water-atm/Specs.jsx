
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const Specs = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-sky-600">Technical Specifications</h3>
        <Table className='dark:bg-gray-900'>
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

      {/* <div>
        <h3 className="text-xl font-bold mb-4">Purification Technology</h3>
        <ul className="space-y-3">
          {purification.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-water-blue-600 mr-2 mt-1">✓</span>
              <div>
                <span className="font-medium">{item.name}: </span>
                <span className="text-tech-gray-600">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div> */}

      {/* <div>
        <h3 className="text-xl font-bold mb-4">Payment & Operation</h3>
        <ul className="space-y-3">
          {payments.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-water-blue-600 mr-2 mt-1">✓</span>
              <div>
                <span className="font-medium">{item.name}: </span>
                <span className="text-tech-gray-600">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

const specs = [
  { name: 'Model', value: 'AquaFlow ATM-1500' },
  { name: 'Dimensions', value: '170 x 75 x 60 cm' },
  { name: 'Weight', value: '185 kg' },
  { name: 'Dispensing Capacity', value: 'Up to 3000 liters/day' },
  { name: 'Storage Capacity', value: '300 liters (customizable)' },
  { name: 'Dispensing Speed', value: '10-15 liters/minute' },
  { name: 'Power Consumption', value: '180W during operation, 15W standby' },
  { name: 'Power Options', value: 'AC Mains (100-240V), Solar Compatible' },
  { name: 'Operating Temperature', value: '5°C to 50°C' },
  { name: 'Water Quality Monitoring', value: 'Real-time TDS, pH, and bacterial content sensors' },
];

const purification = [
  { 
    name: 'Multi-Stage Filtration', 
    description: 'Sequential filtration system including sediment filter, activated carbon, and ultrafiltration membranes.' 
  },
  { 
    name: 'Reverse Osmosis', 
    description: 'High-efficiency RO membrane removes dissolved solids, heavy metals, and contaminants down to 0.0001 microns.' 
  },
  { 
    name: 'UV Sterilization', 
    description: 'UV-C treatment at 254nm wavelength eliminates 99.99% of harmful bacteria, viruses, and pathogens.' 
  },
  { 
    name: 'Mineral Enrichment', 
    description: 'Post-filtration mineralization adds essential minerals like calcium and magnesium for improved taste and health benefits.' 
  },
  { 
    name: 'Self-Cleaning System', 
    description: 'Automated backwashing and sanitization cycles maintain optimal performance and extend filter life.' 
  },
];

const payments = [
  { 
    name: 'Multiple Payment Options', 
    description: 'Supports coin/cash, prepaid cards, mobile payments (NFC), and QR code scanning.' 
  },
  { 
    name: 'Cloud Management', 
    description: 'Centralized administration portal for monitoring operations, managing prices, and viewing transaction history.' 
  },
  { 
    name: 'User Authentication', 
    description: 'Optional biometric (fingerprint) or RFID card access for controlled environments like schools or factories.' 
  },
  { 
    name: 'Display & Interface', 
    description: '10" touchscreen with intuitive UI, voice guidance, and multilingual support.' 
  },
  { 
    name: 'Remote Diagnostics', 
    description: 'Real-time monitoring of system health with predictive maintenance alerts.' 
  },
];

export default Specs;