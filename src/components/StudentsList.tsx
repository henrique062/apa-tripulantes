
import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';
import { useStudents } from '@/context/StudentContext';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/students/SearchBar';
import { StudentsTable } from '@/components/students/StudentsTable';

// Table column definition type
interface ColumnDefinition {
  id: string;
  label: string;
  width: number;
}

export const StudentsList = () => {
  const { 
    filteredStudents, 
    selectStudent, 
    filterStudents, 
    filterByStatus,
    searchQuery,
    statusFilter,
    availableStatuses,
    isLoading,
    error,
    refreshStudents
  } = useStudents();

  // Initial column definitions
  const defaultColumns: ColumnDefinition[] = [
    { id: 'name', label: 'Nome Completo', width: 250 },
    { id: 'email', label: 'Email', width: 200 },
    { id: 'emailHotmart', label: 'Email Hotmart', width: 200 },
    { id: 'phone', label: 'Telefone', width: 150 },
    { id: 'status', label: 'Status', width: 120 },
  ];

  // State for column widths
  const [columns, setColumns] = useState<ColumnDefinition[]>(defaultColumns);

  // Load column widths from localStorage on mount
  useEffect(() => {
    const savedColumns = localStorage.getItem('studentColumnsWidth');
    if (savedColumns) {
      try {
        const parsedColumns = JSON.parse(savedColumns);
        setColumns(parsedColumns);
      } catch (e) {
        console.error('Error parsing saved column widths', e);
      }
    }
  }, []);

  // Handle column width change
  const handleColumnWidthChange = (id: string, width: number) => {
    const updatedColumns = columns.map(col => 
      col.id === id ? { ...col, width } : col
    );
    setColumns(updatedColumns);
    
    // Save to localStorage
    localStorage.setItem('studentColumnsWidth', JSON.stringify(updatedColumns));
  };

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Alunos</h1>
        </div>
        <div className="bg-red-50 p-4 rounded-md border border-red-200">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => refreshStudents()}
            className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Alunos</h1>
        <Button 
          onClick={() => refreshStudents()} 
          variant="outline" 
          size="sm"
          disabled={isLoading}
        >
          <RefreshCcw size={16} className="mr-2" />
          Atualizar
        </Button>
      </div>

      {/* Search Bar */}
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={filterStudents}
        isDisabled={isLoading}
      />

      {/* Students Table */}
      <StudentsTable
        columns={columns}
        handleColumnWidthChange={handleColumnWidthChange}
        filteredStudents={filteredStudents}
        isLoading={isLoading}
        selectStudent={selectStudent}
        statusFilter={statusFilter}
        availableStatuses={availableStatuses}
        filterByStatus={filterByStatus}
      />
    </div>
  );
};
