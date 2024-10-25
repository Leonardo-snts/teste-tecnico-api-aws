export const validarAgendamento = (medico: any, data_horario: string) => {
    return medico.horarios_disponiveis.includes(data_horario);
  };
  