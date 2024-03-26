# Diagrama de Classes (UML)

```mermaid

    classDiagram
    class Servidor
    Servidor : +String email
    Servidor : -String senha
    Servidor : -CadSer(username, emial, senha)[servidor]
    Servidor : +VisAge()[LisAge]
    Servidor : +MarDat()[CadDat]
    Servidor : -DesMarDat()[ExcAge]

    class Agendamento
    Agendamento : -IdAge
    Agendamento : +Date data
    Agendamento : +Usuario usuario
    Agendamento : +Servidor servidor
    Agendamento : +String descricao
    Agendamento : -Boolean ativo
    Agendamento : +CadDat(data)[Array]
    Agendamento : +CadAge(ID, data, servidor, usuario, descricao, ativo)[agendamento]
    Agendamento : +LisAge(agendamento)[Array]
    Agendamento : +LisDat(agendamento.data)[Array]
    Agendamento : +ExcAge(agendamento)[data]
    Agendamento : +ExcCad(ID)[0]
    Agendamento : +ValDat(data, Array)[Boolean]

    class Usuario
    Usuario : -BigInt idUse
    Usuario : -String username
    Usuario : -String nome
    Usuario : +setUsername(+String)[]
    Usuario : +setNome(+String)[]
    Usuario : +getUsername()[username]
    Usuario : +getNome()[nome]
    Usuario : -CadUse(username, nome)[usuario]
    Usuario : -RelCad()[CadAge]
    Usuario : -CanCad()[ExcCad]

    Usuario <|-- Servidor
    Servidor "1" <--> "n" Agendamento
    Usuario "1" <--> "1" Agendamento

```

# Dicionário de Dados

## Tabela Usuário

|Campo|Tipo de Dados|Descrição|Restrições|Exemplos|
|-|-|-|-|-|
|idUse|INT|Identificador unico para cada usuário|Chave primaria não nula|54|
|username|VARCHAR(100)|Nome de usuário do usuário|Único, Não nulo|geeg25|
|nome|VARCHAR(100)|Nome completo do usuário|Não nulo|Gedson Fernandes|

### Metadados

Nível de acesso: Dados sensíveis, acesso restrito a gestores de conta e equipe de suporte.

### Descrição 

A tabela 'Usuário' é ultilizada para manter informações dos usuários do sistemas. Ela serve para as operações de suporte. Cada registro na tabela representa um usuário único.

### Utilização

**Suporte**: Para acesssar rapidamente as infromações do cliente durante as interações de suporte, melhorando a experiência do usuário.

## Tabela Servidor



### Metadados



### Descrição



### Ultilização