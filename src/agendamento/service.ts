import { getMockMedicos } from '../agenda/mocks';
import { validarAgendamento } from '../utils/validations';

export const marcarAgendamento = (medico_id: number, paciente_nome: string, data_horario: string) => {
  const medico = getMockMedicos().find(m => m.id === medico_id);

  if (!medico || !validarAgendamento(medico, data_horario)) {
    return {
      sucesso: false,
      mensagem: 'Dados de agendamento inválidos',
    };
  }

  return {
    sucesso: true,
    mensagem: 'Agendamento realizado com sucesso',
    agendamento: {
      medico: medico.nome,
      paciente: paciente_nome,
      data_horario,
    },
  };
};
