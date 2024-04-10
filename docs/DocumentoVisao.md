# Requisitos funcionais 
# Documento de Visão

Documento construído a partir do **Documento de Visao** que pode ser encontrado no link: https://docs.google.com/document/d/1KIQy14inIqcfcoBIEikXlnksvtnJw7yplUlvLV9PtQk/edit

## Equipe e Definição de Papéis


Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Davi Natan  | Cliente | davi.oliveira.137@ufrn.edu.br |
Felippe Silva  | Desenvolvedor | felippe.silva.142@ufrn.edu.br |
Gedson Fernandes  |  Desenvolvedor | gedson.araujo.143@ufrn.edu.br|
José Gabriel  | Gerente | gabriel.dias.150@ufrn.edu.br|



### Matriz de Competências

Membro     | Competências |
---------  | ----------- |
Davi Natan |Desenvolvedor  Web , JavaScript, HTML, CSS, Next.js, React |
Felippe Silva | Desenvolvedor Python, JavaScript, HTML, CSS, Next.js, Node.js, React |
Gedson Fernandes| Desenvolvedor Python, JavaScript, HTML, CSS, Next.js, Node.js, React |
José Gabriel| Desenvolvedor Python, JavaScript, HTML, CSS, Next, Node.js, React, Typescript,Docker,Prisma |


## Perfis dos Usuários

Perfil                                 | Descrição   |
---------                              | ----------- |
Dono do Software| O Dono do Software é o responsável por distruibir o link, para que os seus Cliente consigam entrar e verificar a disponibilidade de horário para que os seus Pacientes(Clientes) consigam cadastrar uma consulta no horário que esteja disponivel de acordo com seu dia-a-dia e de melhor agrado.
Cliente | Este usuário é a pessoa que deseja marcar uma consulta / atendimento com o Dono do software, ele irá se cadastrar via conta do Google. e através disso terá acesso a disponibilidade de horarios, e conseguirár marcar o horario desejado para o atendimento a consulta, caso não tenha sido registrado por nenhum outro Cliente.

## Lista de Requisitos Funcionais

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |
RF01 - Cadastrar usuário | Permite o cadastro do usuário no sistema.  |  gerente |
RF02 - Cadastrar Agendamento  | O usuário conseguirá cadastrar seus horaríos de atendimento |  gerente |
RF03 - Alterar Agendamento | O usuário poderá alterar o horário de atendimento caso ocorra algum imprevisto. |  gerente |
RF04 - Excluir Agendamento | O usuário poderá exlcuir o horário de atendimento caso ocorra algum imprevisto. |  gerente |
RF05 - Consultar Agendamento |O usuário  poderá consultar horário marcados no dia solicitado.  |  gerente |
RF06 - Cadastrar Cliente | Permitir a edição dos dados do cliente no sistema. | cliente e gerente |
RF07 - Consultar Cliente | Permitir a pesquisa do cliente no sistema. | cliente e gerente |
RF08 - Desativar Cliente | Permitir a desativação do cliente no sistema. | cliente e gerente |
RF09 - Cadastrar  Horário  | O cliente cadastrará o horário que lhe agradar, desde que esteja disponivel.  | Cliente e gerente  |
RF10 - Alterar Horário  | O cliente conseguirá alterar o horário cadastrado,caso deseje e esteja dispónivel o novo horário | Cliente e gerente  |
RF11 - Excluir Horário  | O cliente conseguirá cancelar o Horário já cadastrado pelo propío | Cliente e Gerente |
RF12 - Listar Horário  | O gerente conseguirá ver os Horários ocupados pelos Cliente em determinada Data |  gerente  |
RF13 - Validar Data | Verifica se os Horários cadastrado no Agendamento estão disponíveis | gerente |


## Lista de Requisitos Não Funcionais


Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF01 - Estrutura Web | O sistema só funcionará caso haja conexão com a internet, pois será desenvolvido para ter acesso de diversos locais.  |
RNF02 - Google Conta | O cliente deve ter uma conta google. |
RNF03 - Permissão da Conta Google | O sistema só funcionará caso o cliente conceda permissão para o Google Datas. |


## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

Data | Risco | Prioridade | Responsável | Status | Providência/Solução |
------ | ------ | ------ | ------ | ------ | ------ |
27/11/2023 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta | Gerente | Vigente | Reforçar estudos sobre as ferramentas e aulas com o integrante que conhece a ferramenta |
27/11/2023 | Divisão de tarefas mal sucedida | Baixa | Gerente | Resolvido | Acompanhar de perto o desenvolvimento de cada membro da equipe |
| 29/11/2023 | Implementação de protótipo com as tecnologias | Alto | Todos | Vigente | Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema. |
| 29/11/2023 | Não cumprimento dos prazos pré-estabelecidos | Médio | Todos | Vigente | Procurar estabelecer metas semanais e bem distribuídas entre os membros da equipe. Tal atividade sendo monitorada por alguma ferramenta como Trello/Notion |
| 30/11/2023 | Mudanças frequentes nos requisitos | Médio | Desenvolvedores | Vigente | Ser conversado com antecedência com as partes envolvidas para o pleno entendimento das necessidades do sistema em questão.  |




