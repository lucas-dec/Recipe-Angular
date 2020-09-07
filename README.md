# Recipe app - Angular + API

###### This is the same project like - [Recipe app - ReactJS + Redux + API](https://github.com/lucas-dec/Recipe-ReactJS) but created in Angular !

###### The purpose of creating the application was to learn Angular and TypeScript.

'Recipe app' is presenting recipes of food and drinks. There are 4 main categories: Main Course, Salad, Drinks and Recommended recipes. In addition, the user can manually search for recipes (e.g. chicken, pasta, rice etc.). Recipes are fetching with 'Spoonacular Food & Recipe API'.

## Screenshots

![Recommended](screenshots/recommended.jpg?raw=true "Recommended")
![DetailsRecipes](screenshots/details-recipe.jpg?raw=true "DetailsRecipes")
![Notification](screenshots/fetching-data.jpg?raw=true "Notification")

## Live Preview

###### The app is hosted on Netlify:

https://recipe-angular.netlify.app

## Quick Start

- clone the repo:

```
git clone https://github.com/lucas-dec/Recipe-Angular.git
```

- install the necessary dependecies

```
npm install
```

- start the server:

```
ng serve
```

- Open http://localhost:4200 to run the app in your browser on your local machine.

## Features

- Recipes proposition
- Recipes category
- Ingredients needed to prepare a dish
- Preparation instructions
- Details information about recipes
- Search recipes
- Notifications about errors and fetching data

# Technologies used on this project:

- Angular generated with Angular CLI
- Servies
- Routing
- Fetch data from API using HttpClient - (https://spoonacular.com/food-api)
