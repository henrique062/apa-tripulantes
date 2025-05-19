
export interface Student {
  id: string;
  // Informações Pessoais
  nomeCompleto: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  nacionalidade: string;
  statusEmigratório: string;
  
  // Formação e Idiomas
  formacaoAcademica: string;
  nivelIngles: string;
  nivelOutroIdioma: string;
  outroIdioma: string;
  
  // Experiência Profissional
  experienciaProfissional: string;
  experienciaCruzeiros: boolean;
  experienciaHotelaria: boolean;
  experienciaInternacional: boolean;
  
  // Jornada Dentro do Programa
  dataInscricao: string;
  statusJornada: string;
  observacoes: string;
  
  // Suporte dos Navegadores
  entrevistaRealizada: boolean;
  avaliacaoDocumentos: boolean;
  servicoConsular: boolean;
  
  // Processos Seletivos
  processosSeletivos: string;
  statusProcesso: string;
  dataEntrevista: string;
  
  // Pós-Embarque
  dataEmbarque: string;
  posicaoTrabalhada: string;
  companhiaCruzeiro: string;
  navioAtual: string;
  
  // Foto de perfil
  fotoPerfil?: string;
}
