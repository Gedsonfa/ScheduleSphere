# 

<h1 align="center">ScheduleSphere</h1>

## ✏️ Contexto
Repositorio destinado para projeto da matéria DCT2302 -  ENGENHARIA DE SOFTWARE II 

## :memo: Descrição
O ScheduleSphere tem como objetivo ser um sistema de agendamento de horários inteligente. O projeto registra horários para que outras pessoas possam reservar reuniões, além de permitir registros em agendas de terceiros. A aplicação tem camadas majoritariamente composta por front-end, com back-end implementado no mesmo arquivo e banco de dados SQL. 

## :books: Funcionalidades
* <b>Funcionalidade 1</b>: O ScheduleSphere é basicamente um calendário de agendamentos conectado ao Google Calendar do usuário.
* <b>Funcionalidade 2</b>: O usuário pode criar uma conta e alterar suas informações sempre que logar na aplicação.
* <b>Funcionalidade 3</b>: O usuário pode disponibilizar seus dias disponíveis para agendamentos em uma rota 'schedule'. 
* <b>Funcionalidade 4</b>: O cliente pode reservar um horário com o usuário informando seu nome, email e uma observação opcional. 
* <b>Funcionalidade 5</b>: A aplicação salva todos os dados da reserva em um banco de dados SQL usando prisma/docker.
* <b>Funcionalidade 6</b>: A aplicação registra o agendamento solicitado pelo cliente no Google Calendar do usuário, com uma chamada google meet já pré-configurada.  


## :wrench: Tecnologias utilizadas
* Node.js
* Typescript
* React
* NextJS
* Prisma
* Docker
* Axios
* Google APIs
* Date-fns
* Zod

## :rocket: Rodando o projeto
## Passo 1

Clonagem do repositório usando:

```bash
  git clone https://github.com/Gedsonfa/ScheduleSphere.git
```

## Passo 2

Em seguida, acesse o repósitorio na sua IDE usando:

```bash
  cd ScheduleSphere
```

## Passo 3

Antes de rodar o projeto, instale suas dependências usando:

```bash
  npm install
```

## Passo 4

Você precisa rodar o Prisma para fazer a ponte entre a aplicação e o banco de dados, utilizando o comando:

```bash
  npx prisma studio
```

## Passo 5

Quase lá, com o Docker já instalado e rodando, agora você precisa criar o contêiner com as images do banco de dados. É um comando complexo mas é uma tacada só:

```bash
  docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest
```

## Passo 6

Tudo pronto, agora basta rodar o projeto utilizando:

```bash
  npm run dev
```

# Tutoriais

|Nome|Descrição|Link|
|-|-|-|
|Javascript|Curso em Vídeo - JavaScript |[Clique aqui](https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm)|
|Typescript|Aprenda Typescript em 1 hora |[Clique aqui](https://youtu.be/lCemyQeSCV8?si=MeSbt6J67iUgqMYd)|
|React|Curso básico ao avançado |[Clique aqui](https://youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&si=u3-rcV1MJzAekXI7)|
|Next.js|Curso de Next.js |[Clique aqui](https://www.youtube.com/watch?v=XHrbg2iYNCg&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft)|
|Prisma|Learn Prisma In 60 Minutes|[Clique aqui](https://www.youtube.com/watch?v=RebA5J-rlwg&pp=ugMICgJwdBABGAHKBQ90dXRvcmlhbCBwcmlzbWE%3D)|
|Docker|Introdução ao Docker para iniciantes |[Clique aqui](https://www.youtube.com/watch?v=01MR38eDXz8&pp=ygUPdHV0b3JpYWwgZG9ja2Vy)|

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/Igwbriel">
        <img src="https://avatars.githubusercontent.com/u/101999960?v=4" width="100px;" alt="Foto Gabriel Dias no GitHub"/><br>
        <sub>
          <b>Gabriel Dias</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/Gedsonfa">
        <img src="https://avatars.githubusercontent.com/u/106558706?v=4" width="100px;" alt="Foto Gedson Fernandes no GitHub"/><br>
        <sub>
          <b>Gedson Fernandes</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/DaviNatan10">
        <img src="https://avatars.githubusercontent.com/u/112419442?v=4" width="100px;" alt="Foto Davi Natan no GitHub"/><br>
        <sub>
          <b>Davi Natan</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/uFelippeSilva">
        <img src="https://avatars.githubusercontent.com/u/112040769?v=4" width="100px;" alt="Foto Felippe silva no GitHub"/><br>
        <sub>
          <b>Felippe Silva</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

