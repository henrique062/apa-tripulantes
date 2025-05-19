
import { Student } from "../types/student";

export const mockStudents: Student[] = [
  {
    id: 1,
    nomeCompleto: "João Oliveira",
    email: "joao.oliveira@email.com",
    telefone: "(11) 98765-4321",
    dataNascimento: "1992-05-15",
    nacionalidade: "Brasileiro",
    statusEmigratório: "Passaporte Regular",
    fotoPerfil: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=250&h=250&fit=crop",
    statusLista: "Em processo seletivo",
    
    formacaoAcademica: "Bacharel em Turismo",
    nivelIngles: "Avançado",
    nivelOutroIdioma: "Intermediário",
    outroIdioma: "Espanhol",
    
    experienciaProfissional: "5 anos em hotéis de luxo",
    experienciaCruzeiros: true,
    experienciaHotelaria: true,
    experienciaInternacional: false,
    
    dataInscricao: "2023-01-15",
    statusJornada: "Em processo seletivo",
    observacoes: "Candidato com grande potencial",
    
    entrevistaRealizada: true,
    avaliacaoDocumentos: true,
    servicoConsular: false,
    
    processosSeletivos: "Princess Cruises, Royal Caribbean",
    statusProcesso: "Em andamento",
    dataEntrevista: "2023-02-20",
    
    dataEmbarque: "",
    posicaoTrabalhada: "",
    companhiaCruzeiro: "",
    navioAtual: ""
  },
  {
    id: 2,
    nomeCompleto: "Maria Santos",
    email: "maria.santos@email.com",
    telefone: "(21) 99876-5432",
    dataNascimento: "1995-08-23",
    nacionalidade: "Brasileira",
    statusEmigratório: "Passaporte e Visto B1/B2",
    fotoPerfil: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=250&h=250&fit=crop",
    statusLista: "Aprovado",
    
    formacaoAcademica: "Bacharel em Hotelaria",
    nivelIngles: "Fluente",
    nivelOutroIdioma: "Básico",
    outroIdioma: "Francês",
    
    experienciaProfissional: "3 anos em resorts internacionais",
    experienciaCruzeiros: false,
    experienciaHotelaria: true,
    experienciaInternacional: true,
    
    dataInscricao: "2023-02-05",
    statusJornada: "Aprovado",
    observacoes: "Excelente domínio de idiomas",
    
    entrevistaRealizada: true,
    avaliacaoDocumentos: true,
    servicoConsular: true,
    
    processosSeletivos: "MSC Cruzeiros",
    statusProcesso: "Aprovado",
    dataEntrevista: "2023-03-10",
    
    dataEmbarque: "2023-06-15",
    posicaoTrabalhada: "Atendente de Bar",
    companhiaCruzeiro: "MSC Cruzeiros",
    navioAtual: "MSC Grandiosa"
  },
  {
    id: 3,
    nomeCompleto: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    telefone: "(51) 97654-3210",
    dataNascimento: "1990-11-30",
    nacionalidade: "Brasileiro",
    statusEmigratório: "Passaporte Regular",
    statusLista: "Em análise documental",
    
    formacaoAcademica: "Tecnólogo em Gastronomia",
    nivelIngles: "Intermediário",
    nivelOutroIdioma: "Básico",
    outroIdioma: "Italiano",
    
    experienciaProfissional: "8 anos como chef em restaurantes",
    experienciaCruzeiros: false,
    experienciaHotelaria: false,
    experienciaInternacional: false,
    
    dataInscricao: "2023-03-20",
    statusJornada: "Em análise documental",
    observacoes: "Necessita melhorar nível de inglês",
    
    entrevistaRealizada: true,
    avaliacaoDocumentos: false,
    servicoConsular: false,
    
    processosSeletivos: "Norwegian Cruise Line",
    statusProcesso: "Em análise",
    dataEntrevista: "2023-04-05",
    
    dataEmbarque: "",
    posicaoTrabalhada: "",
    companhiaCruzeiro: "",
    navioAtual: ""
  },
  {
    id: 4,
    nomeCompleto: "Ana Ferreira",
    email: "ana.ferreira@email.com",
    telefone: "(31) 98765-4321",
    dataNascimento: "1993-07-12",
    nacionalidade: "Brasileira",
    statusEmigratório: "Passaporte e Visto C1/D",
    fotoPerfil: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=250&h=250&fit=crop",
    statusLista: "Embarcado",
    
    formacaoAcademica: "Bacharel em Administração",
    nivelIngles: "Fluente",
    nivelOutroIdioma: "Intermediário",
    outroIdioma: "Alemão",
    
    experienciaProfissional: "4 anos em gestão de hospitalidade",
    experienciaCruzeiros: true,
    experienciaHotelaria: true,
    experienciaInternacional: true,
    
    dataInscricao: "2022-11-10",
    statusJornada: "Embarcado",
    observacoes: "Excelente desempenho na entrevista",
    
    entrevistaRealizada: true,
    avaliacaoDocumentos: true,
    servicoConsular: true,
    
    processosSeletivos: "Royal Caribbean",
    statusProcesso: "Aprovado",
    dataEntrevista: "2022-12-15",
    
    dataEmbarque: "2023-02-10",
    posicaoTrabalhada: "Guest Relations Officer",
    companhiaCruzeiro: "Royal Caribbean",
    navioAtual: "Harmony of the Seas"
  },
  {
    id: 5,
    nomeCompleto: "Pedro Almeida",
    email: "pedro.almeida@email.com",
    telefone: "(41) 99876-5432",
    dataNascimento: "1991-03-25",
    nacionalidade: "Brasileiro",
    statusEmigratório: "Passaporte Regular",
    fotoPerfil: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=250&h=250&fit=crop",
    statusLista: "Entrevista agendada",
    
    formacaoAcademica: "Técnico em Hospedagem",
    nivelIngles: "Avançado",
    nivelOutroIdioma: "Intermediário",
    outroIdioma: "Espanhol",
    
    experienciaProfissional: "6 anos no setor hoteleiro",
    experienciaCruzeiros: false,
    experienciaHotelaria: true,
    experienciaInternacional: false,
    
    dataInscricao: "2023-02-28",
    statusJornada: "Entrevista agendada",
    observacoes: "Candidato recomendado por ex-aluno",
    
    entrevistaRealizada: false,
    avaliacaoDocumentos: true,
    servicoConsular: false,
    
    processosSeletivos: "Carnival Cruise Line",
    statusProcesso: "Entrevista agendada",
    dataEntrevista: "2023-04-10",
    
    dataEmbarque: "",
    posicaoTrabalhada: "",
    companhiaCruzeiro: "",
    navioAtual: ""
  }
];
