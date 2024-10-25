import { APIGatewayProxyHandler } from 'aws-lambda';
import { marcarAgendamento as marcarAgendamentoService } from './service';
import { AgendamentoRequest, AgendamentoResponse } from './dto';

export const marcarAgendamento: APIGatewayProxyHandler = async (event) => {
  const body: AgendamentoRequest = JSON.parse(event.body || '{}');
  const { medico_id, paciente_nome, data_horario } = body;

  const result = marcarAgendamentoService(medico_id, paciente_nome, data_horario);

  if (!result.sucesso) {
    return {
      statusCode: 400,
      body: JSON.stringify({ mensagem: result.mensagem }),
    };
  }

  const response: AgendamentoResponse = {
    mensagem: result.mensagem,
    // Usamos o operador ! para garantir que o agendamento está definido ao chegar aqui
    agendamento: result.agendamento!,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
