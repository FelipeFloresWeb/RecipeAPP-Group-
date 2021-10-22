# Boas vindas ao repositório do projeto de Receitas!

Projeto desenvolvido em grupo utilizando métodologias ágies
---

# Sumário

- [Habilidades](#habilidades)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [API's](#apis)
- [TheMealDB API](#themealdb-api)
- [The CockTailDB API](#the-cocktaildb-api)
- [Rotas](#rotas)

# Habilidades

Nesse projeto, foi utilizado:

  - Context API do React para gerenciar estado
  - React Hook useState
  - React Hook useContext
  - React Hook useEffect
  - Hooks customizados

---

## O QUE FOI DESENVOLVIDO

Um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

Nele será possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks!

A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.

O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.


## APIs

### TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)


Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

É possível listar todas as `categorias`, `áreas` e `ingredientes`:

```
categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
areas: https://www.themealdb.com/api/json/v1/1/list.php?a=list
ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

As fotos dos ingredientes vêm de um end-point padronizado com a seguinte lógica:

```
https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}.png
// exemplo com "lime
https://www.themealdb.com/images/ingredients/Lime.png
```

### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

As respostas seguem a mesma estrutura, com algumas particularidade relativas as bebidas (como ser ou não alcoólica, por exemplo)

  <details>
    <summary>Ver modelo de resposta para drinks</summary>

  ```json
    {
      "drinks":[
          {
            "idDrink":"17256",
            "strDrink":"Martinez 2",
            "strDrinkAlternate":null,
            "strDrinkES":null,
            "strDrinkDE":null,
            "strDrinkFR":null,
            "strDrinkZH-HANS":null,
            "strDrinkZH-HANT":null,
            "strTags":null,
            "strVideo":null,
            "strCategory":"Cocktail",
            "strIBA":null,
            "strAlcoholic":"Alcoholic",
            "strGlass":"Cocktail glass",
            "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
            "strInstructionsES":null,
            "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
            "strInstructionsFR":null,
            "strInstructionsZH-HANS":null,
            "strInstructionsZH-HANT":null,
            "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
            "strIngredient1":"Gin",
            "strIngredient2":"Sweet Vermouth",
            "strIngredient3":"Maraschino Liqueur",
            "strIngredient4":"Angostura Bitters",
            "strIngredient5":null,
            "strIngredient6":null,
            "strIngredient7":null,
            "strIngredient8":null,
            "strIngredient9":null,
            "strIngredient10":null,
            "strIngredient11":null,
            "strIngredient12":null,
            "strIngredient13":null,
            "strIngredient14":null,
            "strIngredient15":null,
            "strMeasure1":"1 1\/2 oz",
            "strMeasure2":"1 1\/2 oz",
            "strMeasure3":"1 tsp",
            "strMeasure4":"2 dashes",
            "strMeasure5":null,
            "strMeasure6":null,
            "strMeasure7":null,
            "strMeasure8":null,
            "strMeasure9":null,
            "strMeasure10":null,
            "strMeasure11":null,
            "strMeasure12":null,
            "strMeasure13":null,
            "strMeasure14":null,
            "strMeasure15":null,
            "strCreativeCommonsConfirmed":"No",
            "dateModified":"2017-12-19 18:34:15"
          }
      ]
    }
  ```
  </details>

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

---

### Rotas

As rotas a serem utilizadas na aplicação devem ser as seguintes:

* Tela de login: `/`;
* Tela principal de receitas de comidas: `/comidas`;
* Tela principal de receitas de bebidas: `/bebidas`;
* Tela de detalhes de uma receita de comida: `/comidas/{id-da-receita}`;
* Tela de detalhes de uma receita de bebida: `/bebidas/{id-da-receita}`;
* Tela de receita em processo de comida: `/comidas/{id-da-receita}/in-progress`;
* Tela de receita em processo de bebida: `/bebidas/{id-da-receita}/in-progress`;
* Tela de explorar: `/explorar`;
* Tela de explorar comidas: `/explorar/comidas`;
* Tela de explorar bebidas: `/explorar/bebidas`;
* Tela de explorar comidas por ingrediente: `/explorar/comidas/ingredientes`;
* Tela de explorar bebidas por ingrediente: `/explorar/bebidas/ingredientes`;
* Tela de explorar comidas por local de origem: `/explorar/comidas/area`;
* Tela de perfil: `/perfil`;
* Tela de receitas feitas: `/receitas-feitas`;
* Tela de receitas favoritas: `/receitas-favoritas`.

**Observações técnicas**

* `id-da-bebida` e `id-da-comida` representam o ID de uma bebida e comida, respectivamente, e cada item da lista de ingredientes da respectiva receita deve ser representado apenas pelo número do ingrediente no formato numérico.
