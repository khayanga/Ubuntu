'use client';

import React from 'react';
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@/components/ui/table';

export default function PricingTable({ data }) {
  return (
    <div className="container max-w-[600px] mx-auto p-4 text-sm   my-12 ">
      <h2 className="text-2xl font-bold mb-4 text-sky-600 text-center">{data.technology} Meter Pricing</h2>
      <Table className=" bg-white dark:bg-gray-900/50 rounded-lg shadow-md p-2">
        <TableCaption>Pricing table for available {data.technology} smart meter sizes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-center">Size</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Material</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.parameters.map((param, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">{param.size}</TableCell>
              <TableCell className='text-center'>{param.price}</TableCell>
              <TableCell className="text-center">{param.material}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
