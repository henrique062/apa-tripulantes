
import React from 'react';
import { User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Student } from '@/types/student';

interface StudentTableRowProps {
  student: Student;
  onClick: (student: Student) => void;
}

export const StudentTableRow: React.FC<StudentTableRowProps> = ({ student, onClick }) => {
  // Helper function to determine student status
  const getStudentStatus = (student: Student) => {
    if (!student.statusLista) {
      return { text: "Status desconhecido", className: "text-gray-500" };
    }
    
    // Map status from database to UI status
    const status = student.statusLista.toUpperCase();
    
    if (status === "ATIVO") {
      return { text: "ATIVO", className: "text-green-600 font-medium" };
    } else if (status === "INATIVO") {
      return { text: "INATIVO", className: "text-red-600 font-medium" };
    } else if (status === "COMPLETE") {
      return { text: "COMPLETO", className: "text-blue-600 font-medium" };
    } else {
      return { text: student.statusLista, className: "text-gray-500" };
    }
  };

  return (
    <tr 
      className="hover:bg-blue-50 cursor-pointer border-b border-dashed border-opacity-50 border-gray-200"
      onClick={() => onClick(student)}
    >
      <td className="px-6 py-4 whitespace-nowrap border-r border-dashed border-gray-200 border-opacity-50">
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
      <td className="px-6 py-4 whitespace-nowrap border-r border-dashed border-gray-200 border-opacity-50">{student.email || 'Email não disponível'}</td>
      <td className="px-6 py-4 whitespace-nowrap border-r border-dashed border-gray-200 border-opacity-50">{student.emailHotmart || 'Email não cadastrado'}</td>
      <td className="px-6 py-4 whitespace-nowrap border-r border-dashed border-gray-200 border-opacity-50">{student.telefone || 'Telefone não disponível'}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={getStudentStatus(student).className}>
          {getStudentStatus(student).text}
        </span>
      </td>
    </tr>
  );
};
