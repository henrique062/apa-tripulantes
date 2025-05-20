
import React, { useState } from 'react';
import { Menu, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StudentProvider } from '@/context/StudentContext';
import { StudentsPage } from '@/components/StudentsPage';

export const Layout = () => {
  // Alterando o estado inicial para false (minimizado)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <StudentProvider>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div
          className={cn(
            "bg-blue-800 text-white transition-all duration-300 ease-in-out relative",
            sidebarOpen ? "w-64" : "w-16"
          )}
        >
          <div className="p-4 flex justify-between items-center">
            <h2 className={cn("font-semibold text-lg whitespace-nowrap", !sidebarOpen && "opacity-0")}>
              Portal do Aluno
            </h2>
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-blue-200 focus:outline-none"
              aria-label={sidebarOpen ? "Fechar menu lateral" : "Abrir menu lateral"}
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="mt-6">
            <div className={cn(
              "px-4 py-3 flex items-center text-white bg-blue-700 rounded-r-md",
              !sidebarOpen && "justify-center"
            )}>
              <Users size={20} />
              <span className={cn("ml-3 whitespace-nowrap", !sidebarOpen && "opacity-0")}>Alunos</span>
            </div>
          </nav>

          {/* Collapse Button (Alternative) */}
          <button
            onClick={toggleSidebar}
            className="hidden sm:flex absolute top-1/2 -right-3 bg-blue-700 text-white rounded-full p-1 transform -translate-y-1/2 shadow-md hover:bg-blue-600 focus:outline-none"
            aria-label={sidebarOpen ? "Recolher menu" : "Expandir menu"}
          >
            {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <StudentsPage />
        </div>
      </div>
    </StudentProvider>
  );
};
