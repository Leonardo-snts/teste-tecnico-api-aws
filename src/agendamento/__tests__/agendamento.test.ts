import { marcarAgendamento } from '../service';
import { getMockMedicos } from '../../agenda/mocks';

describe('Agendamento Service', () => {
  it('deve retornar sucesso ao marcar um agendamento válido', () => {
    const medico_id = 1;
    const paciente_nome = "Carlos Almeida";
    const data_horario = "2024-10-05 09:00";

    const resultado = marcarAgendamento(medico_id, paciente_nome, data_horario);

    expect(resultado.sucesso).toBe(true);
    expect(resultado.agendamento).toEqual({
      medico: "Dr. João Silva",
      paciente: "Carlos Almeida",
      data_horario: "2024-10-05 09:00"
    });
  });

  it('deve retornar erro ao tentar marcar um agendamento inválido', () => {
    const medico_id = 1;
    const paciente_nome = "Carlos Almeida";
    const data_horario = "2024-10-05 13:00"; // Horário inválido

    const resultado = marcarAgendamento(medico_id, paciente_nome, data_horario);

    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toBe('Dados de agendamento inválidos');
  });
});
