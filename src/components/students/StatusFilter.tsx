
import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface StatusFilterProps {
  statusFilter: string | null;
  availableStatuses: string[];
  filterByStatus: (status: string | null) => void;
}

export const StatusFilter: React.FC<StatusFilterProps> = ({ 
  statusFilter, 
  availableStatuses,
  filterByStatus 
}) => {
  return (
    <div className="flex items-center space-x-1">
      <span>Status</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Filter size={14} className={statusFilter ? "text-blue-600" : "text-gray-500"} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60 p-2" align="start">
          <div className="space-y-2">
            <div className="font-medium text-sm">Filtrar por status</div>
            
            <Select 
              value={statusFilter || "all"} 
              onValueChange={(value) => filterByStatus(value === "all" ? null : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                {availableStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status === "COMPLETE" ? "COMPLETO" : status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {statusFilter && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2" 
                onClick={() => filterByStatus(null)}
              >
                <X size={14} className="mr-1" />
                Limpar filtro
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
