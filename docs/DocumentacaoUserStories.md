# Documento Lista de User Stories


## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](documentovisao.md). Este documento também pode ser adaptado para descrever Casos de Uso.

## Histórico de revisões

| Data       | Versão  | Descrição                          | Autor                          |
| :--------- | :-----: | :--------------------------------: | :----------------------------- |
| 27/11/2023 | 1.0     | Inicio do documento de User Stories | Felippe Silva |
| 29/12/2023 | 1.1     | Dando continuidade ao documento | Davi Natan, Felippe Silva |
| 30/12/2023 | 1.2     | Dando continuidade ao documento| Gedson Fernandes, José Gabriel |



### User Story US01 - Manter Usuário

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos usuários a partir da inserção, alteração, exclusão e consulta dos seus dados ao sistema. O registro no sistema poderá ser feito pelo gerente. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Cadastrar Usuário | 
| RF02          | Cadastrar Agendamento | 
| RF03          | Alterar Agendamento | 
| RF04          | Excluir Agendamento | 
| RF05          | Consultar Agendamento|

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 5h |
| **Tempo Gasto (real):**   |       | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
| **Analista**| Felippe Silva (responsável por especificar/detalhar). |
| **Desenvolvedor** | José Gabriel (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Davi Natan (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Gedson Fernandes (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | O gerente informa, os horários e os dias que estão livres na semana e o sistema funciona corretamente. |
| **TA01.02** | O gerente informa na tela de agendamento os dias que não estão disponíveis. |
| **TA01.03** | O gerente tenta alterar os horários disponíveis de agendamento e tem sucesso. |
| **TA01.04** | O gerente tenta alterar os horários e tem um erro pois já existe um horário selecionado. |
| **TA01.05** | O gerente tenta desativar um horário e tem sucesso. |
| **TA01.06** | O gerente tenta desativar um horário e tem erro. |
| **TA01.07** | O gerente tenta pesquisar um horário e tem sucesso, a pesquisa é retornada. |
| **TA01.08** | O gerente tenta pesquisar um horário e não há retorno (exibição vazia). |



### User Story US02 - Manter Cliente
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro dos clientes a partir da inserção, alteração, exclusão e consulta dos seus dados ao sistema. Um cliente tem os atributos nome, data de nascimento, número de telefone, email que vira nas informações da sua conta Google. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF06          | Cadastra Cliente | 
| RF07          | Consultar Cliente | 
| RF08          | Desativar Cliente | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 7h |
| **Tempo Gasto (real):**   |        | 
| **Tamanho Funcional** | 9 PF (pontos de função) |
| **Analista**| Felippe Silva (responsável por especificar/detalhar). |
| **Desenvolvedor** | José Gabriel (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Davi Natan (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Gedson Fernandes (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA02.01** | O gerente informa, na tela Manter Cliente, todos os dados para registrar corretamente o cliente, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso. |
| **TA02.02** | O  usuário não concede permissão ao acesso da conta Google e retornara a tela inicial. |
| **TA02.03** | O usuário concede permissão e tem sua conta criada com sucesso. |
| **TA02.04** | O gerente tenta pesquisar um cliente e tem sucesso, a pesquisa é retornada. |
| **TA02.05** | O gerente tenta pesquisar um cliente e não há retorno (exibição vazia). |



### User Story US03 - Manter Horário
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve ser capaz de manter o horário cadastrado pelo usuário para que ele possa ter controle da sua agenda. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF19          | Cadastrar Horário | 
|RF10           | Alterar Horário | 
|RF11           | Excluir Horário | 
|RF12           | Listar Horários | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** |  Essencial |
| **Estimativa** | 5h | 
| **Tempo Gasto (real):**   |              | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
| **Analista**| Felippe Silva (responsável por especificar/detalhar). |
| **Desenvolvedor** | José Gabriel (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Davi Natan (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Gedson Fernandes (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA03.01** | O cliente vai receber os horário disponíveis e vai escolher oque mais se adequa para a rotina dele. |
| **TA03.02** | O cliente escolhe um horário livre e sua vaga e reservada com sucesso. |
| **TA03.03** | O cliente tenta cadastrar um horário porém não está mais disponível. |
| **TA03.04** | O cliente tenta excluir seu horário cadastrado e tem sucesso. |
| **TA03.05** | O cliente tenta listar seus horários e tem sucesso. |
| **TA03.06** | O Cliente tenta listar seus horários e não tem sucesso. |


### User Story US04 - Validar Datas
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve ser capaz de saber quando um dia está disponível para o cliente cadastrar seu horário e também deve saber quando não está disponível. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF13           | Validar Data |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Importante |
| **Estimativa** | 3h | 
| **Tempo Gasto (real):**   |                | 
| **Tamanho Funcional** | 8 PF (pontos de função) |
| **Analista**| José Gabriel (responsável por especificar/detalhar). |
| **Desenvolvedor** | Davi Natan (responsáveis por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Gedson Fernandes (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Felippe Silva (responsável por executar os Testes de Aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA04.01** | O sistema devera ser capaz de validar os horários de sua agenda para o seu atendimento. |

