import { buscarAgendas } from '../service';
import { getMockAgendas } from '../mocks';

describe('Agenda Service', () => {
  it('deve retornar a lista de agendas mockadas', () => {
    const agendas = buscarAgendas();
    expect(agendas).toEqual(getMockAgendas());
  });
});
