
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const StudentsTableSkeleton: React.FC = () => {
  return (
    <>
      {Array(5).fill(0).map((_, index) => (
        <tr key={`skeleton-${index}`} className="border-b border-dashed border-gray-100">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <Skeleton className="h-10 w-10 rounded-full mr-3" />
              <Skeleton className="h-4 w-40" />
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <Skeleton className="h-4 w-32" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <Skeleton className="h-4 w-32" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <Skeleton className="h-4 w-24" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <Skeleton className="h-4 w-16" />
          </td>
        </tr>
      ))}
    </>
  );
};
