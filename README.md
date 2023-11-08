# Boas-vindas ao repositório do projeto Solar System!


<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  Neste projeto foi desenvolvido um modelo do sistema solar! Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:

    * Visualizar todos os planetas do sistema solar renderizados na tela;

    * Visualizar todas as cartas com informações sobre missões espaciais;
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, foi posto em prática a habilidade de:

  * Utilizar JSX no React;

  * Utilizar corretamente o método `render()` para renderizar seus componentes;

  * Utilizar `import` para trazer componentes em diferentes arquivos;

  * Criar componentes de classe em React;

  * Criar múltiplos componentes a partir de um array;

  * Fazer uso de `props` corretamente;

  * Fazer uso de `PropTypes` para validar as `props de um componente`.
</details>

# Orientações

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Foi utilizado o [ESLint](https://eslint.org/) e o [StyleLint](https://stylelint.io/) para fazer a análise estática do código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `package.json`.

  Para poder rodar o _linter_ em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint` para executar o `ESLint`, ou `npm run lint:styles` para executar o `StyleLint`. Se a análise do _linter_ encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Foi utilizado [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes.

  ### Executando todos os testes

  Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

  Na descrição dos requisitos do projeto foi pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Veja o exemplo abaixo para deixar mais nítido como usar esse requisito:

  Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

  ```html
  <button data-testid="my-action"></button>
  ```

  ou

  ```html
  <a data-testid="my-action"></a>
  ```

  Ou seja, o atributo `data-testid="my-action"` servirá para o _React Testing Library_(RTL) identificar o elemento. Dessa forma, conseguiremos realizar testes focados no comportamento da aplicação.

  Em alguns requisitos, foi utilizado o `getByRole` para poder selecionar os elementos de forma semântica. Por exemplo, se o requisito pedir explicitamente um `button`, você deveria ser utilizado exatamente esse elemento.
  
  ### Executando um teste específico

  Você também pode rodar apenas um arquivo de teste, por exemplo:

  ```bash
  npm test 03.Title.test.js
  ```

  ou

  ```bash
  npm test 03.Title
  ```
</details>

<details>
  <summary><strong>:convenience_store: Desenvolvimento </strong></summary><br />

  Foi desenvolvido uma aplicação em React com criação de componentes de classe e passagem de props. Essa aplicação simulará uma visualização do Sistema Solar, bem como informações sobre diversas missões espacias que ocorreram ao longo da história.

  As imagens dos planetas e as informações das missões foram fornecidas no projeto. Foi preciso desenvolver os componentes necessários para exibi-las na tela, conforme o descrito nos requisitos.
</details>

# Requisitos

## 1. Crie um componente chamado `Header`

<details>
  <summary>Crie um componente chamado <code>Header</code> dentro da pasta <code>src/components</code>. Este componente irá renderizar o título principal da página.</summary>

  - Ele deve conter uma tag `header` e, dentro dela, uma tag `h1`. O texto da tag `h1` deve ser "Sistema Solar";
    
  - Renderize o componente `Header` dentro do componente principal `App`.

  ![Screenshot](public/examples/req1.png)
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o componente `<Header />` é renderizado;

  * Será validado se o componente `<Header />` contém uma tag `header`;

  * Será validado se o componente `<Header />` contém uma tag `h1`;

  * Será validado se o componente `<Header />` renderiza corretamente o texto "Sistema Solar";

  * Será validado se o componente `<Header />` está sendo renderizado no componente principal `App`.
</details>

---

## 2. Crie um componente chamado `SolarSystem`

<details>
  <summary>Crie um componente chamado <code>SolarSystem</code> dentro da pasta <code>src/components</code>.</summary>

  - O componente `SolarSystem` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="solar-system"`;

  - Renderize o componente `SolarSystem` abaixo do `Header`, dentro do componente principal `App`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o componente `<SolarSystem />` é renderizado;

  * Será validado se existe uma `div` que possui o `data-testid="solar-system"`;

  * Será validado se o componente `<SolarSystem />` está sendo renderizado no componente principal `App`.
</details>

---

## 3. Crie um componente chamado `Title`

<details>
  <summary>Crie um componente chamado <code>Title</code> dentro da pasta <code>src/components</code>.</summary>

  - O componente `Title` deve receber uma prop `headline`;
    
  - Ele deve conter uma tag `h2`, que deve renderizar o texto recebido pela prop `headline`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o componente `<Title />` é renderizado;

  * Será validado se o componente `<Title />` contém uma tag `h2`;

  * Será validado se o componente `<Title />` renderiza o texto passado pela prop `headline` dentro de uma tag `h2`.
</details>

---

## 4. Renderize o componente `Title` dentro do componente `SolarSystem`

<details>
  <summary>Renderize o componente <code>Title</code> dentro do componente <code>SolarSystem</code>.</summary>

  - O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Planetas".

  ![Screenshot](public/examples/req4.png)
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o texto "Planetas" é renderizado usando o componente `Title` dentro do componente `SolarSystem`.
</details>

---

## 5. Crie um componente chamado `PlanetCard`
<details>
  <summary>Crie um componente chamado <code>PlanetCard</code> dentro da pasta <code>src/components</code>.</summary>

  - O componente `PlanetCard` deve receber duas props: uma chamada `planetName` e outra chamada `planetImage`;
    
  - O componente `PlanetCard` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="planet-card"`;
    
  - O componente `PlanetCard` deve renderizar o texto recebido pela prop `planetName`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="planet-name"`;
    
  - O componente `PlanetCard` deve renderizar uma imagem que tenha o atributo `src` com o valor recebido pela prop `planetImage`;

  - Além do atributo `src`, a imagem renderizada deve ter o atributo `alt` com o texto `Planeta {planetName}`, onde `{planetName}` é o valor recebido pela prop `planetName`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o componente `<PlanetCard />` é renderizado;

  * Será validado se o componente `<PlanetCard />` possui uma div com o atributo `data-testid="planet-card"`;

  * Será validado se é renderizado o texto recebido pela prop `planetName`;

  * Será validado se é renderizada uma imagem com o atributo `src` com o mesmo valor recebido pela prop `planetImage`;

  * Será validado se, além do atributo `src`, a imagem renderizada possui o atributo `alt` com o texto `Planeta {planetName}`, onde `{planetName}` é o valor recebido pela prop `planetName`.
</details>

---

## 6. Renderize uma lista com os planetas do Sistema Solar

<details>
  <summary>Renderize uma lista com os planetas do Sistema Solar dentro do componente <code>SolarSystem</code>.</summary>

  - Utilize o componente `PlanetCard` para renderizar cada item da lista de planetas;

  - Você encontrará a lista com os nomes e as imagens de cada planeta do Sistema Solar no arquivo `src/data/planets.js`;
    
  - Você deve importar a lista no componente `SolarSystem` usando o código:
  ```javascript
  import planets from '../data/planets';
  ```

  - A lista de planetas é um _array_ de objetos no seguinte formato:
  ```javascript
  {
    name: "Nome do planeta",
    image: "caminho-para-imagem-do-planeta"
  }
  ```

  - Para cada planeta da lista, você deverá renderizar um componente `PlanetCard`, passando o atributo `name` para a prop `planetName` e o atributo `image` para a prop `planetImage`.

  ![Screenshot](public/examples/req6.png)
</details>

<details>
  <summary>:bulb: Dica: </summary> 

  - Lembre-se do método que te permite criar vários componentes iguais a partir dos valores presentes em um _array_. Lembre-se que ao renderizar uma lista, você deve passar o atributo `key` para cada item. Você pode usar o nome do planeta como `key`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será verificado se é renderizado um componente `<PlanetCard />` para cada planeta da lista de planetas;

  * Será verificado se todos os planetas do Sistema Solar estão sendo listados na tela.
</details>

---

## 7. Crie um componente chamado `Missions`.

<details>
  <summary>Crie um componente chamado <code>Missions</code> dentro da pasta <code>src/components</code>.</summary>

  - Este componente deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="missions"`;

  - Renderize o componente `Missions` abaixo do `SolarSystem`, dentro do componente principal `App`.
</details>

<details>
<summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o componente `<Missions />` é renderizado;

  * Será validado se existe uma `div` que possui o `data-testid="missions"`;

  * Será validado se o componente `<Missions />` está sendo renderizado no componente principal `App`.
</details>

---

## 8. Renderize o componente `Title` dentro do componente `Missions`.

<details>
  <summary>Renderize o componente <code>Title</code> dentro do componente <code>Missions</code>.</summary>

  - O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Missões".

  ![Screenshot](public/examples/req8.png)
</details>
<details>
<summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o texto "Missões" é renderizado usando o componente `Title` dentro do componente `Missions`.
</details>

---

## 9. Crie um componente chamado `MissionCard`.

<details>
  <summary>Crie um componente chamado <code>MissionCard</code> dentro da pasta <code>src/components</code>.</summary>

  - O componente `MissionCard` deve receber quatro props:
    - `name`
    - `year`
    - `country`
    - `destination`

  - O componente `MissionCard` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="mission-card"`;
  
  - O componente `MissionCard` deve renderizar o texto recebido pela prop `name`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-name"`;
  
  - O componente `MissionCard` deve renderizar o texto recebido pela prop `year`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-year"`;
  
  - O componente `MissionCard` deve renderizar o texto recebido pela prop `country`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-country"`;
  
  - O componente `MissionCard` deve renderizar o texto recebido pela prop `destination`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-destination"`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será validado se o componente `<MissionCard />` é renderizado;

  * Será validado se o componente `<MissionCard />` possui uma div com o atributo `data-testid="mission-card"`;

  * Será validado se é renderizado o texto recebido pela prop `name`;

  * Será validado se é renderizado o texto recebido pela prop `year`;

  * Será validado se é renderizado o texto recebido pela prop `country`;

  * Será validado se é renderizado o texto recebido pela prop `destination`. 
</details>

---

## 10. Renderize uma lista com as missões espaciais

<details>
  <summary>Renderize uma lista com as missões espaciais dentro do componente <code>Missions</code>.</summary>

  - Utilize o componente `MissionCard` para renderizar cada item da lista de missões;

  - Você encontrará a lista com as informações de cada missão espacial no arquivo `src/data/missions.js`;

  - Você deve importar a lista no componente `Missions` usando o código:
  ```javascript
  import missions from '../data/missions';
  ```

  - A lista de missões espaciais é um _array_ de objetos no seguinte formato:
  ```javascript
  {
    name: 'Nome da missão',
    year: 'Ano de lançamento da missão',
    country: 'País que lançou a missão',
    destination: 'Destino da missão',
  }
  ```

  - Para cada missão espacial da lista, você deverá renderizar um componente `MissionCard`, passando cada atributo para sua respectiva prop.

  ![Screenshot](public/examples/req10.png)
</details>
<details>
<summary>:bulb: Dica:</summary>

  - Lembre-se do método que te permite criar vários componentes iguais a partir dos valores presentes em um _array_. Lembre-se que ao renderizar uma lista, você deve passar o atributo `key` para cada item. Você pode usar o nome da missão como `key`.
</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será verificado se é renderizado um componente `<MissionCard />` para cada missão espacial da lista de missões;

  * Será verificado se todas as missões espaciais estão sendo listadas na tela.
</details>

---
