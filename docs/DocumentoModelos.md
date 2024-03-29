# Diagrama de Classes (UML)

```mermaid

    classDiagram
    class Servidor
    Servidor : -String email
    Servidor : -String senha
    Servidor : +cadSer(username, emial, senha)servidor
    Servidor : +visAge()lisAge
    Servidor : +marDat()cadDat
    Servidor : +desMarDat()excAge

    class Agendamento
    Agendamento : -BigInt idAge
    Agendamento : -Date data
    Agendamento : -Usuario usuario
    Agendamento : -Servidor servidor
    Agendamento : -String descricao
    Agendamento : -Boolean ativo
    Agendamento : -gerIdAge(idAde)idAge
    Agendamento : +getId()idAge
    Agendamento : +cadDat(data)Array
    Agendamento : +cadAge(data, servidor, usuario, descricao, ativo)agendamento
    Agendamento : +lisAge(agendamento)Array
    Agendamento : +lisDat(agendamento.data)Array
    Agendamento : +excAge(agendamento)data
    Agendamento : +excCad(idAge)
    Agendamento : +valDat(data, Array)Boolean

    class Usuario
    Usuario : -BigInt idUse
    Usuario : -String username
    Usuario : -String nome
    Usuario : -setIdUse(idUse)idUse
    Usuario : +setUsername(+String)
    Usuario : +setNome(+String)
    Usuario : +getUsername()username
    Usuario : +getNome()nome
    Usuario : +getId()idUse
    Usuario : +cadUse(idUse, username, nome)usuario
    Usuario : +lisUse(idUse)usuario
    Usuario : +excUse(idUse)
    Usuario : +relAge()cadAge
    Usuario : +canAge()excCad

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

### Métodos

getUsername()

getNome()

getId()

* cadUse(): Cadastra o usuário.

* lisUse(): Exibe um usuário, de acordo com o idUse solicitado.

* excUse(): Deleta usuário.

* relAge(): Realizar agendamento, chamando a função de cadastrar agendamento.

* cadAge(): Cancelar agendamento, chamando a função de exluir agendamento.

### Metadados

Nível de acesso: Dados sensíveis, acesso restrito a gestores de conta e equipe de suporte.

### Descrição 

A tabela 'Usuário' é ultilizada para manter informações dos usuários do sistemas. Ela serve para as operações de suporte. Cada registro na tabela representa um usuário único.

### Utilização

**Suporte**: Para acesssar rapidamente as infromações do cliente durante as interações de suporte, melhorando a experiência do usuário.

## Tabela Servidor

|Campo|Tipo de Dados|Descrição|Restrições|Exemplos|
|-|-|-|-|-|
|email|VARCHAR(100)|Endereço de e-mail para usuário|Único, Não nulo|ged@gmail.com|
|senha|VARCHAR(100)|Senha para o usuário|Não nulo|12345678|

### Metadados

Nível de acesso: Dados sensíveis, acesso restrito a gestores de conta e equipe de suporte.

### Descrição 

A tabela 'Usuário' é ultilizada para manter informações dos usuários do sistemas. Ela serve para as operações de suporte. Cada registro na tabela representa um usuário único.

### Utilização

**Suporte**: Para acesssar rapidamente as infromações do cliente durante as interações de suporte, melhorando a experiência do usuário.

## Tabela Agendamento

|Campo|Tipo de Dados|Descrição|Restrições|Exemplos|
|-|-|-|-|-|
|idAge|INT||||
|data|VARCHAR(12)||||
|usuario|USUARIO||||
|seridor|SERVIDOR||||
|descricao|VARCHAR(120)||||
|ativo|BOOLEAN||||