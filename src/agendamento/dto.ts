export interface AgendamentoRequest {
    medico_id: number;
    paciente_nome: string;
    data_horario: string;
  }
  
  export interface AgendamentoResponse {
    mensagem: string;
    agendamento: {
      medico: string;
      paciente: string;
      data_horario: string;
    };
  }
  