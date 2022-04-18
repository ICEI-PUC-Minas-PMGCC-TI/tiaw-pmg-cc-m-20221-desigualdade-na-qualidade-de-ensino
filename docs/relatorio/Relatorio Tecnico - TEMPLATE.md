# Informações do Projeto
`TÍTULO DO PROJETO`  

Desigualdade na Qualiadade de Ensino

`CURSO` 

Ciências da Computação

## Participantes
Os membros do grupo são:

- André Mendes Rodrigues
- Lucas de Oliveira Lopes
- Nilson Deon Cordeiro Filho
- Theo Alvarenga Torres Dias

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema
Uma das características que mais chamam a atenção nas universidades brasileiras é o perfil dos alunos que as frequentam, já que a maioria desses estudantes são abastados. Nesse sentido, a baixa de estudantes menos favorecidos é devido à dificuldade das provas e vestibulares de acesso a tais instituições, nos quais são aprovados aqueles que obtiveram melhor preparação nos ensinos fundamental e médio, ou seja, quem teve condição de arcar com uma educação privada, já que a educação de qualidade, normalmente, não é oferecida pelo estado. Portanto, qualquer ajuda nos estudos é benéfica para pessoas de baixa renda. 

## Objetivos

O site (nome ainda não decidido) tem o intuito de ajudar os vestibulandos a se prepararem melhor para o seu exame. Os instruindo sobre como organizar os estudos e o que estudar. 

## Justificativa

A motivação vem do fato de que a maioria dos vestibulandos não receberam um ensino de qualidade e não podem arcar com um curso preparatório. O que os fazem estudar por conta própria, mesmo sem saber o que estudar ou como organizar os estudos.  E aí o site (nome ainda não decidido) entra em ação.  

## Público-Alvo

O público-alvo é composto em sua maioria por mulheres (~ 55%), ensino médio completo e com idade média de 24. 
 
# Especificações do Projeto

## Personas e Mapas de Empatia

Carolina: Tem 21 anos, é desempregada. Sua família a possibilitou estudar em temo integral, mas não possuem dinheiro o suficiente para pagar por um curso preparatório. Gostaria de ter acesso mais fácil a técnicas de estudo. Além disso, gostaria de saber quais matérias devo estudar. 

 

Túlio: Tem 17 anos e é estudante do 3º ano do ensino médio. Está preocupado com a alta competitividade do processo seletivo da faculdade que deseja e quer otimizar os seus estudos. As vezes acaba precisando estudar as matérias mais de uma vez já que não consegue fixar o conteúdo. 

 

Jéssica: Tem 30 anos, é cozinheira. Largou os estudos devido a gravidez precoce, mas agora deseja retomar. Ela precisa dividir seu tempo com o trabalho e seu filho, por isso, não sobra muito tempo para estudar. Deseja saber em quais conteúdos mais aparecem em sua prova, para que não perca tempo. Também gostaria de um local para manter organizado o que falta ser estudado e já foi. 

