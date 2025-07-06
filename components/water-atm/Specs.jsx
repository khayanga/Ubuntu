
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

         <div className="mt-6">
          <h3 className="text-xl font-bold mb-4 text-sky-600">Add Ons</h3>
          <ul className="list-none space-y-3">
            {[
              "Can support 4 taps",
              "Supports DN15 - DN80",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-sky-600 mr-2">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

const specs = [
  { name: 'Standard', value: '2 Taps' },
  { name: 'Dimensions', value: '300 x 250 x 150 mm' },
  { name: 'Weight', value: '2.3 kg' },
  { name: 'Power Consumption', value: '24w (12v, 2A)' },
  { name: 'Power Options', value: 'AC Mains , Solar Compatible' },
  { name: 'Network Coverage', value: '2G, 3G, 4G' },
];



export default Specs;