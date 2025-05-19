
import React from 'react';
import { Search, User } from 'lucide-react';
import { useStudents } from '@/context/StudentContext';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const StudentsList = () => {
  const { filteredStudents, selectStudent, filterStudents, searchQuery } = useStudents();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Alunos</h1>
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr 
                    key={student.id} 
                    className="hover:bg-blue-50 cursor-pointer"
                    onClick={() => selectStudent(student)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={student.fotoPerfil} alt={student.nomeCompleto} />
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            <User size={18} />
                          </AvatarFallback>
                        </Avatar>
                        <span>{student.nomeCompleto}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.telefone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
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
