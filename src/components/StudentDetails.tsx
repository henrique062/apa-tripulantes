
import React, { useState } from 'react';
import { useStudents } from '@/context/StudentContext';
import { Button } from '@/components/ui/button';
import { X, Save, Pencil } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const StudentDetails = () => {
  const { selectedStudent, selectStudent, updateStudent, isEditing, startEditing, cancelEditing } = useStudents();
  
  const [formData, setFormData] = useState(selectedStudent!);

  if (!selectedStudent) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleSave = () => {
    updateStudent(formData);
  };

  const handleCancel = () => {
    setFormData(selectedStudent);
    cancelEditing();
  };

  // Field render helpers
  const renderTextField = (label: string, name: keyof typeof formData, placeholder: string = "") => (
    <div className="mb-4">
      <Label htmlFor={name as string} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </Label>
      {isEditing ? (
        <Input
          id={name as string}
          name={name as string}
          value={formData[name] as string || ''}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full"
        />
      ) : (
        <div className="p-2 bg-gray-50 rounded-md border border-gray-200 min-h-[38px]">
          {formData[name] as string || '-'}
        </div>
      )}
    </div>
  );

  const renderTextareaField = (label: string, name: keyof typeof formData, placeholder: string = "") => (
    <div className="mb-4">
      <Label htmlFor={name as string} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </Label>
      {isEditing ? (
        <Textarea
          id={name as string}
          name={name as string}
          value={formData[name] as string || ''}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full"
          rows={3}
        />
      ) : (
        <div className="p-2 bg-gray-50 rounded-md border border-gray-200 min-h-[38px]">
          {formData[name] as string || '-'}
        </div>
      )}
    </div>
  );

  const renderSwitchField = (label: string, name: keyof typeof formData) => (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <Label htmlFor={name as string} className="text-sm font-medium text-gray-700">
          {label}
        </Label>
        <Switch
          id={name as string}
          checked={!!formData[name]}
          onCheckedChange={(checked) => handleSwitchChange(name as string, checked)}
          disabled={!isEditing}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">{selectedStudent.nomeCompleto}</h1>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" size="sm" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button className="bg-green-600 hover:bg-green-700" size="sm" onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Salvar
              </Button>
            </>
          ) : (
            <Button className="bg-blue-600 hover:bg-blue-700" size="sm" onClick={startEditing}>
              <Pencil className="mr-2 h-4 w-4" />
              Editar
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => selectStudent(null)} 
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Form Sections */}
      <div className="space-y-8">
        {/* Informações Pessoais */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Informações Pessoais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {renderTextField("Nome Completo", "nomeCompleto", "Nome completo do aluno")}
            {renderTextField("Email", "email", "Email do aluno")}
            {renderTextField("Email Hotmart", "emailHotmart", "Email Hotmart do aluno")}
            {renderTextField("Telefone", "telefone", "(99) 99999-9999")}
            {renderTextField("Data de Nascimento", "dataNascimento", "DD/MM/YYYY")}
            {renderTextField("Nacionalidade", "nacionalidade", "País de origem")}
          </div>
        </div>

        {/* Formação e Idiomas */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Formação e Idiomas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {renderTextField("Formação Acadêmica", "formacaoAcademica", "Formação acadêmica do aluno")}
            {renderTextField("Nível de Inglês", "nivelIngles", "Nível de inglês do aluno")}
            {renderTextField("Data de Inscrição", "dataInscricao", "DD/MM/YYYY")}
            {renderTextField("Outro Idioma", "outroIdioma", "Outro idioma")}
            {renderTextField("Nível do Outro Idioma", "nivelOutroIdioma", "Nível do outro idioma")}
          </div>
        </div>

        {/* Experiência Profissional */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Experiência Profissional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {renderTextareaField("Experiência Profissional", "experienciaProfissional", "Descreva a experiência profissional")}
            <div className="space-y-4">
              {renderSwitchField("Experiência em Cruzeiros", "experienciaCruzeiros")}
              {renderSwitchField("Experiência em Hotelaria", "experienciaHotelaria")}
              {renderSwitchField("Experiência Internacional", "experienciaInternacional")}
            </div>
          </div>
        </div>

        {/* Jornada Dentro do Programa */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Jornada Dentro do Programa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {renderTextField("Status da Jornada", "statusJornada", "Status atual na jornada")}
            {renderTextareaField("Observações", "observacoes", "Observações sobre o aluno")}
          </div>
        </div>

        {/* Suporte dos Navegadores */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Suporte dos Navegadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {renderSwitchField("Entrevista Realizada", "entrevistaRealizada")}
            {renderSwitchField("Avaliação de Documentos", "avaliacaoDocumentos")}
            {renderSwitchField("Serviço Consular", "servicoConsular")}
          </div>
        </div>

        {/* Processos Seletivos */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Processos Seletivos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {renderTextField("Processos Seletivos", "processosSeletivos", "Empresas onde participa de processos")}
            {renderTextField("Status do Processo", "statusProcesso", "Status atual no processo")}
            {renderTextField("Data da Entrevista", "dataEntrevista", "DD/MM/YYYY")}
          </div>
        </div>

        {/* Pós-Embarque */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Pós-Embarque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {renderTextField("Data de Embarque", "dataEmbarque", "DD/MM/YYYY")}
            {renderTextField("Posição Trabalhada", "posicaoTrabalhada", "Cargo/função a bordo")}
            {renderTextField("Companhia de Cruzeiro", "companhiaCruzeiro", "Nome da companhia")}
            {renderTextField("Navio Atual", "navioAtual", "Nome do navio")}
          </div>
        </div>
      </div>
    </div>
  );
};
