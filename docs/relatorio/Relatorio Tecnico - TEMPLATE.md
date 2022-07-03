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

O Mentor tem o intuito de ajudar os vestibulandos a se prepararem melhor para o seu exame. Os instruindo sobre como organizar os estudos e o que estudar. 

## Justificativa

A motivação vem do fato de que a maioria dos vestibulandos não receberam um ensino de qualidade e não podem arcar com um curso preparatório. O que os fazem estudar por conta própria, mesmo sem saber o que estudar ou como organizar os estudos.  E aí o Mentor entra em ação.  

## Público-Alvo

O público-alvo é composto em sua maioria por mulheres (~ 55%), ensino médio completo e com idade média de 24. 
 
# Especificações do Projeto

## Personas e Mapas de Empatia

Carolina: Tem 20 anos, é desempregada. Sua família a possibilitou estudar em tempo integral, mas não possuem dinheiro o suficiente para pagar por um curso preparatório. Deseja fazer direito e gostaria de ter acesso facilitado a novas técnicas de estudo. Além disso, gostaria de ter um direcionamento maior sobre quais são as principais matérias que deve estudar.
 

Túlio: Tem 17 anos e é estudante do 3º ano do ensino médio. Está preocupado com a alta competitividade do processo seletivo da faculdade que deseja e quer otimizar os seus estudos. Gosta de praticar atividades físicas e deseja ser fisioterapeuta. As vezes acaba precisando estudar as matérias mais de uma vez já que não consegue fixar o conteúdo. Também deseja encontrar uma maneira de orgazinar sua rotina estudantil.
 

