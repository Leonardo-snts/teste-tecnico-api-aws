# Teste Técnico - Desenvolvedor Backend

## Descrição

Esta é uma API desenvolvida utilizando Node.js, TypeScript, Serverless Framework e AWS Lambda. O objetivo da API é fornecer endpoints para buscar as agendas de médicos e marcar agendamentos para pacientes. Os dados são mockados para fins de teste.

## Funcionalidades

A API oferece os seguintes endpoints:

1.Buscar agendas e horários dos médicos
- Rota: GET /agendas
- Descrição: Retorna uma lista de médicos com suas respectivas agendas e horários disponíveis.
2.Marcar agendamento do paciente
- Rota: POST /agendamento
- Descrição: Permite que o paciente marque um horário de consulta com um médico.

## Tecnologias Utilizadas

- Node.js (v18.x)
- TypeScript
- Serverless Framework (v3.x)
- AWS Lambda
- Jest para testes unitários
- ESLint e Prettier para formatação e linting de código
- 
## Requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Serverless Framework (v3.x)
- AWS CLI (para deploy na AWS)
- Conta AWS (para deploy na nuvem, se necessário)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1.Clone o repositório:

```
git clone https://github.com/seu-usuario/teste-tecnico-api-aws.git
cd teste-tecnico-api-aws
```

2.Instale as dependências do projeto:

```
npm install
```

3.Instale o Serverless Framework globalmente (caso ainda não tenha instalado):

```
npm install -g serverless
```

## Executando o Projeto Localmente

Para rodar o projeto localmente utilizando o plugin serverless-offline:

```
npx serverless offline
```

Isso irá iniciar o servidor local em http://localhost:3000, onde você poderá acessar os endpoints:

- GET /agendas
- POST /agendamento
- 
## Exemplo de Requisição POST /agendamento

```
curl --location --request POST 'http://localhost:3000/agendamento' \
--header 'Content-Type: application/json' \
--data-raw '{
    "medico_id": 1,
    "paciente_nome": "Carlos Almeida",
    "data_horario": "2024-10-05 09:00"
}'
```

## Executando Testes

O projeto utiliza o Jest para testes unitários. Para rodar os testes, execute:

```
npm test
```

## Deploy para AWS

Para fazer o deploy da API na AWS, siga os seguintes passos:

1.Certifique-se de estar autenticado na AWS CLI:

```
aws configure
```

2.Execute o comando para fazer o deploy:

```
npx serverless deploy
```

3.Após o deploy, o Serverless fornecerá as URLs dos endpoints que podem ser acessados via o API Gateway.

## Estrutura do Projeto
```
src/
 ├── agenda/
 │   ├── controller.ts      # Lógica do controlador para agendas
 │   ├── service.ts         # Lógica de negócios para agendas
 │   ├── dto.ts             # Definições dos DTOs
 │   ├── mocks.ts           # Dados mockados
 │   └── __tests__/         # Testes unitários para agenda
 ├── agendamento/
 │   ├── controller.ts      # Lógica do controlador para agendamentos
 │   ├── service.ts         # Lógica de negócios para agendamentos
 │   ├── dto.ts             # Definições dos DTOs
 │   ├── mocks.ts           # Dados mockados
 │   └── __tests__/         # Testes unitários para agendamento
 ├── utils/
 │   └── validation.ts      # Funções de validação
 └── handler.ts             # Definição dos handlers das funções Lambda
```

## Boas Práticas Utilizadas
- Modularidade: O código foi dividido em pastas de acordo com os domínios (agenda, agendamento) para facilitar a organização e manutenção.
- Validações: Validações de payload foram implementadas para garantir que as requisições sejam processadas corretamente.
- Testes Unitários: Todos os serviços principais possuem testes unitários implementados com Jest.
- Prettier e ESLint: Ferramentas de formatação e linting para garantir a qualidade do código.

## Melhorias Futuras

- Implementar integração com um banco de dados real para persistência dos dados.
- Adicionar autenticação e autorização com AWS Cognito.
- Criar mais testes unitários para cobrir diferentes cenários de erro e edge cases.

## 

Feito por Leonardo.
