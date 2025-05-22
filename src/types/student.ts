
export interface Student {
  id: number;
  nomeCompleto: string | null;
  email: string | null;
  emailHotmart: string | null;
  telefone: string | null;
  statusLista: string | null;
  fotoPerfil: string | null;
  
  // Novos campos adicionados
  dataNascimento: string | null;
  nacionalidade: string | null;
  formacaoAcademica: string | null;
  nivelIngles: string | null;
  dataInscricao: string | null;
  
  // Campos existentes
  statusEmigratório?: string;
  outroIdioma?: string;
  nivelOutroIdioma?: string;
  experienciaProfissional?: string;
  experienciaCruzeiros?: boolean;
  experienciaHotelaria?: boolean;
  experienciaInternacional?: boolean;
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
