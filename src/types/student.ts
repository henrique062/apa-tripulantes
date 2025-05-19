
export interface Student {
  id: number;
  nomeCompleto: string | null;
  email: string | null;
  telefone: string | null;
  statusLista: string | null;
  fotoPerfil: string | null;
  
  // Maintaining existing fields for compatibility with other components
  // Information below was in the original Student interface
  dataNascimento?: string;
  nacionalidade?: string;
  statusEmigratório?: string;
  
  formacaoAcademica?: string;
  nivelIngles?: string;
  nivelOutroIdioma?: string;
  outroIdioma?: string;
  
  experienciaProfissional?: string;
  experienciaCruzeiros?: boolean;
  experienciaHotelaria?: boolean;
  experienciaInternacional?: boolean;
  
  dataInscricao?: string;
  statusJornada?: string;
  observacoes?: string;
  
  entrevistaRealizada?: boolean;
  avaliacaoDocumentos?: boolean;
  servicoConsular?: boolean;
  
  processosSeletivos?: string;
  statusProcesso?: string;
  dataEntrevista?: string;
  
  dataEmbarque?: string;
  posicaoTrabalhada?: string;
  companhiaCruzeiro?: string;
  navioAtual?: string;
}
