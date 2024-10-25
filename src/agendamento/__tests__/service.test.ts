import { marcarAgendamento } from '../service';

describe('marcarAgendamento', () => {
  it('deve marcar um agendamento com sucesso', () => {
    const result = marcarAgendamento(1, 'Carlos Almeida', '2024-10-05 09:00');
    expect(result.sucesso).toBe(true);
    expect(result.mensagem).toBe('Agendamento realizado com sucesso');
    expect(result.agendamento).toEqual({
      medico: 'Dr. João Silva',
      paciente: 'Carlos Almeida',
      data_horario: '2024-10-05 09:00',
    });
  });

  it('deve retornar erro para um agendamento inválido', () => {
    const result = marcarAgendamento(99, 'Carlos Almeida', '2024-10-05 09:00');
    expect(result.sucesso).toBe(false);
    expect(result.mensagem).toBe('Dados de agendamento inválidos');
  });
});
