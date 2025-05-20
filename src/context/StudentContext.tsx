
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Student } from '../types/student';
import { toast } from '@/components/ui/sonner';
import { supabase } from '@/lib/supabaseClient';

interface StudentContextType {
  students: Student[];
  filteredStudents: Student[];
  selectedStudent: Student | null;
  isEditing: boolean;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
  selectStudent: (student: Student | null) => void;
  filterStudents: (query: string) => void;
  updateStudent: (updatedStudent: Student) => void;
  startEditing: () => void;
  cancelEditing: () => void;
  refreshStudents: () => Promise<void>;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export function StudentProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async () => {
    setIsLoading(true);
    setError(null);
    console.log('Fetching students from Supabase...');

    try {
      // Query the Supabase table for student data
      const { data, error } = await supabase
        .from('alunos_dados_completos')
        .select('ID, A_DADOS_P_NOME_COMPLETO, A_DADOS_P_EMAIL_MATRICULA, A_DADOS_P_EMAIL_MATRICULA_HOTMART, A_DADOS_P_TELEFONE, STATUS');

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Supabase data received:', data);

      if (data && data.length > 0) {
        // Map the database fields to our Student interface
        const mappedStudents: Student[] = data.map(item => ({
          id: item.ID,
          nomeCompleto: item.A_DADOS_P_NOME_COMPLETO,
          email: item.A_DADOS_P_EMAIL_MATRICULA,
          emailHotmart: item.A_DADOS_P_EMAIL_MATRICULA_HOTMART,
          telefone: item.A_DADOS_P_TELEFONE,
          statusLista: item.STATUS,
          fotoPerfil: null, // Explicitly null as we don't have this field in the database
          // Other fields are undefined for now
        }));

        console.log('Mapped students:', mappedStudents);
        setStudents(mappedStudents);
        setFilteredStudents(mappedStudents);
      } else {
        console.log('No students data found');
        setStudents([]);
        setFilteredStudents([]);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
      setError('Falha ao buscar lista de alunos');
      toast.error("Erro ao carregar alunos");
      // Don't use mock data as fallback - we want to show the error
      setStudents([]);
      setFilteredStudents([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchStudents();
  }, []);

  const selectStudent = (student: Student | null) => {
    setSelectedStudent(student);
    setIsEditing(false);
  };

  const filterStudents = (query: string) => {
    setSearchQuery(query);
    const lowercaseQuery = query.toLowerCase();
    
    const filtered = students.filter(student => 
      (student.nomeCompleto?.toLowerCase().includes(lowercaseQuery) || '') || 
      (student.email?.toLowerCase().includes(lowercaseQuery) || '') || 
      (student.telefone?.includes(query) || '')
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
        (student.nomeCompleto?.toLowerCase().includes(searchQuery.toLowerCase()) || '') || 
        (student.email?.toLowerCase().includes(searchQuery.toLowerCase()) || '') || 
        (student.telefone?.includes(searchQuery) || '')
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

  const refreshStudents = async () => {
    await fetchStudents();
  };

  return (
    <StudentContext.Provider value={{
      students,
      filteredStudents,
      selectedStudent,
      isEditing,
      searchQuery,
      isLoading,
      error,
      selectStudent,
      filterStudents,
      updateStudent,
      startEditing,
      cancelEditing,
      refreshStudents
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
