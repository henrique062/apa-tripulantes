
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isDisabled?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  searchQuery, 
  onSearchChange,
  isDisabled = false
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <Input
        type="text"
        placeholder="Buscar alunos por nome, email ou telefone..."
        className="pl-10 py-2 w-full rounded-lg"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        disabled={isDisabled}
      />
    </div>
  );
};