Jéssica: Tem 30 anos, é cozinheira. Largou os estudos devido a gravidez precoce, mas agora deseja retomar. Ela precisa dividir seu tempo com o trabalho e seu filho, por isso, não sobra muito tempo para estudar. Deseja saber em quais conteúdos mais aparecem em sua prova, para que não perca tempo. Também gostaria de um ensino efetivo e de fácil acessibilidade.

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
| Túlio              | Organizador de estudos             | Organização                            |
| Jéssica            | Saber em que matérias focar        | Não perder tempo                       |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir cadastrar matérias que vai estudar  | ALTA | 
|RF-002| Mostrar índice de matérias que caíram no Enem | ALTA |
|RF-003| Mostrar técnicas de estudo                   | ALTA |
|RF-004| Dicas de estudo                              | ALTA |
|RF-005| Pomodoro                                     | BAIXA |
|RF-006| Fórum de discussões                          | MÉDIA |
|RF-007| Mostrar onde estudar cada matéria            | ALTA  |
|RF-008| Notificações                                 | BAIXA |


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
![userflow](https://user-images.githubusercontent.com/81258205/177050617-fdf83b2e-6e50-4efe-9ccf-308c7497d1b0.png)

## Wireframes

**Alguns wireframes não correspondem a interface final**

## Home
![home](https://user-images.githubusercontent.com/81258205/177049391-6ad90399-c27e-4462-9f1f-b82ab6b4fd87.jpg)

## Login
![login](https://user-images.githubusercontent.com/81258205/177049401-9790c367-080c-4a23-be3b-a6392500342a.jpg)

## Registro
![Registro](https://user-images.githubusercontent.com/81258205/177049411-c69a6b5b-9406-408f-ab22-d00515c6739b.jpg)

## Matérias
![materias](https://user-images.githubusercontent.com/81258205/177049751-154ae02a-4651-4861-9245-83df7bbe708a.jpg)

## Dica
![dica](https://user-images.githubusercontent.com/81258205/177049443-2eb45ef9-e1ae-431d-aa01-60848fd9fc4e.jpg)

## *Planner / To-Do list*
![planner](https://user-images.githubusercontent.com/81258205/177049468-a53c1297-3855-4543-a3bb-8b06c757bc02.jpg)

## Perfil de Usuário
![perfil](https://user-images.githubusercontent.com/81258205/177049755-51763953-0b24-42a4-88a9-dd3537b9f81d.jpg)

# Metodologia

O método "Design Thinking" foi utilizado na fase de concepção do projeto. Já na fase de desenvolvimento, a forma de gerenciar o projeto escolhida pelo grupo foi o Scrum.

## Divisão de Papéis

|        Integrante       | Função |
|-------------------------|--------|
| André Mendes Rodrigues | Desenvolvedor |
| Lucas de Oliveira Lopes | Desenvolvedor e Scrum Master |
| Nilson Deon Cordeiro Filho | Desenvolvedor e Product Owner  |


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVOB64Fm0=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20221-desigualdade-na-qualidade-de-ensino | 
|Protótipo Interativo | Figma | https://www.figma.com/proto/gIb8NlXcR2rITmC3edGozM/Wireframe?node-id=5%3A6&starting-point-node-id=2%3A2 |
|User Flow | Visual Paradigm | https://online.visual-paradigm.com/pt/diagrams/features/website-user-flow-tool/|

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

# Projeto da Solução

Para a criação do site, nós pensamos em um site que ajudaria o usuário a ingressar na faculdade.
A aplicação ajuda o consumidor por meio de:

* Dicas de técnicas e ferramentas para melhorar a produtividade dos estudos;
* Gráficos mostrando tópicos recorrentes nas provas;
* *Planner/To-Do list* para organização.

## Tecnologias Utilizadas

- HTML, CSS e JavaScript: Foram utilizados para a construção de todo o site;
- Guthub: Foi utilizado para controle de versão e hospedagem do site;
- Visual Studio Code: Utilizado para a programação do site;
- Figma: Foi utilizado para a criação das wireframes e protótipo;
- Visual Paradigm: Utilizado para fazer o user flow;
- *LocalStorage*: Foi utilizado para armazenar dados do usuário.

**Alguns wireframes não correspondem a interface final**

![userflow](https://user-images.githubusercontent.com/81258205/177050574-77959c43-d56d-418a-8921-063f5db9ec8f.png)
* Userflow: Movimentação do usuário pelo site.

![home](https://user-images.githubusercontent.com/81258205/177048595-3f9f6432-7099-4bc0-9799-7173a73fc310.jpg)
* Wireframe da Home: Página principal principal do site, a partir dela é possivel acessar todas as outras.

![login](https://user-images.githubusercontent.com/81258205/177048806-140799a5-f9a8-4191-8a67-ff5fbf5b6eee.jpg)
* Wireframe da página de login: Página onde o usuário pode acessar a sua conta ou criar um noma.

![Registro](https://user-images.githubusercontent.com/81258205/177048862-308e2916-ea22-4b4c-aa68-8d7258901592.jpg)
* Wireframe da página de registro: Página onde é possível criar uma nova conta (nome, e-mail e senha são obrigatórios).

![dica](https://user-images.githubusercontent.com/81258205/177048909-a2968762-e01d-49c9-9b10-0ff9803e04d8.jpg)
* Wireframe da página de dica: Página que passa informações da dica escolhida na home.

![planner](https://user-images.githubusercontent.com/81258205/177048978-74696754-7fef-404d-9163-eb2db7a023ec.jpg)
* Wireframe da página de *planner/to-do list*: Página onde o usuário pode inserir, marcar como feita e excluir taréfas a serem feitas.

![materias](https://user-images.githubusercontent.com/81258205/177049782-8fc3c0bb-5f09-4818-bfb6-3e8300d05a1e.jpg)
* Wireframe da página de matérias: Página onde podem ser vistas informações das matérias como tópicos recorrentes e onde estudá-la.

![perfil](https://user-images.githubusercontent.com/81258205/177049788-5b2014ef-3285-410f-9ae9-2c16b26393b9.jpg)
* Wireframe da página de perfil do usuário: Página onde o usuário pode colocar uma foto e modificar informações sobre ele.

## Arquitetura da solução

* Diagrama de funcionamento da aplicação.
> Sem utilização de backend.

![nsei](https://user-images.githubusercontent.com/81258205/177050939-4a1f7512-fd90-4abc-9749-93b28ba2f187.png)

Foi utilizado JavaScript para a dinâmicidade da página, juntamente do HTML e CSS, e o *local storage* para o armazenamento de dados do usuário e de algumas partes do site, como as dicas. Além disso, o site foi hospedado de forma gratuita utilizando o GitHub Pages.


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
https://developer.mozilla.org/en-US/
https://www.alura.com.br/artigos/css-animacoes-com-transitions-animations
https://www.delftstack.com/pt/howto/javascript/javascript-append-html/
https://blog.letscode.com.br/como-hospedar-seu-site-pelo-github-pages/
https://warcontent.com/localstorage-javascript/