![mapa1](https://user-images.githubusercontent.com/81258205/163737998-8462e07f-db10-4479-9905-3dfa40b36f98.png)

![mapa2](https://user-images.githubusercontent.com/81258205/163737999-37a2e9f2-3a8d-4b57-9126-ebda800fd700.png)

![mapa3](https://user-images.githubusercontent.com/81258205/163738001-d461820a-690b-4650-949e-dc40d3c5d2c8.png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Carolina           | Acesso a técnicas de estudo        | Melhorar os estudos                    |
| Carolina           | Saber em que matérias focar        | Não estudar o que não precisa/ não perder tempo |
| Túlio              | Acesso a técnicas de estudo        | Melhorar fixação das matérias          |
| Jéssica            | Saber em que matérias focar        | Não perder tempo                       |
| Jéssica            | Organizador de estudos             | Organização                       |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir cadastrar matérias que vai estudar  | ALTA | 
|RF-002| Mostrar índice de matérias que caíram no Enem | ALTA |
|RF-003| Mostrar técnicas de estudo                   | ALTA |
|RF-004| Mostrar aplicativos de que ajudam no estudo  | MÉDIA |
|RF-005| Pomodoro                                     | BAIXA |
|RF-006| Fórum de discussões                          | MÉDIA |
|RF-007| Mostrar onde estudar cada matéria            | ALTA  |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|--------------------------------|----|
|RNF-001| Sistema responsivo para funcionar em computador e celular  | ALTA | 
|RNF-002| Interface simples de entender  | ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|R-001| O projeto deverá ser entregue até o final do semestre |
|R-002| Não pode ser desenvolvido um módulo de backend        |

# Projeto de Interface

O principal ponto da interface é ser de simples utilização e ser responsivo, para que possar ser usado tanto em celulares quanto computadores.


## User Flow
![Userflow](https://user-images.githubusercontent.com/81258205/163721031-f6c6be59-3db7-4717-95b0-9fc2faf5657f.png)

## Wireframes

## Home
![Home](https://user-images.githubusercontent.com/81258205/163720898-c1eade93-8b63-418a-b2f9-aa3e14ff7264.png)

## Login
![login](https://user-images.githubusercontent.com/81258205/163720911-eb3c5388-0d7e-44f3-81ec-d889b94ea18f.png)

## Registro
![Registro](https://user-images.githubusercontent.com/81258205/163721082-de438109-784d-4606-88ba-143c7a66c7d5.png)

## Dashboard
![Dashboard](https://user-images.githubusercontent.com/81258205/163720939-7e697ee2-f44f-4440-a812-9274feab5a73.png)

## Matérias
![Materias](https://user-images.githubusercontent.com/81258205/163720959-7a7a5566-64f9-4df4-b596-2a147942c309.png)

## Conteúdos
![Conteudos](https://user-images.githubusercontent.com/81258205/163720970-64e8082d-9073-446b-8fde-9c805e34b517.png)

## Dicas
![Dicas](https://user-images.githubusercontent.com/81258205/163720979-693fd9fc-1944-4d72-b201-108c21374a9c.png)

## Dica
![Dica](https://user-images.githubusercontent.com/81258205/163720990-6eadf56d-aff0-4469-9daf-b8a2df3d9df4.png)


# Metodologia

O método "Design Thinking" foi utilizado na fase de concepção do projeto. Já na fase de desenvolvimento, a forma de gerenciar o projeto escolhida pelo grupo foi o Scrum.

## Divisão de Papéis

|        Integrante       | Função |
|-------------------------|--------|
| André Mendes Rodrigues | Desenvolvedor |
| Lucas de Oliveira Lopes | Desenvolvedor e Scrum Master |
| Nilson Deon Cordeiro Filho | Desenvolvedor e Product Owner  |
| Theo Alvarenga Torres Dias | Desenvolvedor |

## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVOB64Fm0=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20221-desigualdade-na-qualidade-de-ensino | 
|Protótipo Interativo | Figma | https://www.figma.com/proto/gIb8NlXcR2rITmC3edGozM/Wireframe?node-id=5%3A6&starting-point-node-id=2%3A2 |

> As ferramentas empregadas no projeto são:
> 
> - Discord 
> - WhatsApp
> - Figma
> - Github
> - Word 
> - PowerPoint
> - Miro
> 
> O Discord e WhatsApp foram utilizados devido a facilidade de acesso e essas ferramentas já eram utilizadas pelos integrantes do grupo, elas foram usadas para que os integrantes mantivessem contato e para o monitoramento do trabalho atribuído a cada um. O Figma também foi escolhido devido a familiaridade de um integrante do grupo, ele foi utilizado para a produção do wireframe, userflow e do protótipo interativo.

## Controle de Versão
>A ferramenta de controle de versão adotada no projeto foi o Git, sendo que o Github foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
