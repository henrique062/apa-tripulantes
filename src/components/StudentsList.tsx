
import React from 'react';
import { Search, User, RefreshCcw } from 'lucide-react';
import { useStudents } from '@/context/StudentContext';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export const StudentsList = () => {
  const { 
    filteredStudents, 
    selectStudent, 
    filterStudents, 
    searchQuery,
    isLoading,
    error,
    refreshStudents
  } = useStudents();

  // Helper function to determine student status
  const getStudentStatus = (student) => {
    if (!student.statusLista) {
      return { text: "Status desconhecido", className: "text-gray-500" };
    }
    
    // Map status from database to UI status
    const status = student.statusLista.toLowerCase();
    if (status.includes('ativo') || status.includes('embarque') || status.includes('processo')) {
      return { text: "Ativo", className: "text-green-600 font-medium" };
    } else {
      return { text: "Inativo", className: "text-gray-500" };
    }
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
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Buscar alunos por nome, email ou telefone..."
          className="pl-10 py-2 w-full rounded-lg"
          value={searchQuery}
          onChange={(e) => filterStudents(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {/* Students List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nome Completo</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Telefone</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                // Loading skeletons
                Array(5).fill(0).map((_, index) => (
                  <tr key={`skeleton-${index}`}>
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
                      <Skeleton className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-16" />
                    </td>
                  </tr>
                ))
              ) : filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr 
                    key={student.id} 
                    className="hover:bg-blue-50 cursor-pointer"
                    onClick={() => selectStudent(student)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={student.fotoPerfil || ''} alt={student.nomeCompleto || 'Aluno'} />
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            <User size={18} />
                          </AvatarFallback>
                        </Avatar>
                        <span>{student.nomeCompleto || 'Nome não disponível'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.email || 'Email não disponível'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.telefone || 'Telefone não disponível'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStudentStatus(student).className}>
                        {getStudentStatus(student).text}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Nenhum aluno encontrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
