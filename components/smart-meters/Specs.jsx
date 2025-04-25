import React from 'react'
import { Table,TableBody,TableHead,TableHeader,TableCell,TableRow } from '../ui/table';

const WaterMeterSpecs = () => {
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
          <h3 className="text-xl font-bold mb-4 text-sky-600">Key Features</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-sky-600 mr-2 mt-1">✓</span>
                <div>
                  <span className="font-medium">{feature.name}: </span>
                  <span className="text-gray-600 dark:text-gray-300">{feature.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
  
        {/* <div>
          <h3 className="text-xl font-bold mb-4 text-sky-600">Connectivity</h3>
          <ul className="space-y-3">
            {connectivity.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-sky-600 mr-2 mt-1">✓</span>
                <div>
                  <span className="font-medium">{item.name}: </span>
                  <span className="text-gray-600 dark:text-gray-300">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    );
  };
  
  const specs = [
    { name: 'Model', value: 'AquaFlow SM-2500' },
    { name: 'Dimensions', value: '120 x 80 x 60 mm' },
    { name: 'Weight', value: '450g' },
    { name: 'Measurement Range', value: '0.5 to 100 liters/min' },
    { name: 'Accuracy', value: '±0.5% at full scale' },
    { name: 'Power Source', value: 'Lithium battery (5+ year lifespan)' },
    { name: 'Operating Temperature', value: '-10°C to 55°C' },
    { name: 'IP Rating', value: 'IP68 (fully waterproof)' },
    { name: 'Data Storage', value: 'Up to 24 months of usage data' },
  ];
  
  const features = [
    { 
      name: 'Ultrasonic Technology', 
      description: 'Non-invasive flow measurement with no moving parts, ensuring long-term accuracy and minimal maintenance.' 
    },
    { 
      name: 'Leak Detection Algorithm', 
      description: 'Advanced AI-based detection system that can identify leaks as small as 0.1 liters per hour.' 
    },
    { 
      name: 'Burst Protection', 
      description: 'Automatic shut-off capability when abnormal flow rates are detected, preventing property damage.' 
    },
    { 
      name: 'Tamper Alerts', 
      description: 'Built-in sensors to detect and report unauthorized access or tampering attempts.' 
    },
    { 
      name: 'Low-Flow Detection', 
      description: 'Precision measurement even at extremely low flow rates, ensuring accurate billing and usage monitoring.' 
    },
    { 
      name: 'Reverse Flow Detection', 
      description: 'Monitors and alerts for backflow conditions that could indicate system problems.' 
    },
  ];
  
  const connectivity = [
    { 
      name: 'Wireless Communication', 
      description: 'Built-in NB-IoT, LTE-M, and LoRaWAN options for flexible deployment in various environments.' 
    },
    { 
      name: 'Data Encryption', 
      description: 'AES-256 encryption for secure data transmission, protecting sensitive consumption information.' 
    },
    { 
      name: 'API Integration', 
      description: 'RESTful API for seamless integration with existing utility management systems and third-party applications.' 
    },
    { 
      name: 'OTA Updates', 
      description: 'Over-the-air firmware updates ensure your meters always have the latest features and security patches.' 
    },
  ];
  
  export default WaterMeterSpecs;