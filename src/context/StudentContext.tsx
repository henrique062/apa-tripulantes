
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Student } from '../types/student';
import { mockStudents } from '../data/mockStudents';
import { toast } from '@/components/ui/sonner';

interface StudentContextType {
  students: Student[];
  filteredStudents: Student[];
  selectedStudent: Student | null;
  isEditing: boolean;
  searchQuery: string;
  selectStudent: (student: Student | null) => void;
  filterStudents: (query: string) => void;
  updateStudent: (updatedStudent: Student) => void;
  startEditing: () => void;
  cancelEditing: () => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export function StudentProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(mockStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectStudent = (student: Student | null) => {
    setSelectedStudent(student);
    setIsEditing(false);
  };

  const filterStudents = (query: string) => {
    setSearchQuery(query);
    const lowercaseQuery = query.toLowerCase();
    
    const filtered = students.filter(student => 
      student.nomeCompleto.toLowerCase().includes(lowercaseQuery) || 
      student.email.toLowerCase().includes(lowercaseQuery) || 
      student.telefone.includes(query)
    );
    
    setFilteredStudents(filtered);
  };

  const updateStudent = (updatedStudent: Student) => {
    const updatedStudents = students.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    );
    
    setStudents(updatedStudents);
    setFilteredStudents(
      updatedStudents.filter(student => 
        student.nomeCompleto.toLowerCase().includes(searchQuery.toLowerCase()) || 
        student.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
        student.telefone.includes(searchQuery)
      )
    );
    setSelectedStudent(updatedStudent);
    setIsEditing(false);
    toast.success("Dados do aluno atualizados com sucesso!");
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  return (
    <StudentContext.Provider value={{
      students,
      filteredStudents,
      selectedStudent,
      isEditing,
      searchQuery,
      selectStudent,
      filterStudents,
      updateStudent,
      startEditing,
      cancelEditing
    }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
}
