
import React from 'react';
import { useStudents } from '@/context/StudentContext';
import { StudentsList } from './StudentsList';
import { StudentDetails } from './StudentDetails';

export const StudentsPage = () => {
  const { selectedStudent } = useStudents();

  return (
    <div className="p-6 h-full">
      {selectedStudent ? <StudentDetails /> : <StudentsList />}
    </div>
  );
};
