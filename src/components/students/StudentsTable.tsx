
import React from 'react';
import { Student } from '@/types/student';
import { ResizableHeader } from '@/components/ResizableHeader';
import { StudentsTableSkeleton } from '@/components/students/StudentsTableSkeleton';
import { StudentTableRow } from '@/components/students/StudentTableRow';
import { StatusFilter } from '@/components/students/StatusFilter';

interface ColumnDefinition {
  id: string;
  label: string;
  width: number;
}

interface StudentsTableProps {
  columns: ColumnDefinition[];
  handleColumnWidthChange: (id: string, width: number) => void;
  filteredStudents: Student[];
  isLoading: boolean;
  selectStudent: (student: Student) => void;
  statusFilter: string | null;
  availableStatuses: string[];
  filterByStatus: (status: string | null) => void;
}

export const StudentsTable: React.FC<StudentsTableProps> = ({
  columns,
  handleColumnWidthChange,
  filteredStudents,
  isLoading,
  selectStudent,
  statusFilter,
  availableStatuses,
  filterByStatus
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <ResizableHeader 
                id="name" 
                width={columns.find(c => c.id === 'name')?.width}
                onWidthChange={handleColumnWidthChange}
                className="border-r border-dashed border-gray-200 border-opacity-50"
              >
                Nome Completo
              </ResizableHeader>
              <ResizableHeader 
                id="email"
                width={columns.find(c => c.id === 'email')?.width}
                onWidthChange={handleColumnWidthChange}
                className="border-r border-dashed border-gray-200 border-opacity-50"
              >
                Email
              </ResizableHeader>
              <ResizableHeader 
                id="emailHotmart"
                width={columns.find(c => c.id === 'emailHotmart')?.width}
                onWidthChange={handleColumnWidthChange}
                className="border-r border-dashed border-gray-200 border-opacity-50"
              >
                Email Hotmart
              </ResizableHeader>
              <ResizableHeader 
                id="phone"
                width={columns.find(c => c.id === 'phone')?.width}
                onWidthChange={handleColumnWidthChange}
                className="border-r border-dashed border-gray-200 border-opacity-50"
              >
                Telefone
              </ResizableHeader>
              <ResizableHeader 
                id="status"
                width={columns.find(c => c.id === 'status')?.width}
                onWidthChange={handleColumnWidthChange}
              >
                <StatusFilter 
                  statusFilter={statusFilter}
                  availableStatuses={availableStatuses}
                  filterByStatus={filterByStatus}
                />
              </ResizableHeader>
            </tr>
          </thead>
          <tbody className="divide-y divide-dashed divide-gray-200 divide-opacity-50">
            {isLoading ? (
              <StudentsTableSkeleton />
            ) : filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <StudentTableRow 
                  key={student.id} 
                  student={student} 
                  onClick={selectStudent} 
                />
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  Nenhum aluno encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
