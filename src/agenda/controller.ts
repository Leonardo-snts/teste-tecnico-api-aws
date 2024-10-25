import { APIGatewayProxyHandler } from 'aws-lambda';
import { buscarAgendas as buscarAgendasService } from './service';
import { AgendasResponse } from './dto';

export const buscarAgendas: APIGatewayProxyHandler = async (event) => {
  const agendas = buscarAgendasService();
  const response: AgendasResponse = { medicos: agendas };
  
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
