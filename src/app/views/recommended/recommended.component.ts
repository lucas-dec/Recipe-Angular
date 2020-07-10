import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  // private recipes: Array<Recipe> = [
  //   {
  //     recipes: [
  //       {
  //         vegetarian: false,
  //         vegan: false,
  //         glutenFree: false,
  //         dairyFree: true,
  //         veryHealthy: false,
  //         cheap: false,
  //         veryPopular: false,
  //         sustainable: false,
  //         weightWatcherSmartPoints: 2,
  //         gaps: 'no',
  //         lowFodmap: false,
  //         aggregateLikes: 13,
  //         spoonacularScore: 7,
  //         healthScore: 0,
  //         creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
  //         license: 'CC BY 3.0',
  //         sourceName: 'Foodista',
  //         pricePerServing: 12.59,
  //         extendedIngredients: [
  //           {
  //             id: 10020129,
  //             aisle: 'Baking',
  //             image: 'flour.png',
  //             consistency: 'solid',
  //             name: 'cake flour',
  //             original: '100 grams cake flour',
  //             originalString: '100 grams cake flour',
  //             originalName: 'cake flour',
  //             amount: 100,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 3.527,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 100,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 19335,
  //             aisle: 'Baking',
  //             image: 'sugar-in-bowl.png',
  //             consistency: 'solid',
  //             name: 'sugar',
  //             original: '35 grams sugar',
  //             originalString: '35 grams sugar',
  //             originalName: 'sugar',
  //             amount: 35,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1.235,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 35,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 14214,
  //             aisle: 'Tea and Coffee',
  //             image: 'instant-coffee-or-instant-espresso.png',
  //             consistency: 'solid',
  //             name: 'instant coffee granules',
  //             original: '1 tablespoon instant coffee granules',
  //             originalString: '1 tablespoon instant coffee granules',
  //             originalName: 'instant coffee granules',
  //             amount: 1,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               }
  //             }
  //           },
  //           {
  //             id: 12155,
  //             aisle: 'Nuts;Baking',
  //             image: 'walnuts.jpg',
  //             consistency: 'solid',
  //             name: 'walnuts',
  //             original: '50 grams toasted walnuts',
  //             originalString: '50 grams toasted walnuts',
  //             originalName: 'toasted walnuts',
  //             amount: 50,
  //             unit: 'grams',
  //             meta: [
  //               'toasted'
  //             ],
  //             metaInformation: [
  //               'toasted'
  //             ],
  //             measures: {
  //               us: {
  //                 amount: 1.764,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 50,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 2047,
  //             aisle: 'Spices and Seasonings',
  //             image: 'salt.jpg',
  //             consistency: 'solid',
  //             name: 'salt',
  //             original: 'pinch of salt',
  //             originalString: 'pinch of salt',
  //             originalName: 'pinch of salt',
  //             amount: 1,
  //             unit: 'pinch',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'pinch',
  //                 unitLong: 'pinch'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'pinch',
  //                 unitLong: 'pinch'
  //               }
  //             }
  //           },
  //           {
  //             id: 4582,
  //             aisle: 'Oil, Vinegar, Salad Dressing',
  //             image: 'vegetable-oil.jpg',
  //             consistency: 'liquid',
  //             name: 'canola oil',
  //             original: '3 tablespoon canola oil',
  //             originalString: '3 tablespoon canola oil',
  //             originalName: 'canola oil',
  //             amount: 3,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 3,
  //                 unitShort: 'Tbsps',
  //                 unitLong: 'Tbsps'
  //               },
  //               metric: {
  //                 amount: 3,
  //                 unitShort: 'Tbsps',
  //                 unitLong: 'Tbsps'
  //               }
  //             }
  //           },
  //           {
  //             id: 14412,
  //             aisle: 'Beverages',
  //             image: 'water.png',
  //             consistency: 'liquid',
  //             name: 'water',
  //             original: '1 tablespoon water',
  //             originalString: '1 tablespoon water',
  //             originalName: 'water',
  //             amount: 1,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               }
  //             }
  //           },
  //           {
  //             id: 9299,
  //             aisle: 'Dried Fruits;Produce;Baking',
  //             image: 'raisins.jpg',
  //             consistency: 'solid',
  //             name: 'raisins',
  //             original: '20 grams raisins',
  //             originalString: '20 grams raisins',
  //             originalName: 'raisins',
  //             amount: 20,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 0.705,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 20,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 19336,
  //             aisle: 'Baking',
  //             image: 'powdered-sugar.jpg',
  //             consistency: 'solid',
  //             name: 'powdered sugar',
  //             original: 'powdered sugar, to dust',
  //             originalString: 'powdered sugar, to dust',
  //             originalName: 'powdered sugar, to dust',
  //             amount: 1,
  //             unit: 'serving',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'serving',
  //                 unitLong: 'serving'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'serving',
  //                 unitLong: 'serving'
  //               }
  //             }
  //           }
  //         ],
  //         id: 639865,
  //         title: 'Coffee Cookies',
  //         readyInMinutes: 45,
  //         servings: 16,
  //         sourceUrl: 'https://www.foodista.com/recipe/7FD6YGWV/coffee-cookies',
  //         image: 'https://spoonacular.com/recipeImages/639865-556x370.jpg',
  //         imageType: 'jpg',
  //         summary: 'If you have around <b>approximately 45 minutes</b> to spend in the kitchen, Coffee Cookies might be a super <b>dairy free</b> recipe to try. One serving contains <b>81 calories</b>, <b>1g of protein</b>, and <b>5g of fat</b>. For <b>13 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. This recipe serves 16. A few people made this recipe, and 13 would say it hit the spot. It works well as a dessert. A mixture of canolan oil, water, raisins, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular <b>score of 4%</b>, this dish is very bad (but still fixable). Try <a href="https://spoonacular.com/recipes/coffee-cookies-627023">Coffee Cookies</a>, <a href="https://spoonacular.com/recipes/coffee-bean-cookies-54727">Coffee Bean Cookies</a>, and <a href="https://spoonacular.com/recipes/coffee-cake-cookies-631238">Coffee Cake Cookies</a> for similar recipes.',
  //         cuisines: [],
  //         dishTypes: [
  //           'dessert'
  //         ],
  //         diets: [
  //           'dairy free'
  //         ],
  //         occasions: [],
  //         winePairing: {
  //           pairedWines: [
  //             'cream sherry',
  //             'madeira',
  //             'prosecco'
  //           ],
  //           pairingText: 'Cookies on the menu? Try pairing with Cream Sherry, Madeira, and Prosecco. Sweet bubbly Prosecco doesn\'t overwhelm simple sugar or shortbread cookies, a sweet cream sherry complements spiced cookies, and madeira\'s nutty notes match cookies with nuts perfectly. One wine you could try is NV Johnson Estate Cream Sherry. It has 5 out of 5 stars and a bottle costs about 19 dollars.',
  //           productMatches: [
  //             {
  //               id: 430626,
  //               title: 'NV Johnson Estate Cream Sherry',
  //               description: 'Very aromatic with notes of hazelnut, vanilla, and a touch of oak followed by sweet raisins and a touch of yeast. Clean lasting finish. Good now but will reward those allow it to age"". A favorite pre-prandial beverage. Consider it with nuts before dinner as an aperitif, or after dinner with dessert, especially chocolates and fruit-based desserts. Also wonderful on cold afternoons, served with biscotti to dip in ""Italian-style"". "',
  //               price: '$19.49',
  //               imageUrl: 'https://spoonacular.com/productImages/430626-312x231.jpg',
  //               averageRating: 1,
  //               ratingCount: 2,
  //               score: 0.8571428571428572,
  //               link: 'https://www.amazon.com/Johnson-Estate-Cream-Sherry-750/dp/B00D3GQSRW?tag=spoonacular-20'
  //             }
  //           ]
  //         },
  //         instructions: 'Preheat oven to 350 degrees F and line a cookie sheet with parchment paper.\nPut the cake flour, sugar, coffee, walnuts, and salt in a food processor and process for about 10 seconds (or until the walnuts are well grounded).\nNow put the mixture into a mixing bowl and add canola oil. Form a pasty dough, then separate the dough with your hands to form small crumbs. Add the water and form into a clean dough. If you like raisins, you can combine it with the dough now.\nDivide the dough into 16 pieces and roll each piece into a ball. Put each ball on a cookie sheet and bake at 350 degrees F for 25 minutes.\nLet the cookies cool for about 20 minutes. Dust with powdered sugar before serving.',
  //         analyzedInstructions: [
  //           {
  //             name: '',
  //             steps: [
  //               {
  //                 number: 1,
  //                 step: 'Preheat oven to 350 degrees F and line a cookie sheet with parchment paper.',
  //                 ingredients: [],
  //                 equipment: [
  //                   {
  //                     id: 404770,
  //                     name: 'baking paper',
  //                     localizedName: 'baking paper',
  //                     image: 'baking-paper.jpg'
  //                   },
  //                   {
  //                     id: 404727,
  //                     name: 'baking sheet',
  //                     localizedName: 'baking sheet',
  //                     image: 'baking-sheet.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg',
  //                     temperature: {
  //                       number: 350,
  //                       unit: 'Fahrenheit'
  //                     }
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 2,
  //                 step: 'Put the cake flour, sugar, coffee, walnuts, and salt in a food processor and process for about 10 seconds (or until the walnuts are well grounded).',
  //                 ingredients: [
  //                   {
  //                     id: 10020129,
  //                     name: 'cake flour',
  //                     localizedName: 'cake flour',
  //                     image: 'flour.png'
  //                   },
  //                   {
  //                     id: 12155,
  //                     name: 'walnuts',
  //                     localizedName: 'walnuts',
  //                     image: 'walnuts.jpg'
  //                   },
  //                   {
  //                     id: 19335,
  //                     name: 'sugar',
  //                     localizedName: 'sugar',
  //                     image: 'sugar-in-bowl.png'
  //                   },
  //                   {
  //                     id: 2047,
  //                     name: 'salt',
  //                     localizedName: 'salt',
  //                     image: 'salt.jpg'
  //                   }
  //                 ],
  //                 equipment: [
  //                   {
  //                     id: 404771,
  //                     name: 'food processor',
  //                     localizedName: 'food processor',
  //                     image: 'food-processor.png'
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 3,
  //                 step: 'Now put the mixture into a mixing bowl and add canola oil. Form a pasty dough, then separate the dough with your hands to form small crumbs.',
  //                 ingredients: [
  //                   {
  //                     id: 1014582,
  //                     name: 'canola oil',
  //                     localizedName: 'canola oil',
  //                     image: 'vegetable-oil.jpg'
  //                   }
  //                 ],
  //                 equipment: [
  //                   {
  //                     id: 405907,
  //                     name: 'mixing bowl',
  //                     localizedName: 'mixing bowl',
  //                     image: 'mixing-bowl.jpg'
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 4,
  //                 step: 'Add the water and form into a clean dough. If you like raisins, you can combine it with the dough now.',
  //                 ingredients: [
  //                   {
  //                     id: 9299,
  //                     name: 'raisins',
  //                     localizedName: 'raisins',
  //                     image: 'raisins.jpg'
  //                   },
  //                   {
  //                     id: 14412,
  //                     name: 'water',
  //                     localizedName: 'water',
  //                     image: 'water.png'
  //                   }
  //                 ],
  //                 equipment: []
  //               },
  //               {
  //                 number: 5,
  //                 step: 'Divide the dough into 16 pieces and roll each piece into a ball. Put each ball on a cookie sheet and bake at 350 degrees F for 25 minutes.',
  //                 ingredients: [],
  //                 equipment: [
  //                   {
  //                     id: 404727,
  //                     name: 'baking sheet',
  //                     localizedName: 'baking sheet',
  //                     image: 'baking-sheet.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg',
  //                     temperature: {
  //                       number: 350,
  //                       unit: 'Fahrenheit'
  //                     }
  //                   }
  //                 ],
  //                 length: {
  //                   number: 25,
  //                   unit: 'minutes'
  //                 }
  //               },
  //               {
  //                 number: 6,
  //                 step: 'Let the cookies cool for about 20 minutes. Dust with powdered sugar before serving.',
  //                 ingredients: [
  //                   {
  //                     id: 19336,
  //                     name: 'powdered sugar',
  //                     localizedName: 'powdered sugar',
  //                     image: 'powdered-sugar.jpg'
  //                   }
  //                 ],
  //                 equipment: [],
  //                 length: {
  //                   number: 20,
  //                   unit: 'minutes'
  //                 }
  //               }
  //             ]
  //           }
  //         ],
  //         originalId: null,
  //         spoonacularSourceUrl: 'https://spoonacular.com/coffee-cookies-639865'
  //       }
  //     ]
  //   },
  //   {
  //     recipes: [
  //       {
  //         vegetarian: false,
  //         vegan: false,
  //         glutenFree: false,
  //         dairyFree: true,
  //         veryHealthy: false,
  //         cheap: false,
  //         veryPopular: false,
  //         sustainable: false,
  //         weightWatcherSmartPoints: 2,
  //         gaps: 'no',
  //         lowFodmap: false,
  //         aggregateLikes: 13,
  //         spoonacularScore: 7,
  //         healthScore: 0,
  //         creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
  //         license: 'CC BY 3.0',
  //         sourceName: 'Foodista',
  //         pricePerServing: 12.59,
  //         extendedIngredients: [
  //           {
  //             id: 10020129,
  //             aisle: 'Baking',
  //             image: 'flour.png',
  //             consistency: 'solid',
  //             name: 'cake flour',
  //             original: '100 grams cake flour',
  //             originalString: '100 grams cake flour',
  //             originalName: 'cake flour',
  //             amount: 100,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 3.527,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 100,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 19335,
  //             aisle: 'Baking',
  //             image: 'sugar-in-bowl.png',
  //             consistency: 'solid',
  //             name: 'sugar',
  //             original: '35 grams sugar',
  //             originalString: '35 grams sugar',
  //             originalName: 'sugar',
  //             amount: 35,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1.235,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 35,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 14214,
  //             aisle: 'Tea and Coffee',
  //             image: 'instant-coffee-or-instant-espresso.png',
  //             consistency: 'solid',
  //             name: 'instant coffee granules',
  //             original: '1 tablespoon instant coffee granules',
  //             originalString: '1 tablespoon instant coffee granules',
  //             originalName: 'instant coffee granules',
  //             amount: 1,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               }
  //             }
  //           },
  //           {
  //             id: 12155,
  //             aisle: 'Nuts;Baking',
  //             image: 'walnuts.jpg',
  //             consistency: 'solid',
  //             name: 'walnuts',
  //             original: '50 grams toasted walnuts',
  //             originalString: '50 grams toasted walnuts',
  //             originalName: 'toasted walnuts',
  //             amount: 50,
  //             unit: 'grams',
  //             meta: [
  //               'toasted'
  //             ],
  //             metaInformation: [
  //               'toasted'
  //             ],
  //             measures: {
  //               us: {
  //                 amount: 1.764,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 50,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 2047,
  //             aisle: 'Spices and Seasonings',
  //             image: 'salt.jpg',
  //             consistency: 'solid',
  //             name: 'salt',
  //             original: 'pinch of salt',
  //             originalString: 'pinch of salt',
  //             originalName: 'pinch of salt',
  //             amount: 1,
  //             unit: 'pinch',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'pinch',
  //                 unitLong: 'pinch'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'pinch',
  //                 unitLong: 'pinch'
  //               }
  //             }
  //           },
  //           {
  //             id: 4582,
  //             aisle: 'Oil, Vinegar, Salad Dressing',
  //             image: 'vegetable-oil.jpg',
  //             consistency: 'liquid',
  //             name: 'canola oil',
  //             original: '3 tablespoon canola oil',
  //             originalString: '3 tablespoon canola oil',
  //             originalName: 'canola oil',
  //             amount: 3,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 3,
  //                 unitShort: 'Tbsps',
  //                 unitLong: 'Tbsps'
  //               },
  //               metric: {
  //                 amount: 3,
  //                 unitShort: 'Tbsps',
  //                 unitLong: 'Tbsps'
  //               }
  //             }
  //           },
  //           {
  //             id: 14412,
  //             aisle: 'Beverages',
  //             image: 'water.png',
  //             consistency: 'liquid',
  //             name: 'water',
  //             original: '1 tablespoon water',
  //             originalString: '1 tablespoon water',
  //             originalName: 'water',
  //             amount: 1,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               }
  //             }
  //           },
  //           {
  //             id: 9299,
  //             aisle: 'Dried Fruits;Produce;Baking',
  //             image: 'raisins.jpg',
  //             consistency: 'solid',
  //             name: 'raisins',
  //             original: '20 grams raisins',
  //             originalString: '20 grams raisins',
  //             originalName: 'raisins',
  //             amount: 20,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 0.705,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 20,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 19336,
  //             aisle: 'Baking',
  //             image: 'powdered-sugar.jpg',
  //             consistency: 'solid',
  //             name: 'powdered sugar',
  //             original: 'powdered sugar, to dust',
  //             originalString: 'powdered sugar, to dust',
  //             originalName: 'powdered sugar, to dust',
  //             amount: 1,
  //             unit: 'serving',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'serving',
  //                 unitLong: 'serving'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'serving',
  //                 unitLong: 'serving'
  //               }
  //             }
  //           }
  //         ],
  //         id: 639865,
  //         title: 'Coffee Cookies',
  //         readyInMinutes: 45,
  //         servings: 16,
  //         sourceUrl: 'https://www.foodista.com/recipe/7FD6YGWV/coffee-cookies',
  //         image: 'https://spoonacular.com/recipeImages/639865-556x370.jpg',
  //         imageType: 'jpg',
  //         summary: 'If you have around <b>approximately 45 minutes</b> to spend in the kitchen, Coffee Cookies might be a super <b>dairy free</b> recipe to try. One serving contains <b>81 calories</b>, <b>1g of protein</b>, and <b>5g of fat</b>. For <b>13 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. This recipe serves 16. A few people made this recipe, and 13 would say it hit the spot. It works well as a dessert. A mixture of canolan oil, water, raisins, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular <b>score of 4%</b>, this dish is very bad (but still fixable). Try <a href="https://spoonacular.com/recipes/coffee-cookies-627023">Coffee Cookies</a>, <a href="https://spoonacular.com/recipes/coffee-bean-cookies-54727">Coffee Bean Cookies</a>, and <a href="https://spoonacular.com/recipes/coffee-cake-cookies-631238">Coffee Cake Cookies</a> for similar recipes.',
  //         cuisines: [],
  //         dishTypes: [
  //           'dessert'
  //         ],
  //         diets: [
  //           'dairy free'
  //         ],
  //         occasions: [],
  //         winePairing: {
  //           pairedWines: [
  //             'cream sherry',
  //             'madeira',
  //             'prosecco'
  //           ],
  //           pairingText: 'Cookies on the menu? Try pairing with Cream Sherry, Madeira, and Prosecco. Sweet bubbly Prosecco doesn\'t overwhelm simple sugar or shortbread cookies, a sweet cream sherry complements spiced cookies, and madeira\'s nutty notes match cookies with nuts perfectly. One wine you could try is NV Johnson Estate Cream Sherry. It has 5 out of 5 stars and a bottle costs about 19 dollars.',
  //           productMatches: [
  //             {
  //               id: 430626,
  //               title: 'NV Johnson Estate Cream Sherry',
  //               description: 'Very aromatic with notes of hazelnut, vanilla, and a touch of oak followed by sweet raisins and a touch of yeast. Clean lasting finish. Good now but will reward those allow it to age"". A favorite pre-prandial beverage. Consider it with nuts before dinner as an aperitif, or after dinner with dessert, especially chocolates and fruit-based desserts. Also wonderful on cold afternoons, served with biscotti to dip in ""Italian-style"". "',
  //               price: '$19.49',
  //               imageUrl: 'https://spoonacular.com/productImages/430626-312x231.jpg',
  //               averageRating: 1,
  //               ratingCount: 2,
  //               score: 0.8571428571428572,
  //               link: 'https://www.amazon.com/Johnson-Estate-Cream-Sherry-750/dp/B00D3GQSRW?tag=spoonacular-20'
  //             }
  //           ]
  //         },
  //         instructions: 'Preheat oven to 350 degrees F and line a cookie sheet with parchment paper.\nPut the cake flour, sugar, coffee, walnuts, and salt in a food processor and process for about 10 seconds (or until the walnuts are well grounded).\nNow put the mixture into a mixing bowl and add canola oil. Form a pasty dough, then separate the dough with your hands to form small crumbs. Add the water and form into a clean dough. If you like raisins, you can combine it with the dough now.\nDivide the dough into 16 pieces and roll each piece into a ball. Put each ball on a cookie sheet and bake at 350 degrees F for 25 minutes.\nLet the cookies cool for about 20 minutes. Dust with powdered sugar before serving.',
  //         analyzedInstructions: [
  //           {
  //             name: '',
  //             steps: [
  //               {
  //                 number: 1,
  //                 step: 'Preheat oven to 350 degrees F and line a cookie sheet with parchment paper.',
  //                 ingredients: [],
  //                 equipment: [
  //                   {
  //                     id: 404770,
  //                     name: 'baking paper',
  //                     localizedName: 'baking paper',
  //                     image: 'baking-paper.jpg'
  //                   },
  //                   {
  //                     id: 404727,
  //                     name: 'baking sheet',
  //                     localizedName: 'baking sheet',
  //                     image: 'baking-sheet.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg',
  //                     temperature: {
  //                       number: 350,
  //                       unit: 'Fahrenheit'
  //                     }
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 2,
  //                 step: 'Put the cake flour, sugar, coffee, walnuts, and salt in a food processor and process for about 10 seconds (or until the walnuts are well grounded).',
  //                 ingredients: [
  //                   {
  //                     id: 10020129,
  //                     name: 'cake flour',
  //                     localizedName: 'cake flour',
  //                     image: 'flour.png'
  //                   },
  //                   {
  //                     id: 12155,
  //                     name: 'walnuts',
  //                     localizedName: 'walnuts',
  //                     image: 'walnuts.jpg'
  //                   },
  //                   {
  //                     id: 19335,
  //                     name: 'sugar',
  //                     localizedName: 'sugar',
  //                     image: 'sugar-in-bowl.png'
  //                   },
  //                   {
  //                     id: 2047,
  //                     name: 'salt',
  //                     localizedName: 'salt',
  //                     image: 'salt.jpg'
  //                   }
  //                 ],
  //                 equipment: [
  //                   {
  //                     id: 404771,
  //                     name: 'food processor',
  //                     localizedName: 'food processor',
  //                     image: 'food-processor.png'
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 3,
  //                 step: 'Now put the mixture into a mixing bowl and add canola oil. Form a pasty dough, then separate the dough with your hands to form small crumbs.',
  //                 ingredients: [
  //                   {
  //                     id: 1014582,
  //                     name: 'canola oil',
  //                     localizedName: 'canola oil',
  //                     image: 'vegetable-oil.jpg'
  //                   }
  //                 ],
  //                 equipment: [
  //                   {
  //                     id: 405907,
  //                     name: 'mixing bowl',
  //                     localizedName: 'mixing bowl',
  //                     image: 'mixing-bowl.jpg'
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 4,
  //                 step: 'Add the water and form into a clean dough. If you like raisins, you can combine it with the dough now.',
  //                 ingredients: [
  //                   {
  //                     id: 9299,
  //                     name: 'raisins',
  //                     localizedName: 'raisins',
  //                     image: 'raisins.jpg'
  //                   },
  //                   {
  //                     id: 14412,
  //                     name: 'water',
  //                     localizedName: 'water',
  //                     image: 'water.png'
  //                   }
  //                 ],
  //                 equipment: []
  //               },
  //               {
  //                 number: 5,
  //                 step: 'Divide the dough into 16 pieces and roll each piece into a ball. Put each ball on a cookie sheet and bake at 350 degrees F for 25 minutes.',
  //                 ingredients: [],
  //                 equipment: [
  //                   {
  //                     id: 404727,
  //                     name: 'baking sheet',
  //                     localizedName: 'baking sheet',
  //                     image: 'baking-sheet.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg',
  //                     temperature: {
  //                       number: 350,
  //                       unit: 'Fahrenheit'
  //                     }
  //                   }
  //                 ],
  //                 length: {
  //                   number: 25,
  //                   unit: 'minutes'
  //                 }
  //               },
  //               {
  //                 number: 6,
  //                 step: 'Let the cookies cool for about 20 minutes. Dust with powdered sugar before serving.',
  //                 ingredients: [
  //                   {
  //                     id: 19336,
  //                     name: 'powdered sugar',
  //                     localizedName: 'powdered sugar',
  //                     image: 'powdered-sugar.jpg'
  //                   }
  //                 ],
  //                 equipment: [],
  //                 length: {
  //                   number: 20,
  //                   unit: 'minutes'
  //                 }
  //               }
  //             ]
  //           }
  //         ],
  //         originalId: null,
  //         spoonacularSourceUrl: 'https://spoonacular.com/coffee-cookies-639865'
  //       }
  //     ]
  //   }, {
  //     recipes: [
  //       {
  //         vegetarian: false,
  //         vegan: false,
  //         glutenFree: false,
  //         dairyFree: true,
  //         veryHealthy: false,
  //         cheap: false,
  //         veryPopular: false,
  //         sustainable: false,
  //         weightWatcherSmartPoints: 2,
  //         gaps: 'no',
  //         lowFodmap: false,
  //         aggregateLikes: 13,
  //         spoonacularScore: 7,
  //         healthScore: 0,
  //         creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
  //         license: 'CC BY 3.0',
  //         sourceName: 'Foodista',
  //         pricePerServing: 12.59,
  //         extendedIngredients: [
  //           {
  //             id: 10020129,
  //             aisle: 'Baking',
  //             image: 'flour.png',
  //             consistency: 'solid',
  //             name: 'cake flour',
  //             original: '100 grams cake flour',
  //             originalString: '100 grams cake flour',
  //             originalName: 'cake flour',
  //             amount: 100,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 3.527,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 100,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 19335,
  //             aisle: 'Baking',
  //             image: 'sugar-in-bowl.png',
  //             consistency: 'solid',
  //             name: 'sugar',
  //             original: '35 grams sugar',
  //             originalString: '35 grams sugar',
  //             originalName: 'sugar',
  //             amount: 35,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1.235,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 35,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 14214,
  //             aisle: 'Tea and Coffee',
  //             image: 'instant-coffee-or-instant-espresso.png',
  //             consistency: 'solid',
  //             name: 'instant coffee granules',
  //             original: '1 tablespoon instant coffee granules',
  //             originalString: '1 tablespoon instant coffee granules',
  //             originalName: 'instant coffee granules',
  //             amount: 1,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               }
  //             }
  //           },
  //           {
  //             id: 12155,
  //             aisle: 'Nuts;Baking',
  //             image: 'walnuts.jpg',
  //             consistency: 'solid',
  //             name: 'walnuts',
  //             original: '50 grams toasted walnuts',
  //             originalString: '50 grams toasted walnuts',
  //             originalName: 'toasted walnuts',
  //             amount: 50,
  //             unit: 'grams',
  //             meta: [
  //               'toasted'
  //             ],
  //             metaInformation: [
  //               'toasted'
  //             ],
  //             measures: {
  //               us: {
  //                 amount: 1.764,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 50,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 2047,
  //             aisle: 'Spices and Seasonings',
  //             image: 'salt.jpg',
  //             consistency: 'solid',
  //             name: 'salt',
  //             original: 'pinch of salt',
  //             originalString: 'pinch of salt',
  //             originalName: 'pinch of salt',
  //             amount: 1,
  //             unit: 'pinch',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'pinch',
  //                 unitLong: 'pinch'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'pinch',
  //                 unitLong: 'pinch'
  //               }
  //             }
  //           },
  //           {
  //             id: 4582,
  //             aisle: 'Oil, Vinegar, Salad Dressing',
  //             image: 'vegetable-oil.jpg',
  //             consistency: 'liquid',
  //             name: 'canola oil',
  //             original: '3 tablespoon canola oil',
  //             originalString: '3 tablespoon canola oil',
  //             originalName: 'canola oil',
  //             amount: 3,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 3,
  //                 unitShort: 'Tbsps',
  //                 unitLong: 'Tbsps'
  //               },
  //               metric: {
  //                 amount: 3,
  //                 unitShort: 'Tbsps',
  //                 unitLong: 'Tbsps'
  //               }
  //             }
  //           },
  //           {
  //             id: 14412,
  //             aisle: 'Beverages',
  //             image: 'water.png',
  //             consistency: 'liquid',
  //             name: 'water',
  //             original: '1 tablespoon water',
  //             originalString: '1 tablespoon water',
  //             originalName: 'water',
  //             amount: 1,
  //             unit: 'tablespoon',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'Tbsp',
  //                 unitLong: 'Tbsp'
  //               }
  //             }
  //           },
  //           {
  //             id: 9299,
  //             aisle: 'Dried Fruits;Produce;Baking',
  //             image: 'raisins.jpg',
  //             consistency: 'solid',
  //             name: 'raisins',
  //             original: '20 grams raisins',
  //             originalString: '20 grams raisins',
  //             originalName: 'raisins',
  //             amount: 20,
  //             unit: 'grams',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 0.705,
  //                 unitShort: 'oz',
  //                 unitLong: 'ounces'
  //               },
  //               metric: {
  //                 amount: 20,
  //                 unitShort: 'g',
  //                 unitLong: 'grams'
  //               }
  //             }
  //           },
  //           {
  //             id: 19336,
  //             aisle: 'Baking',
  //             image: 'powdered-sugar.jpg',
  //             consistency: 'solid',
  //             name: 'powdered sugar',
  //             original: 'powdered sugar, to dust',
  //             originalString: 'powdered sugar, to dust',
  //             originalName: 'powdered sugar, to dust',
  //             amount: 1,
  //             unit: 'serving',
  //             meta: [],
  //             metaInformation: [],
  //             measures: {
  //               us: {
  //                 amount: 1,
  //                 unitShort: 'serving',
  //                 unitLong: 'serving'
  //               },
  //               metric: {
  //                 amount: 1,
  //                 unitShort: 'serving',
  //                 unitLong: 'serving'
  //               }
  //             }
  //           }
  //         ],
  //         id: 639865,
  //         title: 'Coffee Cookies',
  //         readyInMinutes: 45,
  //         servings: 16,
  //         sourceUrl: 'https://www.foodista.com/recipe/7FD6YGWV/coffee-cookies',
  //         image: 'https://spoonacular.com/recipeImages/639865-556x370.jpg',
  //         imageType: 'jpg',
  //         summary: 'If you have around <b>approximately 45 minutes</b> to spend in the kitchen, Coffee Cookies might be a super <b>dairy free</b> recipe to try. One serving contains <b>81 calories</b>, <b>1g of protein</b>, and <b>5g of fat</b>. For <b>13 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. This recipe serves 16. A few people made this recipe, and 13 would say it hit the spot. It works well as a dessert. A mixture of canolan oil, water, raisins, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular <b>score of 4%</b>, this dish is very bad (but still fixable). Try <a href="https://spoonacular.com/recipes/coffee-cookies-627023">Coffee Cookies</a>, <a href="https://spoonacular.com/recipes/coffee-bean-cookies-54727">Coffee Bean Cookies</a>, and <a href="https://spoonacular.com/recipes/coffee-cake-cookies-631238">Coffee Cake Cookies</a> for similar recipes.',
  //         cuisines: [],
  //         dishTypes: [
  //           'dessert'
  //         ],
  //         diets: [
  //           'dairy free'
  //         ],
  //         occasions: [],
  //         winePairing: {
  //           pairedWines: [
  //             'cream sherry',
  //             'madeira',
  //             'prosecco'
  //           ],
  //           pairingText: 'Cookies on the menu? Try pairing with Cream Sherry, Madeira, and Prosecco. Sweet bubbly Prosecco doesn\'t overwhelm simple sugar or shortbread cookies, a sweet cream sherry complements spiced cookies, and madeira\'s nutty notes match cookies with nuts perfectly. One wine you could try is NV Johnson Estate Cream Sherry. It has 5 out of 5 stars and a bottle costs about 19 dollars.',
  //           productMatches: [
  //             {
  //               id: 430626,
  //               title: 'NV Johnson Estate Cream Sherry',
  //               description: 'Very aromatic with notes of hazelnut, vanilla, and a touch of oak followed by sweet raisins and a touch of yeast. Clean lasting finish. Good now but will reward those allow it to age"". A favorite pre-prandial beverage. Consider it with nuts before dinner as an aperitif, or after dinner with dessert, especially chocolates and fruit-based desserts. Also wonderful on cold afternoons, served with biscotti to dip in ""Italian-style"". "',
  //               price: '$19.49',
  //               imageUrl: 'https://spoonacular.com/productImages/430626-312x231.jpg',
  //               averageRating: 1,
  //               ratingCount: 2,
  //               score: 0.8571428571428572,
  //               link: 'https://www.amazon.com/Johnson-Estate-Cream-Sherry-750/dp/B00D3GQSRW?tag=spoonacular-20'
  //             }
  //           ]
  //         },
  //         instructions: 'Preheat oven to 350 degrees F and line a cookie sheet with parchment paper.\nPut the cake flour, sugar, coffee, walnuts, and salt in a food processor and process for about 10 seconds (or until the walnuts are well grounded).\nNow put the mixture into a mixing bowl and add canola oil. Form a pasty dough, then separate the dough with your hands to form small crumbs. Add the water and form into a clean dough. If you like raisins, you can combine it with the dough now.\nDivide the dough into 16 pieces and roll each piece into a ball. Put each ball on a cookie sheet and bake at 350 degrees F for 25 minutes.\nLet the cookies cool for about 20 minutes. Dust with powdered sugar before serving.',
  //         analyzedInstructions: [
  //           {
  //             name: '',
  //             steps: [
  //               {
  //                 number: 1,
  //                 step: 'Preheat oven to 350 degrees F and line a cookie sheet with parchment paper.',
  //                 ingredients: [],
  //                 equipment: [
  //                   {
  //                     id: 404770,
  //                     name: 'baking paper',
  //                     localizedName: 'baking paper',
  //                     image: 'baking-paper.jpg'
  //                   },
  //                   {
  //                     id: 404727,
  //                     name: 'baking sheet',
  //                     localizedName: 'baking sheet',
  //                     image: 'baking-sheet.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg',
  //                     temperature: {
  //                       number: 350,
  //                       unit: 'Fahrenheit'
  //                     }
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 2,
  //                 step: 'Put the cake flour, sugar, coffee, walnuts, and salt in a food processor and process for about 10 seconds (or until the walnuts are well grounded).',
  //                 ingredients: [
  //                   {
  //                     id: 10020129,
  //                     name: 'cake flour',
  //                     localizedName: 'cake flour',
  //                     image: 'flour.png'
  //                   },
  //                   {
  //                     id: 12155,
  //                     name: 'walnuts',
  //                     localizedName: 'walnuts',
  //                     image: 'walnuts.jpg'
  //                   },
  //                   {
  //                     id: 19335,
  //                     name: 'sugar',
  //                     localizedName: 'sugar',
  //                     image: 'sugar-in-bowl.png'
  //                   },
  //                   {
  //                     id: 2047,
  //                     name: 'salt',
  //                     localizedName: 'salt',
  //                     image: 'salt.jpg'
  //                   }
  //                 ],
  //                 equipment: [
  //                   {
  //                     id: 404771,
  //                     name: 'food processor',
  //                     localizedName: 'food processor',
  //                     image: 'food-processor.png'
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 3,
  //                 step: 'Now put the mixture into a mixing bowl and add canola oil. Form a pasty dough, then separate the dough with your hands to form small crumbs.',
  //                 ingredients: [
  //                   {
  //                     id: 1014582,
  //                     name: 'canola oil',
  //                     localizedName: 'canola oil',
  //                     image: 'vegetable-oil.jpg'
  //                   }
  //                 ],
  //                 equipment: [
  //                   {
  //                     id: 405907,
  //                     name: 'mixing bowl',
  //                     localizedName: 'mixing bowl',
  //                     image: 'mixing-bowl.jpg'
  //                   }
  //                 ]
  //               },
  //               {
  //                 number: 4,
  //                 step: 'Add the water and form into a clean dough. If you like raisins, you can combine it with the dough now.',
  //                 ingredients: [
  //                   {
  //                     id: 9299,
  //                     name: 'raisins',
  //                     localizedName: 'raisins',
  //                     image: 'raisins.jpg'
  //                   },
  //                   {
  //                     id: 14412,
  //                     name: 'water',
  //                     localizedName: 'water',
  //                     image: 'water.png'
  //                   }
  //                 ],
  //                 equipment: []
  //               },
  //               {
  //                 number: 5,
  //                 step: 'Divide the dough into 16 pieces and roll each piece into a ball. Put each ball on a cookie sheet and bake at 350 degrees F for 25 minutes.',
  //                 ingredients: [],
  //                 equipment: [
  //                   {
  //                     id: 404727,
  //                     name: 'baking sheet',
  //                     localizedName: 'baking sheet',
  //                     image: 'baking-sheet.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg'
  //                   },
  //                   {
  //                     id: 404784,
  //                     name: 'oven',
  //                     localizedName: 'oven',
  //                     image: 'oven.jpg',
  //                     temperature: {
  //                       number: 350,
  //                       unit: 'Fahrenheit'
  //                     }
  //                   }
  //                 ],
  //                 length: {
  //                   number: 25,
  //                   unit: 'minutes'
  //                 }
  //               },
  //               {
  //                 number: 6,
  //                 step: 'Let the cookies cool for about 20 minutes. Dust with powdered sugar before serving.',
  //                 ingredients: [
  //                   {
  //                     id: 19336,
  //                     name: 'powdered sugar',
  //                     localizedName: 'powdered sugar',
  //                     image: 'powdered-sugar.jpg'
  //                   }
  //                 ],
  //                 equipment: [],
  //                 length: {
  //                   number: 20,
  //                   unit: 'minutes'
  //                 }
  //               }
  //             ]
  //           }
  //         ],
  //         originalId: null,
  //         spoonacularSourceUrl: 'https://spoonacular.com/coffee-cookies-639865'
  //       }
  //     ]
  //   }
  // ];

  private recipes: Array<Recipe> = [
    {
      recipes: [
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 20,
          gaps: 'no',
          lowFodmap: false,
          aggregateLikes: 72,
          spoonacularScore: 92,
          healthScore: 38,
          creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
          license: 'CC BY 3.0',
          sourceName: 'Foodista',
          pricePerServing: 324.48,
          extendedIngredients: [
            {
              id: 14003,
              aisle: 'Alcoholic Beverages',
              image: 'beer.jpg',
              consistency: 'liquid',
              name: 'beer',
              original: '1/4 cup beer or white wine',
              originalString: '1/4 cup beer or white wine',
              originalName: 'beer or white wine',
              amount: 0.25,
              unit: 'cup',
              meta: [
                'white'
              ],
              metaInformation: [
                'white'
              ],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 59.147,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 14003,
              aisle: 'Alcoholic Beverages',
              image: 'beer.jpg',
              consistency: 'liquid',
              name: 'beer',
              original: '12 ounces can of your favorite beer (I sugggest Hefeweizen\'s complementary fruity flavor)',
              originalString: '12 ounces can of your favorite beer (I sugggest Hefeweizen\'s complementary fruity flavor)',
              originalName: 'your favorite beer (I sugggest Hefeweizen\'s complementary fruity flavor)',
              amount: 12,
              unit: 'ounces',
              meta: [
                'fruity',
                'your favorite',
                'canned',
                '(I sugggest Hefeweizen\'s complementary flavor)'
              ],
              metaInformation: [
                'fruity',
                'your favorite',
                'canned',
                '(I sugggest Hefeweizen\'s complementary flavor)'
              ],
              measures: {
                us: {
                  amount: 12,
                  unitShort: 'oz',
                  unitLong: 'ounces'
                },
                metric: {
                  amount: 340.194,
                  unitShort: 'g',
                  unitLong: 'grams'
                }
              }
            },
            {
              id: 11090,
              aisle: 'Produce',
              image: 'broccoli.jpg',
              consistency: 'solid',
              name: 'broccoli',
              original: 'Large head broccoli',
              originalString: 'Large head broccoli',
              originalName: 'Large broccoli',
              amount: 1,
              unit: 'head',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'head',
                  unitLong: 'head'
                },
                metric: {
                  amount: 1,
                  unitShort: 'head',
                  unitLong: 'head'
                }
              }
            },
            {
              id: 20040,
              aisle: 'Pasta and Rice',
              image: 'uncooked-brown-rice.png',
              consistency: 'solid',
              name: 'brown rice',
              original: '1 1/2 cups slow cook brown rice',
              originalString: '1 1/2 cups slow cook brown rice',
              originalName: 'slow cook brown rice',
              amount: 1.5,
              unit: 'cups',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1.5,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 354.882,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 9070,
              aisle: 'Produce',
              image: 'cherries.jpg',
              consistency: 'solid',
              name: 'cherry',
              original: '12 cherry tomotoes',
              originalString: '12 cherry tomotoes',
              originalName: 'cherry tomotoes',
              amount: 12,
              unit: '',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 12,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 12,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 1002046,
              aisle: 'Condiments',
              image: 'dijon-mustard.jpg',
              consistency: 'liquid',
              name: 'dijon mustard',
              original: '3/4 cup Dijon mustard',
              originalString: '3/4 cup Dijon mustard',
              originalName: 'Dijon mustard',
              amount: 0.75,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.75,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 177.441,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 11216,
              aisle: 'Produce;Ethnic Foods;Spices and Seasonings',
              image: 'ginger.png',
              consistency: 'solid',
              name: 'fresh ginger',
              original: '1 tablespoon fresh ginger or 1 tbsp wet ginger from a jar (no powder!)',
              originalString: '1 tablespoon fresh ginger or 1 tbsp wet ginger from a jar (no powder!)',
              originalName: 'fresh ginger or 1 tbsp wet ginger from a jar (no powder!)',
              amount: 1,
              unit: 'tablespoon',
              meta: [
                'fresh',
                '(no powder!)'
              ],
              metaInformation: [
                'fresh',
                '(no powder!)'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'Tbsp',
                  unitLong: 'Tbsp'
                },
                metric: {
                  amount: 1,
                  unitShort: 'Tbsp',
                  unitLong: 'Tbsp'
                }
              }
            },
            {
              id: 11215,
              aisle: 'Produce',
              image: 'garlic.png',
              consistency: 'solid',
              name: 'garlic',
              original: '1 tablespoon clove fresh garlic (minced) or 1 wet garlic from a jar (no powder!)',
              originalString: '1 tablespoon clove fresh garlic (minced) or 1 wet garlic from a jar (no powder!)',
              originalName: 'fresh garlic (minced) or 1 wet garlic from a jar (no powder!)',
              amount: 1,
              unit: 'tablespoon',
              meta: [
                'fresh',
                'minced',
                '()',
                '(no powder!)'
              ],
              metaInformation: [
                'fresh',
                'minced',
                '()',
                '(no powder!)'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'Tbsp',
                  unitLong: 'Tbsp'
                },
                metric: {
                  amount: 1,
                  unitShort: 'Tbsp',
                  unitLong: 'Tbsp'
                }
              }
            },
            {
              id: 11333,
              aisle: 'Produce',
              image: 'green-pepper.jpg',
              consistency: 'solid',
              name: 'green bell pepper',
              original: '1 green pepper',
              originalString: '1 green pepper',
              originalName: 'green pepper',
              amount: 1,
              unit: '',
              meta: [
                'green'
              ],
              metaInformation: [
                'green'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 1,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 1002030,
              aisle: 'Spices and Seasonings',
              image: 'pepper.jpg',
              consistency: 'solid',
              name: 'ground pepper',
              original: '2 tablespoons fresh ground pepper',
              originalString: '2 tablespoons fresh ground pepper',
              originalName: 'fresh ground pepper',
              amount: 2,
              unit: 'tablespoons',
              meta: [
                'fresh'
              ],
              metaInformation: [
                'fresh'
              ],
              measures: {
                us: {
                  amount: 2,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                },
                metric: {
                  amount: 2,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                }
              }
            },
            {
              id: 9150,
              aisle: 'Produce',
              image: 'lemon.png',
              consistency: 'solid',
              name: 'lemon',
              original: '1 juicy lemon',
              originalString: '1 juicy lemon',
              originalName: 'juicy lemon',
              amount: 1,
              unit: '',
              meta: [
                'juicy'
              ],
              metaInformation: [
                'juicy'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 1,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 16424,
              aisle: 'Ethnic Foods;Condiments',
              image: 'soy-sauce.jpg',
              consistency: 'liquid',
              name: 'low sodium soy sauce',
              original: '1/4 cup low sodium soy sauce',
              originalString: '1/4 cup low sodium soy sauce',
              originalName: 'low sodium soy sauce',
              amount: 0.25,
              unit: 'cup',
              meta: [
                'low sodium'
              ],
              metaInformation: [
                'low sodium'
              ],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 59.147,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 19304,
              aisle: 'Baking',
              image: 'molasses.jpg',
              consistency: 'solid',
              name: 'molasses',
              original: '2 tablespoons molasses',
              originalString: '2 tablespoons molasses',
              originalName: 'molasses',
              amount: 2,
              unit: 'tablespoons',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                },
                metric: {
                  amount: 2,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                }
              }
            },
            {
              id: 11260,
              aisle: 'Produce',
              image: 'mushrooms.png',
              consistency: 'solid',
              name: 'mushrooms',
              original: '12 bite sized mushrooms',
              originalString: '12 bite sized mushrooms',
              originalName: 'bite sized mushrooms',
              amount: 12,
              unit: '',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 12,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 12,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 4053,
              aisle: 'Oil, Vinegar, Salad Dressing',
              image: 'olive-oil.jpg',
              consistency: 'liquid',
              name: 'olive oil',
              original: '1/4 cup olive oil',
              originalString: '1/4 cup olive oil',
              originalName: 'olive oil',
              amount: 0.25,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 59.147,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 9200,
              aisle: 'Produce',
              image: 'orange.png',
              consistency: 'solid',
              name: 'orange',
              original: '1 large orange',
              originalString: '1 large orange',
              originalName: 'orange',
              amount: 1,
              unit: 'large',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'large',
                  unitLong: 'large'
                },
                metric: {
                  amount: 1,
                  unitShort: 'large',
                  unitLong: 'large'
                }
              }
            },
            {
              id: 9206,
              aisle: 'Beverages',
              image: 'orange-juice.jpg',
              consistency: 'liquid',
              name: 'orange juice',
              original: '1/2 cup orange juice (or tablespoon/mash another orange',
              originalString: '1/2 cup orange juice (or tablespoon/mash another orange',
              originalName: 'orange juice (or tablespoon/mash another orange',
              amount: 0.5,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 118.294,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 1002030,
              aisle: 'Spices and Seasonings',
              image: 'pepper.jpg',
              consistency: 'solid',
              name: 'pepper',
              original: '1/2 teaspoon pepper',
              originalString: '1/2 teaspoon pepper',
              originalName: 'pepper',
              amount: 0.5,
              unit: 'teaspoon',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                },
                metric: {
                  amount: 0.5,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                }
              }
            },
            {
              id: 11821,
              aisle: 'Produce',
              image: 'red-pepper.jpg',
              consistency: 'solid',
              name: 'red bell pepper',
              original: '1 red pepper',
              originalString: '1 red pepper',
              originalName: 'red pepper',
              amount: 1,
              unit: '',
              meta: [
                'red'
              ],
              metaInformation: [
                'red'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 1,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 10011282,
              aisle: 'Produce',
              image: 'red-onion.png',
              consistency: 'solid',
              name: 'red onion',
              original: '1 red onion',
              originalString: '1 red onion',
              originalName: 'red onion',
              amount: 1,
              unit: '',
              meta: [
                'red'
              ],
              metaInformation: [
                'red'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 1,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 4114,
              aisle: 'Oil, Vinegar, Salad Dressing',
              image: 'italian-dressing.jpg',
              consistency: 'liquid',
              name: 'salad dressing',
              original: '1/2 cup Newman\'s Own Low-Fat Italian Salad Dressing',
              originalString: '1/2 cup Newman\'s Own Low-Fat Italian Salad Dressing',
              originalName: 'Newman\'s Own Low-Fat Italian Salad Dressing',
              amount: 0.5,
              unit: 'cup',
              meta: [
                'italian',
                'low-fat'
              ],
              metaInformation: [
                'italian',
                'low-fat'
              ],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 118.294,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 2047,
              aisle: 'Spices and Seasonings',
              image: 'salt.jpg',
              consistency: 'solid',
              name: 'salt',
              original: '1 tablespoon salt',
              originalString: '1 tablespoon salt',
              originalName: 'salt',
              amount: 1,
              unit: 'tablespoon',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'Tbsp',
                  unitLong: 'Tbsp'
                },
                metric: {
                  amount: 1,
                  unitShort: 'Tbsp',
                  unitLong: 'Tbsp'
                }
              }
            },
            {
              id: 6168,
              aisle: 'Condiments',
              image: 'hot-sauce-or-tabasco.png',
              consistency: 'liquid',
              name: 'tabasco sauce',
              original: '2 tablespoons Sriracha or Tabasco sauce',
              originalString: '2 tablespoons Sriracha or Tabasco sauce',
              originalName: 'Sriracha or Tabasco sauce',
              amount: 2,
              unit: 'tablespoons',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                },
                metric: {
                  amount: 2,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                }
              }
            },
            {
              id: 14412,
              aisle: 'Beverages',
              image: 'water.png',
              consistency: 'liquid',
              name: 'water',
              original: '3 1/2 cups water',
              originalString: '3 1/2 cups water',
              originalName: 'water',
              amount: 3.5,
              unit: 'cups',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 3.5,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 828.058,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 14106,
              aisle: 'Alcoholic Beverages',
              image: 'white-wine.jpg',
              consistency: 'liquid',
              name: 'white wine',
              original: '1/4 cup white wine',
              originalString: '1/4 cup white wine',
              originalName: 'white wine',
              amount: 0.25,
              unit: 'cup',
              meta: [
                'white'
              ],
              metaInformation: [
                'white'
              ],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 59.147,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 5006,
              aisle: 'Meat',
              image: 'whole-chicken.jpg',
              consistency: 'solid',
              name: 'whole chicken',
              original: '1 whole chicken (about 3 lbs)',
              originalString: '1 whole chicken (about 3 lbs)',
              originalName: 'whole chicken (about',
              amount: 3,
              unit: 'lbs',
              meta: [
                'whole'
              ],
              metaInformation: [
                'whole'
              ],
              measures: {
                us: {
                  amount: 3,
                  unitShort: 'lb',
                  unitLong: 'pounds'
                },
                metric: {
                  amount: 1.361,
                  unitShort: 'kilogram',
                  unitLong: 'kilograms'
                }
              }
            },
            {
              id: null,
              aisle: '?',
              image: null,
              consistency: null,
              name: 'wooden skewers',
              original: 'Wooden skewers',
              originalString: 'Wooden skewers',
              originalName: 'Wooden skewers',
              amount: 6,
              unit: 'servings',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 6,
                  unitShort: 'servings',
                  unitLong: 'servings'
                },
                metric: {
                  amount: 6,
                  unitShort: 'servings',
                  unitLong: 'servings'
                }
              }
            }
          ],
          id: 635675,
          title: 'Boozy Bbq Chicken',
          readyInMinutes: 45,
          servings: 6,
          sourceUrl: 'http://www.foodista.com/recipe/2ZPN8F4S/boozy-bbq-chicken',
          image: 'https://spoonacular.com/recipeImages/635675-556x370.jpg',
          imageType: 'jpg',
          summary: 'The recipe Boozy Bbq Chicken could satisfy your American craving in approximately <b>45 minutes</b>. Watching your figure? This gluten free and dairy free recipe has <b>710 calories</b>, <b>32g of protein</b>, and <b>33g of fat</b> per serving. For <b>$3.23 per serving</b>, you get a main course that serves 6. This recipe from Foodista has 72 fans. If you have garlic, tabasco sauce, chicken, and a few other ingredients on hand, you can make it. To use up the beer you could follow this main course with the <a href="https://spoonacular.com/recipes/guinness-whiskey-irish-cream-cupcakes-508129">Guinness, Whiskey & Irish Cream Cupcakes</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 93%</b>. This score is awesome. Try <a href="https://spoonacular.com/recipes/the-best-bbq-chicken-marinade-908666">The BEST BBQ Chicken Marinade</a>, <a href="https://spoonacular.com/recipes/bbq-cheddar-chicken-925478">BBQ Cheddar Chicken</a>, and <a href="https://spoonacular.com/recipes/bbq-chicken-chopped-salad-923920">BBQ Chicken Chopped Salad</a> for similar recipes.',
          cuisines: [],
          dishTypes: [
            'beverage',
            'drink'
          ],
          diets: [
            'gluten free',
            'dairy free'
          ],
          occasions: [],
          winePairing: {},
          instructions: '<ol><li>DIRECTIONS:</li><li>Open beer start to drink.</li><li>Soak wooden skewers in a shallow dish filled with water. In a large glass or ceramic dish, mix orange juice, olive oil, wine, soy sauce, Sriracha or Tabasco sauce, molasses, garlic, ginger and pepper.</li><li>Cut orange, peppers, onion & broccoli into large bite-sized chunks (at least 1" thick) and place in the dish.</li><li>Add mushrooms and tomatoes.</li><li>Stir veggies in marinade to coat.</li><li>Cover and refrigerate while you prep chicken.</li><li>Warm outdoor grill to medium heat.</li><li>Rinse chicken and pat dry with paper towel (toss that towel!).</li><li>In small bowl mix mustard, salt and pepper. Brush chicken with mustard mixture.</li><li>Wash your hands and go stir those veggies so all sides absorb the marinade.</li><li>When beer is half empty, refill can with salad dressing and squeeze in juice from 1/2 lemon.</li><li>Put can on a disposable baking sheet. Place upright chicken on can like a stand, inserting can into cavity of chicken.</li><li>Place baking sheet with beer and chicken on the preheated grill.</li><li>Cover. Set your time for 1 hour.</li><li>Start on a second beer or that remaining white wine.</li><li>In a medium saucepan, pour rice, water, and 3-4 splashes of your beverage (about 1/4 cup) into medium sauce pan.</li><li>Bring to a boil, stir and reduce heat to low.</li><li>Cover with lid and cook for 25-30 minutes.</li><li>Back to the kebabs.</li><li>Remove veggies from fridge and using the sharp end of the skewer begin threading.</li><li>Distribute veggies evenly onto 6-8 skewers.</li><li>Check rice: It\'s done when all liquid is absorbed but before it starts sticking to the bottom of the pan.</li><li>Turn off heat under the rice and let it sit.</li><li>Go back to grill.</li><li>You should be at about an hour on the chicken.</li><li>Carefully slice in to see meat has gone from pink to white.</li><li>Remove from grill</li><li>Allow to cool for at least 15 minutes so you don\'t burn the hell out of yourself cutting it into pieces for your guest(s).</li><li>In the meantime throw those kebabs directly on the grill.</li><li>Flip them over after about 5 minutes to get the other side and allow to cook for another 5-8min.</li><li>Kebabs are done when veggies are al dente (softened but still firm).</li><li>Turn off grill and remove from heat.</li><li>Put rice in a serving dish, and chicken pieces and full skewers on a platter. Squeeze remaining lemon juice over chicken.</li><li>Let people serve themselves.</li><li>Eat, drink and be merry!</li><li>DW | Food and Drink</li></ol>',
          analyzedInstructions: [
            {
              name: '',
              steps: [
                {
                  number: 1,
                  step: 'Cut orange, peppers, onion & broccoli into large bite-sized chunks (at least 1" thick) and place in the dish.',
                  ingredients: [
                    {
                      id: 11090,
                      name: 'broccoli',
                      localizedName: 'broccoli',
                      image: 'broccoli.jpg'
                    },
                    {
                      id: 10111333,
                      name: 'peppers',
                      localizedName: 'peppers',
                      image: 'green-pepper.jpg'
                    },
                    {
                      id: 9200,
                      name: 'orange',
                      localizedName: 'orange',
                      image: 'orange.png'
                    },
                    {
                      id: 11282,
                      name: 'onion',
                      localizedName: 'onion',
                      image: 'brown-onion.png'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 2,
                  step: 'Add mushrooms and tomatoes.Stir veggies in marinade to coat.Cover and refrigerate while you prep chicken.Warm outdoor grill to medium heat.Rinse chicken and pat dry with paper towel (toss that towel!).In small bowl mix mustard, salt and pepper.',
                  ingredients: [
                    {
                      id: 1102047,
                      name: 'salt and pepper',
                      localizedName: 'salt and pepper',
                      image: 'salt-and-pepper.jpg'
                    },
                    {
                      id: 11260,
                      name: 'mushrooms',
                      localizedName: 'mushrooms',
                      image: 'mushrooms.png'
                    },
                    {
                      id: 5006,
                      name: 'whole chicken',
                      localizedName: 'whole chicken',
                      image: 'whole-chicken.jpg'
                    },
                    {
                      id: 2046,
                      name: 'mustard',
                      localizedName: 'mustard',
                      image: 'regular-mustard.jpg'
                    }
                  ],
                  equipment: [
                    {
                      id: 405895,
                      name: 'paper towels',
                      localizedName: 'paper towels',
                      image: 'paper-towels.jpg'
                    },
                    {
                      id: 404706,
                      name: 'grill',
                      localizedName: 'grill',
                      image: 'grill.jpg'
                    },
                    {
                      id: 404783,
                      name: 'bowl',
                      localizedName: 'bowl',
                      image: 'bowl.jpg'
                    }
                  ]
                },
                {
                  number: 3,
                  step: 'Brush chicken with mustard mixture.Wash your hands and go stir those veggies so all sides absorb the marinade.When beer is half empty, refill can with salad dressing and squeeze in juice from 1/2 lemon.Put can on a disposable baking sheet.',
                  ingredients: [
                    {
                      id: 4114,
                      name: 'salad dressing',
                      localizedName: 'salad dressing',
                      image: 'italian-dressing.jpg'
                    },
                    {
                      id: 5006,
                      name: 'whole chicken',
                      localizedName: 'whole chicken',
                      image: 'whole-chicken.jpg'
                    },
                    {
                      id: 2046,
                      name: 'mustard',
                      localizedName: 'mustard',
                      image: 'regular-mustard.jpg'
                    },
                    {
                      id: 9150,
                      name: 'lemon',
                      localizedName: 'lemon',
                      image: 'lemon.png'
                    },
                    {
                      id: 14003,
                      name: 'beer',
                      localizedName: 'beer',
                      image: 'beer.jpg'
                    }
                  ],
                  equipment: [
                    {
                      id: 404727,
                      name: 'baking sheet',
                      localizedName: 'baking sheet',
                      image: 'baking-sheet.jpg'
                    }
                  ]
                },
                {
                  number: 4,
                  step: 'Place upright chicken on can like a stand, inserting can into cavity of chicken.',
                  ingredients: [
                    {
                      id: 5006,
                      name: 'whole chicken',
                      localizedName: 'whole chicken',
                      image: 'whole-chicken.jpg'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 5,
                  step: 'Place baking sheet with beer and chicken on the preheated grill.Cover. Set your time for 1 hour.Start on a second beer or that remaining white wine.In a medium saucepan, pour rice, water, and 3-4 splashes of your beverage (about 1/4 cup) into medium sauce pan.Bring to a boil, stir and reduce heat to low.Cover with lid and cook for 25-30 minutes.Back to the kebabs.',
                  ingredients: [
                    {
                      id: 14106,
                      name: 'white wine',
                      localizedName: 'white wine',
                      image: 'white-wine.jpg'
                    },
                    {
                      id: 5006,
                      name: 'whole chicken',
                      localizedName: 'whole chicken',
                      image: 'whole-chicken.jpg'
                    },
                    {
                      id: 14412,
                      name: 'water',
                      localizedName: 'water',
                      image: 'water.png'
                    },
                    {
                      id: 14003,
                      name: 'beer',
                      localizedName: 'beer',
                      image: 'beer.jpg'
                    }
                  ],
                  equipment: [
                    {
                      id: 404727,
                      name: 'baking sheet',
                      localizedName: 'baking sheet',
                      image: 'baking-sheet.jpg'
                    },
                    {
                      id: 404669,
                      name: 'sauce pan',
                      localizedName: 'sauce pan',
                      image: 'sauce-pan.jpg'
                    },
                    {
                      id: 404706,
                      name: 'grill',
                      localizedName: 'grill',
                      image: 'grill.jpg'
                    }
                  ],
                  length: {
                    number: 90,
                    unit: 'minutes'
                  }
                },
                {
                  number: 6,
                  step: 'Remove veggies from fridge and using the sharp end of the skewer begin threading.Distribute veggies evenly onto 6-8 skewers.Check rice: It\'s done when all liquid is absorbed but before it starts sticking to the bottom of the pan.Turn off heat under the rice and let it sit.Go back to grill.You should be at about an hour on the chicken.Carefully slice in to see meat has gone from pink to white.',
                  ingredients: [
                    {
                      id: 5006,
                      name: 'whole chicken',
                      localizedName: 'whole chicken',
                      image: 'whole-chicken.jpg'
                    }
                  ],
                  equipment: [
                    {
                      id: 3065,
                      name: 'skewers',
                      localizedName: 'skewers',
                      image: 'wooden-skewers.jpg'
                    },
                    {
                      id: 404706,
                      name: 'grill',
                      localizedName: 'grill',
                      image: 'grill.jpg'
                    },
                    {
                      id: 404645,
                      name: 'frying pan',
                      localizedName: 'frying pan',
                      image: 'pan.png'
                    }
                  ]
                },
                {
                  number: 7,
                  step: 'Remove from grill',
                  ingredients: [],
                  equipment: [
                    {
                      id: 404706,
                      name: 'grill',
                      localizedName: 'grill',
                      image: 'grill.jpg'
                    }
                  ]
                },
                {
                  number: 8,
                  step: 'Allow to cool for at least 15 minutes so you don\'t burn the hell out of yourself cutting it into pieces for your guest(s).In the meantime throw those kebabs directly on the grill.Flip them over after about 5 minutes to get the other side and allow to cook for another 5-8min.Kebabs are done when veggies are al dente (softened but still firm).Turn off grill and remove from heat.Put rice in a serving dish, and chicken pieces and full skewers on a platter. Squeeze remaining lemon juice over chicken.',
                  ingredients: [
                    {
                      id: 1005006,
                      name: 'chicken pieces',
                      localizedName: 'chicken pieces',
                      image: 'chicken-parts.jpg'
                    },
                    {
                      id: 5006,
                      name: 'whole chicken',
                      localizedName: 'whole chicken',
                      image: 'whole-chicken.jpg'
                    }
                  ],
                  equipment: [
                    {
                      id: 3065,
                      name: 'skewers',
                      localizedName: 'skewers',
                      image: 'wooden-skewers.jpg'
                    },
                    {
                      id: 404706,
                      name: 'grill',
                      localizedName: 'grill',
                      image: 'grill.jpg'
                    }
                  ],
                  length: {
                    number: 28,
                    unit: 'minutes'
                  }
                },
                {
                  number: 9,
                  step: 'Let people serve themselves.Eat, drink and be merry!DW | Food and Drink',
                  ingredients: [],
                  equipment: []
                }
              ]
            }
          ],
          originalId: null,
          spoonacularSourceUrl: 'https://spoonacular.com/boozy-bbq-chicken-635675'
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 31,
          gaps: 'no',
          lowFodmap: false,
          aggregateLikes: 23,
          spoonacularScore: 59,
          healthScore: 11,
          creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
          license: 'CC BY 3.0',
          sourceName: 'Foodista',
          pricePerServing: 238.41,
          extendedIngredients: [
            {
              id: 1077,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'milk.png',
              consistency: 'liquid',
              name: 'whole milk',
              original: '2 cups whole milk',
              originalString: '2 cups whole milk',
              originalName: 'whole milk',
              amount: 2,
              unit: 'cups',
              meta: [
                'whole'
              ],
              metaInformation: [
                'whole'
              ],
              measures: {
                us: {
                  amount: 2,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 473.176,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 19335,
              aisle: 'Baking',
              image: 'sugar-in-bowl.png',
              consistency: 'solid',
              name: 'sugar',
              original: '3/4 cup sugar',
              originalString: '3/4 cup sugar',
              originalName: 'sugar',
              amount: 0.75,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.75,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 177.441,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 2050,
              aisle: 'Baking',
              image: 'vanilla-extract.jpg',
              consistency: 'liquid',
              name: 'vanilla extract',
              original: '1/2 teaspoon vanilla extract',
              originalString: '1/2 teaspoon vanilla extract',
              originalName: 'vanilla extract',
              amount: 0.5,
              unit: 'teaspoon',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                },
                metric: {
                  amount: 0.5,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                }
              }
            },
            {
              id: 1125,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'egg-yolk.jpg',
              consistency: 'solid',
              name: 'egg yolks',
              original: '4 large egg yolks',
              originalString: '4 large egg yolks',
              originalName: 'egg yolks',
              amount: 4,
              unit: 'large',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 4,
                  unitShort: 'large',
                  unitLong: 'larges'
                },
                metric: {
                  amount: 4,
                  unitShort: 'large',
                  unitLong: 'larges'
                }
              }
            },
            {
              id: 1118,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'white-cream.png',
              consistency: 'liquid',
              name: 'skim milk yogurt',
              original: '1 cup plain whole-milk yogurt',
              originalString: '1 cup plain whole-milk yogurt',
              originalName: 'plain whole-milk yogurt',
              amount: 1,
              unit: 'cup',
              meta: [
                'plain'
              ],
              metaInformation: [
                'plain'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'cup',
                  unitLong: 'cup'
                },
                metric: {
                  amount: 236.588,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 9037,
              aisle: 'Produce',
              image: 'avocado.jpg',
              consistency: 'solid',
              name: 'avocados',
              original: '2 medium, firm-ripe avocados (6 to 7 oz. each), peeled, pitted',
              originalString: '2 medium, firm-ripe avocados (6 to 7 oz. each), peeled, pitted',
              originalName: 'medium, firm-ripe avocados each), peeled, pitted',
              amount: 12,
              unit: 'oz',
              meta: [
                'pitted',
                'peeled'
              ],
              metaInformation: [
                'pitted',
                'peeled'
              ],
              measures: {
                us: {
                  amount: 12,
                  unitShort: 'oz',
                  unitLong: 'ounces'
                },
                metric: {
                  amount: 340.194,
                  unitShort: 'g',
                  unitLong: 'grams'
                }
              }
            },
            {
              id: 9152,
              aisle: 'Produce',
              image: 'lemon-juice.jpg',
              consistency: 'liquid',
              name: 'lemon juice',
              original: '1/2 tablespoon lemon juice',
              originalString: '1/2 tablespoon lemon juice',
              originalName: 'lemon juice',
              amount: 0.5,
              unit: 'tablespoon',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                },
                metric: {
                  amount: 0.5,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                }
              }
            },
            {
              id: 19903,
              aisle: 'Sweet Snacks',
              image: 'dark-chocolate-pieces.jpg',
              consistency: 'solid',
              name: 'bittersweet chocolate',
              original: 'cup chopped bittersweet chocolate (60- 70% cacao)',
              originalString: 'cup chopped bittersweet chocolate (60- 70% cacao)',
              originalName: 'chopped bittersweet chocolate (60- 70% cacao)',
              amount: 1,
              unit: 'cup',
              meta: [
                '70%',
                'chopped',
                '(60- cacao)'
              ],
              metaInformation: [
                '70%',
                'chopped',
                '(60- cacao)'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'cup',
                  unitLong: 'cup'
                },
                metric: {
                  amount: 236.588,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 1095,
              aisle: 'Baking',
              image: 'evaporated-milk.png',
              consistency: 'solid',
              name: 'sweetened condensed milk',
              original: 'Sweetened condensed milk for drizzling, optional',
              originalString: 'Sweetened condensed milk for drizzling, optional',
              originalName: 'Sweetened condensed milk for drizzling, optional',
              amount: 1,
              unit: 'serving',
              meta: [
                'sweetened',
                'for drizzling, optional'
              ],
              metaInformation: [
                'sweetened',
                'for drizzling, optional'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'serving',
                  unitLong: 'serving'
                },
                metric: {
                  amount: 1,
                  unitShort: 'serving',
                  unitLong: 'serving'
                }
              }
            }
          ],
          id: 633139,
          title: 'Avocado Chocolate Bits Frozen Yogurt',
          readyInMinutes: 45,
          servings: 4,
          sourceUrl: 'https://www.foodista.com/recipe/4RLKWMW5/avocado-chocolate-bits-frozen-yogurt',
          image: 'https://spoonacular.com/recipeImages/633139-556x370.jpg',
          imageType: 'jpg',
          summary: 'Avocado Chocolate Bits Frozen Yogurt is a <b>gluten free</b> dessert. This recipe makes 4 servings with <b>701 calories</b>, <b>14g of protein</b>, and <b>38g of fat</b> each. For <b>$2.38 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires whole-milk yogurt, lemon juice, condensed milk, and egg yolks. A couple people made this recipe, and 23 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. With a spoonacular <b>score of 59%</b>, this dish is solid. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/avocado-frozen-yogurt-21329">Avocado Frozen Yogurt</a>, <a href="https://spoonacular.com/recipes/confession-77-i-am-a-frozen-yogurt-addict-greek-frozen-yogurt-542430">Confession #77: I am a Frozen Yogurt addict… Greek Frozen Yogurt</a>, and <a href="https://spoonacular.com/recipes/chocolate-frozen-yogurt-546747">Chocolate Frozen Yogurt</a>.',
          cuisines: [],
          dishTypes: [
            'dessert'
          ],
          diets: [
            'gluten free'
          ],
          occasions: [],
          winePairing: {
            pairedWines: [
              'cream sherry',
              'moscato dasti',
              'port'
            ],
            pairingText: 'Cream Sherry, Moscato d\'Asti, and Port are great choices for Yogurt. A common wine pairing rule is to make sure your wine is sweeter than your food. Delicate desserts go well with Moscato d\'Asti, nutty desserts with cream sherry, and caramel or chocolate desserts pair well with port. The NV Johnson Estate Cream Sherry with a 5 out of 5 star rating seems like a good match. It costs about 19 dollars per bottle.',
            productMatches: [
              {
                id: 430626,
                title: 'NV Johnson Estate Cream Sherry',
                description: 'Very aromatic with notes of hazelnut, vanilla, and a touch of oak followed by sweet raisins and a touch of yeast. Clean lasting finish. Good now but will reward those allow it to age"". A favorite pre-prandial beverage. Consider it with nuts before dinner as an aperitif, or after dinner with dessert, especially chocolates and fruit-based desserts. Also wonderful on cold afternoons, served with biscotti to dip in ""Italian-style"". "',
                price: '$19.49',
                imageUrl: 'https://spoonacular.com/productImages/430626-312x231.jpg',
                averageRating: 1,
                ratingCount: 2,
                score: 0.8571428571428572,
                link: 'https://www.amazon.com/Johnson-Estate-Cream-Sherry-750/dp/B00D3GQSRW?tag=spoonacular-20'
              }
            ]
          },
          instructions: 'Heat milk and sugar over medium heat in a medium saucepan until just comes to a boil, stirring occasionally.  Stir in the vanilla.\nHave ready a large bowl filled with ice and set a small metal bowl over the ice with a strainer set over it.\nPlace egg yolks in a medium bowl, lightly beaten.  Ladle some of the milk into the egg yolk, whisk it to prevent curdling.  Pour this mixture back into the rest of the milk in the saucepan.  Cook over low-medium heat until mixture is thick and can cover the back of a wooden spoon, about 4 to 8 minutes.\nPour the mixture over the strainer into the small bowl; stir in the yogurt.  Whisk the mixture over the ice bath until it cools completely.\nScoop the avocado meat and puree in a blender or food processor along with the lemon juice and some of the cooled custard.  Pour this mixture back to the rest of the custard, blend them together until it is thick and creamy.\nFreeze the custard in an ice cream maker according to the manufacturers instructions.  Halfway through the freezing process, fold in the chopped bittersweet chocolate.  Transfer the frozen yogurt into a freezer-safe container and freeze until solid, at least 4 hours.',
          analyzedInstructions: [
            {
              name: '',
              steps: [
                {
                  number: 1,
                  step: 'Heat milk and sugar over medium heat in a medium saucepan until just comes to a boil, stirring occasionally.  Stir in the vanilla.',
                  ingredients: [
                    {
                      id: 1052050,
                      name: 'vanilla',
                      localizedName: 'vanilla',
                      image: 'vanilla.jpg'
                    },
                    {
                      id: 19335,
                      name: 'sugar',
                      localizedName: 'sugar',
                      image: 'sugar-in-bowl.png'
                    },
                    {
                      id: 1077,
                      name: 'milk',
                      localizedName: 'milk',
                      image: 'milk.png'
                    }
                  ],
                  equipment: [
                    {
                      id: 404669,
                      name: 'sauce pan',
                      localizedName: 'sauce pan',
                      image: 'sauce-pan.jpg'
                    }
                  ]
                },
                {
                  number: 2,
                  step: 'Have ready a large bowl filled with ice and set a small metal bowl over the ice with a strainer set over it.',
                  ingredients: [],
                  equipment: [
                    {
                      id: 405600,
                      name: 'sieve',
                      localizedName: 'sieve',
                      image: 'strainer.png'
                    },
                    {
                      id: 404783,
                      name: 'bowl',
                      localizedName: 'bowl',
                      image: 'bowl.jpg'
                    }
                  ]
                },
                {
                  number: 3,
                  step: 'Place egg yolks in a medium bowl, lightly beaten.  Ladle some of the milk into the egg yolk, whisk it to prevent curdling.',
                  ingredients: [
                    {
                      id: 1125,
                      name: 'egg yolk',
                      localizedName: 'egg yolk',
                      image: 'egg-yolk.jpg'
                    },
                    {
                      id: 1077,
                      name: 'milk',
                      localizedName: 'milk',
                      image: 'milk.png'
                    }
                  ],
                  equipment: [
                    {
                      id: 404630,
                      name: 'ladle',
                      localizedName: 'ladle',
                      image: 'ladle.jpg'
                    },
                    {
                      id: 404661,
                      name: 'whisk',
                      localizedName: 'whisk',
                      image: 'whisk.png'
                    },
                    {
                      id: 404783,
                      name: 'bowl',
                      localizedName: 'bowl',
                      image: 'bowl.jpg'
                    }
                  ]
                },
                {
                  number: 4,
                  step: 'Pour this mixture back into the rest of the milk in the saucepan.  Cook over low-medium heat until mixture is thick and can cover the back of a wooden spoon, about 4 to 8 minutes.',
                  ingredients: [
                    {
                      id: 1077,
                      name: 'milk',
                      localizedName: 'milk',
                      image: 'milk.png'
                    }
                  ],
                  equipment: [
                    {
                      id: 404732,
                      name: 'wooden spoon',
                      localizedName: 'wooden spoon',
                      image: 'wooden-spoon.jpg'
                    },
                    {
                      id: 404669,
                      name: 'sauce pan',
                      localizedName: 'sauce pan',
                      image: 'sauce-pan.jpg'
                    }
                  ],
                  length: {
                    number: 4,
                    unit: 'minutes'
                  }
                },
                {
                  number: 5,
                  step: 'Pour the mixture over the strainer into the small bowl; stir in the yogurt.',
                  ingredients: [],
                  equipment: [
                    {
                      id: 405600,
                      name: 'sieve',
                      localizedName: 'sieve',
                      image: 'strainer.png'
                    },
                    {
                      id: 404783,
                      name: 'bowl',
                      localizedName: 'bowl',
                      image: 'bowl.jpg'
                    }
                  ]
                },
                {
                  number: 6,
                  step: 'Whisk the mixture over the ice bath until it cools completely.',
                  ingredients: [],
                  equipment: [
                    {
                      id: 404661,
                      name: 'whisk',
                      localizedName: 'whisk',
                      image: 'whisk.png'
                    }
                  ]
                },
                {
                  number: 7,
                  step: 'Scoop the avocado meat and puree in a blender or food processor along with the lemon juice and some of the cooled custard.',
                  ingredients: [
                    {
                      id: 9152,
                      name: 'lemon juice',
                      localizedName: 'lemon juice',
                      image: 'lemon-juice.jpg'
                    },
                    {
                      id: 9037,
                      name: 'avocado',
                      localizedName: 'avocado',
                      image: 'avocado.jpg'
                    }
                  ],
                  equipment: [
                    {
                      id: 404771,
                      name: 'food processor',
                      localizedName: 'food processor',
                      image: 'food-processor.png'
                    },
                    {
                      id: 404726,
                      name: 'blender',
                      localizedName: 'blender',
                      image: 'blender.png'
                    }
                  ]
                },
                {
                  number: 8,
                  step: 'Pour this mixture back to the rest of the custard, blend them together until it is thick and creamy.',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 9,
                  step: 'Freeze the custard in an ice cream maker according to the manufacturers instructions.  Halfway through the freezing process, fold in the chopped bittersweet chocolate.',
                  ingredients: [
                    {
                      id: 19903,
                      name: 'bittersweet chocolate',
                      localizedName: 'bittersweet chocolate',
                      image: 'dark-chocolate-pieces.jpg'
                    }
                  ],
                  equipment: [
                    {
                      id: 404791,
                      name: 'ice cream machine',
                      localizedName: 'ice cream machine',
                      image: 'ice-cream-machine.jpg'
                    }
                  ]
                },
                {
                  number: 10,
                  step: 'Transfer the frozen yogurt into a freezer-safe container and freeze until solid, at least 4 hours.',
                  ingredients: [],
                  equipment: [],
                  length: {
                    number: 240,
                    unit: 'minutes'
                  }
                }
              ]
            }
          ],
          originalId: null,
          spoonacularSourceUrl: 'https://spoonacular.com/avocado-chocolate-bits-frozen-yogurt-633139'
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 9,
          gaps: 'no',
          lowFodmap: false,
          aggregateLikes: 8,
          spoonacularScore: 22,
          healthScore: 2,
          creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
          license: 'CC BY 3.0',
          sourceName: 'Foodista',
          pricePerServing: 75.82,
          extendedIngredients: [
            {
              id: 18144,
              aisle: 'Baking',
              image: 'yellow-cake.jpg',
              consistency: 'solid',
              name: 'yellow cake mix',
              original: '1 box yellow cake mix',
              originalString: '1 box yellow cake mix',
              originalName: 'yellow cake mix',
              amount: 1,
              unit: 'box',
              meta: [
                'yellow'
              ],
              metaInformation: [
                'yellow'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'box',
                  unitLong: 'box'
                },
                metric: {
                  amount: 1,
                  unitShort: 'box',
                  unitLong: 'box'
                }
              }
            },
            {
              id: 9383,
              aisle: 'Canned and Jarred',
              image: 'canned-mandarin-oranges.png',
              consistency: 'solid',
              name: 'canned mandarin oranges',
              original: '2 cans (15 oz.) of mandarin oranges',
              originalString: '2 cans (15 oz.) of mandarin oranges',
              originalName: 'cans of mandarin oranges',
              amount: 15,
              unit: 'oz',
              meta: [
                'canned'
              ],
              metaInformation: [
                'canned'
              ],
              measures: {
                us: {
                  amount: 15,
                  unitShort: 'oz',
                  unitLong: 'ounces'
                },
                metric: {
                  amount: 425.243,
                  unitShort: 'g',
                  unitLong: 'grams'
                }
              }
            },
            {
              id: 9354,
              aisle: 'Canned and Jarred',
              image: 'pineapple-with-can.png',
              consistency: 'solid',
              name: 'canned pineapple',
              original: '20 oz. can crushed pineapple',
              originalString: '20 oz. can crushed pineapple',
              originalName: 'crushed pineapple',
              amount: 20,
              unit: 'oz',
              meta: [
                'crushed',
                'canned'
              ],
              metaInformation: [
                'crushed',
                'canned'
              ],
              measures: {
                us: {
                  amount: 20,
                  unitShort: 'oz',
                  unitLong: 'ounces'
                },
                metric: {
                  amount: 566.99,
                  unitShort: 'g',
                  unitLong: 'grams'
                }
              }
            },
            {
              id: 19206,
              aisle: 'Baking',
              image: 'vanilla-pudding.png',
              consistency: 'solid',
              name: 'instant vanilla pudding',
              original: '1 box instant vanilla pudding- 4 serving size',
              originalString: '1 box instant vanilla pudding- 4 serving size',
              originalName: 'instant vanilla pudding- 4 serving size',
              amount: 1,
              unit: 'box',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'box',
                  unitLong: 'box'
                },
                metric: {
                  amount: 1,
                  unitShort: 'box',
                  unitLong: 'box'
                }
              }
            },
            {
              id: 1077,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'milk.png',
              consistency: 'liquid',
              name: 'milk',
              original: '1/2 cup cups cold milk, ½ slightly warmed',
              originalString: '1/2 cup cups cold milk, ½ slightly warmed',
              originalName: 'cups cold milk, ½ slightly warmed',
              amount: 0.5,
              unit: 'cup',
              meta: [
                'warmed',
                'cold'
              ],
              metaInformation: [
                'warmed',
                'cold'
              ],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 118.294,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 43274,
              aisle: 'Cheese',
              image: 'cream-cheese.jpg',
              consistency: 'solid',
              name: 'low fat cream cheese',
              original: '8 ounces cream cheese, softened completely (I use low fat)',
              originalString: '8 ounces cream cheese, softened completely (I use low fat)',
              originalName: 'cream cheese, softened completely (I use low fat)',
              amount: 8,
              unit: 'ounces',
              meta: [
                'low fat',
                'softened',
                '(I use )'
              ],
              metaInformation: [
                'low fat',
                'softened',
                '(I use )'
              ],
              measures: {
                us: {
                  amount: 8,
                  unitShort: 'oz',
                  unitLong: 'ounces'
                },
                metric: {
                  amount: 226.796,
                  unitShort: 'g',
                  unitLong: 'grams'
                }
              }
            },
            {
              id: 1200,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'whipped-cream.jpg',
              consistency: 'solid',
              name: 'nonfat cool whip',
              original: '8 oz. cool whip (I use low fat)',
              originalString: '8 oz. cool whip (I use low fat)',
              originalName: 'cool whip (I use low fat)',
              amount: 8,
              unit: 'oz',
              meta: [
                'low fat',
                '(I use )'
              ],
              metaInformation: [
                'low fat',
                '(I use )'
              ],
              measures: {
                us: {
                  amount: 8,
                  unitShort: 'oz',
                  unitLong: 'ounces'
                },
                metric: {
                  amount: 226.796,
                  unitShort: 'g',
                  unitLong: 'grams'
                }
              }
            }
          ],
          id: 632208,
          title: 'Almost Heaven Cake',
          readyInMinutes: 45,
          servings: 15,
          sourceUrl: 'https://www.foodista.com/recipe/QKX7SSGG/almost-heaven-cake',
          image: 'https://spoonacular.com/recipeImages/632208-556x370.jpg',
          imageType: 'jpg',
          summary: 'The recipe Almost Heaven Cake can be made <b>in roughly about 45 minutes</b>. One serving contains <b>242 calories</b>, <b>4g of protein</b>, and <b>4g of fat</b>. For <b>76 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. This recipe serves 15. 8 people were glad they tried this recipe. It is brought to you by Foodista. It is a <b>very budget friendly</b> recipe for fans of Mediterranean food. A mixture of cake mix, instant vanilla pudding- 4 serving size, cool whip, and a handful of other ingredients are all it takes to make this recipe so tasty. Taking all factors into account, this recipe <b>earns a spoonacular score of 20%</b>, which is not so awesome. Similar recipes are <a href="https://spoonacular.com/recipes/heaven-on-earth-cake-503148">Heaven on Earth Cake</a>, <a href="https://spoonacular.com/recipes/the-chocolate-mousse-cake-that-fell-from-heaven-106612">The Chocolate Mousse Cake That Fell from Heaven</a>, and <a href="https://spoonacular.com/recipes/eatingwells-died-and-went-to-heaven-chocolate-cake-697231">EatingWell\'s Died-and-Went-to-Heaven Chocolate Cake</a>.',
          cuisines: [
            'Mediterranean',
            'Italian',
            'European'
          ],
          dishTypes: [],
          diets: [],
          occasions: [],
          winePairing: {
            pairedWines: [
              'cream sherry',
              'moscato dasti',
              'port'
            ],
            pairingText: 'Cream Sherry, Moscato d\'Asti, and Port are my top picks for Cake. A common wine pairing rule is to make sure your wine is sweeter than your food. Delicate desserts go well with Moscato d\'Asti, nutty desserts with cream sherry, and caramel or chocolate desserts pair well with port. One wine you could try is NV Johnson Estate Cream Sherry. It has 5 out of 5 stars and a bottle costs about 19 dollars.',
            productMatches: [
              {
                id: 430626,
                title: 'NV Johnson Estate Cream Sherry',
                description: 'Very aromatic with notes of hazelnut, vanilla, and a touch of oak followed by sweet raisins and a touch of yeast. Clean lasting finish. Good now but will reward those allow it to age"". A favorite pre-prandial beverage. Consider it with nuts before dinner as an aperitif, or after dinner with dessert, especially chocolates and fruit-based desserts. Also wonderful on cold afternoons, served with biscotti to dip in ""Italian-style"". "',
                price: '$19.49',
                imageUrl: 'https://spoonacular.com/productImages/430626-312x231.jpg',
                averageRating: 1,
                ratingCount: 2,
                score: 0.8571428571428572,
                link: 'https://www.amazon.com/Johnson-Estate-Cream-Sherry-750/dp/B00D3GQSRW?tag=spoonacular-20'
              }
            ]
          },
          instructions: 'Prepare the cake mix as directed on the package\nAdd in one drained can of mandarin oranges as you mix the cake\nThe oranges will be blended into small pieces\nBake in a 9x13 inch prepared oblong cake pan\nAfter baking, while the cake is still warm, poke holes in the cake over the entire surface using a fork\nPour the undrained crushed pineapple over the hot cake\nSpread the pineapple evenly over the surface of the cake\nAllow the cake to cool\nMix cream cheese with the pudding mix and 1/2 cup warm milk\nAfter mixing together well, add gradually the cold milk while continuing to mix until well blended (easiest with an electric mixer)\nIf you add the cold milk too quickly to the cream cheese, it will be lumpy Place in the refrigerator for about 1 hour or more until it is more firm\nThen remove and spread over top of the cake\nThen spread the cool whip over the cake\nDrain the second can of mandarin oranges\nArrange the pieces over top of the cool whip in rows or another type of pretty design\nCover and refrigerate for at least another 1-2 hours before serving.\nStore covered in the refrigerator.',
          analyzedInstructions: [
            {
              name: '',
              steps: [
                {
                  number: 1,
                  step: 'Prepare the cake mix as directed on the package',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 2,
                  step: 'Add in one drained can of mandarin oranges as you mix the cake',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 3,
                  step: 'The oranges will be blended into small pieces',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 4,
                  step: 'Bake in a 9x13 inch prepared oblong cake pan',
                  ingredients: [],
                  equipment: [
                    {
                      id: 404784,
                      name: 'oven',
                      localizedName: 'oven',
                      image: 'oven.jpg'
                    },
                    {
                      id: 404747,
                      name: 'cake form',
                      localizedName: 'cake form',
                      image: 'cake-pan.png'
                    }
                  ]
                },
                {
                  number: 5,
                  step: 'After baking, while the cake is still warm, poke holes in the cake over the entire surface using a fork',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 6,
                  step: 'Pour the undrained crushed pineapple over the hot cake',
                  ingredients: [
                    {
                      id: 1019354,
                      name: 'crushed pineapple',
                      localizedName: 'crushed pineapple',
                      image: 'pineapple-with-can.png'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 7,
                  step: 'Spread the pineapple evenly over the surface of the cake',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 8,
                  step: 'Allow the cake to cool',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 9,
                  step: 'Mix cream cheese with the pudding mix and 1/2 cup warm milk',
                  ingredients: [
                    {
                      id: 10119206,
                      name: 'pudding mix',
                      localizedName: 'pudding mix',
                      image: ''
                    },
                    {
                      id: 1077,
                      name: 'milk',
                      localizedName: 'milk',
                      image: 'milk.png'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 10,
                  step: 'After mixing together well, add gradually the cold milk while continuing to mix until well blended (easiest with an electric mixer)',
                  ingredients: [
                    {
                      id: 1077,
                      name: 'milk',
                      localizedName: 'milk',
                      image: 'milk.png'
                    }
                  ],
                  equipment: [
                    {
                      id: 404628,
                      name: 'hand mixer',
                      localizedName: 'hand mixer',
                      image: 'hand-mixer.png'
                    }
                  ]
                },
                {
                  number: 11,
                  step: 'If you add the cold milk too quickly to the cream cheese, it will be lumpy',
                  ingredients: [
                    {
                      id: 1077,
                      name: 'milk',
                      localizedName: 'milk',
                      image: 'milk.png'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 12,
                  step: 'Place in the refrigerator for about 1 hour or more until it is more firm',
                  ingredients: [],
                  equipment: [],
                  length: {
                    number: 60,
                    unit: 'minutes'
                  }
                },
                {
                  number: 13,
                  step: 'Then remove and spread over top of the cake',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 14,
                  step: 'Then spread the cool whip over the cake',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 15,
                  step: 'Drain the second can of mandarin oranges',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 16,
                  step: 'Arrange the pieces over top of the cool whip in rows or another type of pretty design',
                  ingredients: [],
                  equipment: []
                },
                {
                  number: 17,
                  step: 'Cover and refrigerate for at least another 1-2 hours before serving.',
                  ingredients: [],
                  equipment: [],
                  length: {
                    number: 120,
                    unit: 'minutes'
                  }
                },
                {
                  number: 18,
                  step: 'Store covered in the refrigerator.',
                  ingredients: [],
                  equipment: []
                }
              ]
            }
          ],
          originalId: null,
          spoonacularSourceUrl: 'https://spoonacular.com/almost-heaven-cake-632208'
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 41,
          gaps: 'no',
          lowFodmap: false,
          aggregateLikes: 46,
          spoonacularScore: 34,
          healthScore: 3,
          creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
          license: 'CC BY 3.0',
          sourceName: 'Foodista',
          pricePerServing: 202.86,
          extendedIngredients: [
            {
              id: 18372,
              aisle: 'Baking',
              image: 'white-powder.jpg',
              consistency: 'solid',
              name: 'baking soda',
              original: '2 teaspoons baking soda',
              originalString: '2 teaspoons baking soda',
              originalName: 'baking soda',
              amount: 2,
              unit: 'teaspoons',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                },
                metric: {
                  amount: 2,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                }
              }
            },
            {
              id: 19903,
              aisle: 'Sweet Snacks',
              image: 'dark-chocolate-pieces.jpg',
              consistency: 'solid',
              name: 'bittersweet chocolate',
              original: '4 ounces bittersweet chocolate, melted',
              originalString: '4 ounces bittersweet chocolate, melted',
              originalName: 'bittersweet chocolate, melted',
              amount: 4,
              unit: 'ounces',
              meta: [
                'melted'
              ],
              metaInformation: [
                'melted'
              ],
              measures: {
                us: {
                  amount: 4,
                  unitShort: 'oz',
                  unitLong: 'ounces'
                },
                metric: {
                  amount: 113.398,
                  unitShort: 'g',
                  unitLong: 'grams'
                }
              }
            },
            {
              id: 19334,
              aisle: 'Baking',
              image: 'light-brown-sugar.jpg',
              consistency: 'solid',
              name: 'brown sugar',
              original: '1 1/2 cups brown sugar',
              originalString: '1 1/2 cups brown sugar',
              originalName: 'brown sugar',
              amount: 1.5,
              unit: 'cups',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1.5,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 354.882,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 1230,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'buttermilk.jpg',
              consistency: 'solid',
              name: 'buttermilk',
              original: '1 cup buttermilk',
              originalString: '1 cup buttermilk',
              originalName: 'buttermilk',
              amount: 1,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'cup',
                  unitLong: 'cup'
                },
                metric: {
                  amount: 236.588,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 10020129,
              aisle: 'Baking',
              image: 'flour.png',
              consistency: 'solid',
              name: 'cake flour',
              original: '2 1/4 cups cake flour',
              originalString: '2 1/4 cups cake flour',
              originalName: 'cake flour',
              amount: 2.25,
              unit: 'cups',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 2.25,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 532.323,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 14209,
              aisle: 'Tea and Coffee',
              image: 'brewed-coffee.jpg',
              consistency: 'solid',
              name: 'coffee',
              original: '2 tablespoons coffee',
              originalString: '2 tablespoons coffee',
              originalName: 'coffee',
              amount: 2,
              unit: 'tablespoons',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                },
                metric: {
                  amount: 2,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                }
              }
            },
            {
              id: 20027,
              aisle: 'Baking',
              image: 'white-powder.jpg',
              consistency: 'solid',
              name: 'cornstarch',
              original: '1/4 cup cornstarch',
              originalString: '1/4 cup cornstarch',
              originalName: 'cornstarch',
              amount: 0.25,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 59.147,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 18373,
              aisle: 'Spices and Seasonings;Baking',
              image: 'white-powder.jpg',
              consistency: 'solid',
              name: 'cream of tartar',
              original: '1/2 teaspoon cream of tartar',
              originalString: '1/2 teaspoon cream of tartar',
              originalName: 'cream of tartar',
              amount: 0.5,
              unit: 'teaspoon',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                },
                metric: {
                  amount: 0.5,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                }
              }
            },
            {
              id: 1124,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'egg-white.jpg',
              consistency: 'solid',
              name: 'egg whites',
              original: '3 egg whites, room temperature',
              originalString: '3 egg whites, room temperature',
              originalName: 'egg whites, room temperature',
              amount: 3,
              unit: '',
              meta: [
                'room temperature'
              ],
              metaInformation: [
                'room temperature'
              ],
              measures: {
                us: {
                  amount: 3,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 3,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 1125,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'egg-yolk.jpg',
              consistency: 'solid',
              name: 'egg yolks',
              original: '4 egg yolks',
              originalString: '4 egg yolks',
              originalName: 'egg yolks',
              amount: 4,
              unit: '',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 4,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 4,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 1123,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'egg.png',
              consistency: 'solid',
              name: 'eggs',
              original: '3 eggs, room temperature',
              originalString: '3 eggs, room temperature',
              originalName: 'eggs, room temperature',
              amount: 3,
              unit: '',
              meta: [
                'room temperature'
              ],
              metaInformation: [
                'room temperature'
              ],
              measures: {
                us: {
                  amount: 3,
                  unitShort: '',
                  unitLong: ''
                },
                metric: {
                  amount: 3,
                  unitShort: '',
                  unitLong: ''
                }
              }
            },
            {
              id: 20081,
              aisle: 'Baking',
              image: 'flour.png',
              consistency: 'solid',
              name: 'flour',
              original: '1/4 cup flour',
              originalString: '1/4 cup flour',
              originalName: 'flour',
              amount: 0.25,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 59.147,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 93829,
              aisle: 'Baking',
              image: 'corn-syrup.png',
              consistency: 'solid',
              name: 'golden syrup',
              original: '1 1/2 tablespoons golden syrup',
              originalString: '1 1/2 tablespoons golden syrup',
              originalName: 'golden syrup',
              amount: 1.5,
              unit: 'tablespoons',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1.5,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                },
                metric: {
                  amount: 1.5,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                }
              }
            },
            {
              id: 12120,
              aisle: 'Baking',
              image: 'hazelnuts.jpg',
              consistency: 'solid',
              name: 'hazelnuts',
              original: '1 cup toasted hazelnuts, chopped',
              originalString: '1 cup toasted hazelnuts, chopped',
              originalName: 'toasted hazelnuts, chopped',
              amount: 1,
              unit: 'cup',
              meta: [
                'toasted',
                'chopped'
              ],
              metaInformation: [
                'toasted',
                'chopped'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'cup',
                  unitLong: 'cup'
                },
                metric: {
                  amount: 236.588,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 1053,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'fluid-cream.jpg',
              consistency: 'liquid',
              name: 'heavy cream',
              original: '2 1/2 cups heavy cream',
              originalString: '2 1/2 cups heavy cream',
              originalName: 'heavy cream',
              amount: 2.5,
              unit: 'cups',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 2.5,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 591.47,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 1082047,
              aisle: 'Spices and Seasonings',
              image: 'salt.jpg',
              consistency: 'solid',
              name: 'kosher salt',
              original: '1 teaspoon kosher salt',
              originalString: '1 teaspoon kosher salt',
              originalName: 'kosher salt',
              amount: 1,
              unit: 'teaspoon',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'tsp',
                  unitLong: 'teaspoon'
                },
                metric: {
                  amount: 1,
                  unitShort: 'tsp',
                  unitLong: 'teaspoon'
                }
              }
            },
            {
              id: 98988,
              aisle: 'Alcoholic Beverages',
              image: 'light-green-liqueur.png',
              consistency: 'solid',
              name: 'pear liqueur',
              original: '1/4 cup Frangelico liqueur',
              originalString: '1/4 cup Frangelico liqueur',
              originalName: 'Frangelico liqueur',
              amount: 0.25,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 59.147,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 19335,
              aisle: 'Baking',
              image: 'sugar-in-bowl.png',
              consistency: 'solid',
              name: 'sugar',
              original: '2/3 cup sugar',
              originalString: '2/3 cup sugar',
              originalName: 'sugar',
              amount: 0.6666666666666666,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.667,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 157.725,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 19335,
              aisle: 'Baking',
              image: 'sugar-in-bowl.png',
              consistency: 'solid',
              name: 'sugar',
              original: '3/4 cup sugar',
              originalString: '3/4 cup sugar',
              originalName: 'sugar',
              amount: 0.75,
              unit: 'cup',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.75,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 177.441,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 19335,
              aisle: 'Baking',
              image: 'sugar-in-bowl.png',
              consistency: 'solid',
              name: 'sugar',
              original: '1 3/4 cups sugar',
              originalString: '1 3/4 cups sugar',
              originalName: 'sugar',
              amount: 1.75,
              unit: 'cups',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1.75,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 414.029,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 1145,
              aisle: 'Milk, Eggs, Other Dairy',
              image: 'butter-sliced.jpg',
              consistency: 'solid',
              name: 'unsalted butter',
              original: '1/2 cup unsalted butter, softened',
              originalString: '1/2 cup unsalted butter, softened',
              originalName: 'unsalted butter, softened',
              amount: 0.5,
              unit: 'cup',
              meta: [
                'unsalted',
                'softened'
              ],
              metaInformation: [
                'unsalted',
                'softened'
              ],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: 'cups',
                  unitLong: 'cups'
                },
                metric: {
                  amount: 118.294,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 2050,
              aisle: 'Baking',
              image: 'vanilla-extract.jpg',
              consistency: 'liquid',
              name: 'vanilla',
              original: '1 1/2 teaspoons vanilla',
              originalString: '1 1/2 teaspoons vanilla',
              originalName: 'vanilla',
              amount: 1.5,
              unit: 'teaspoons',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1.5,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                },
                metric: {
                  amount: 1.5,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                }
              }
            },
            {
              id: 2050,
              aisle: 'Baking',
              image: 'vanilla-extract.jpg',
              consistency: 'liquid',
              name: 'vanilla',
              original: '2 teaspoons vanilla',
              originalString: '2 teaspoons vanilla',
              originalName: 'vanilla',
              amount: 2,
              unit: 'teaspoons',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                },
                metric: {
                  amount: 2,
                  unitShort: 'tsps',
                  unitLong: 'teaspoons'
                }
              }
            },
            {
              id: 14412,
              aisle: 'Beverages',
              image: 'water.png',
              consistency: 'liquid',
              name: 'water',
              original: '1 cup boiling water',
              originalString: '1 cup boiling water',
              originalName: 'boiling water',
              amount: 1,
              unit: 'cup',
              meta: [
                'boiling'
              ],
              metaInformation: [
                'boiling'
              ],
              measures: {
                us: {
                  amount: 1,
                  unitShort: 'cup',
                  unitLong: 'cup'
                },
                metric: {
                  amount: 236.588,
                  unitShort: 'ml',
                  unitLong: 'milliliters'
                }
              }
            },
            {
              id: 14412,
              aisle: 'Beverages',
              image: 'water.png',
              consistency: 'liquid',
              name: 'water',
              original: '7 1/2 tablespoons water',
              originalString: '7 1/2 tablespoons water',
              originalName: 'water',
              amount: 7.5,
              unit: 'tablespoons',
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 7.5,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                },
                metric: {
                  amount: 7.5,
                  unitShort: 'Tbsps',
                  unitLong: 'Tbsps'
                }
              }
            }
          ],
          id: 639057,
          title: 'Chocolate Hazelnut Cake',
          readyInMinutes: 45,
          servings: 12,
          sourceUrl: 'http://www.foodista.com/recipe/J37QGDPH/chocolate-hazelnut-cake',
          image: 'https://spoonacular.com/recipeImages/639057-556x370.jpg',
          imageType: 'jpg',
          summary: 'Chocolate Hazelnut Cake might be just the dessert you are searching for. This recipe makes 12 servings with <b>853 calories</b>, <b>10g of protein</b>, and <b>39g of fat</b> each. For <b>$2.03 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. 46 people have tried and liked this recipe. Head to the store and pick up frangelico liqueur, cornstarch, egg whites, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 37%</b>. This score is not so great. Similar recipes include <a href="https://spoonacular.com/recipes/chocolate-kahlua-cake-with-salted-hazelnut-chocolate-buttercream-60826">Chocolate Kahlua Cake With Salted Hazelnut Chocolate Buttercream</a>, <a href="https://spoonacular.com/recipes/chocolate-hazelnut-cake-with-praline-chocolate-crunch-188727">Chocolate Hazelnut Cake with Praline Chocolate Crunch</a>, and <a href="https://spoonacular.com/recipes/chocolate-hazelnut-cake-538705">Chocolate Hazelnut Cake</a>.',
          cuisines: [],
          dishTypes: [
            'side dish'
          ],
          diets: [],
          occasions: [],
          winePairing: {},
          instructions: '<ol><li>Starting with cake, cream butter and sugars until smooth. Add eggs and vanilla.</li><li>Pour into chocolate and mix well.</li><li>Sift together flour, baking soda and salt. Add dry ingredients to wet ingredients alternately with buttermilk.</li><li>Stir coffee into boiling water until combined, then pour into cake batter and stir until smooth.</li><li>Spray two 9-inch cake pans with floured baking spray. Dust with cocoa. Evenly spread cake batter between both pans.  Bang lightly on the counter to settle batter.</li><li>Bake for 30 minutes, or until tester comes out clean, in a preheated oven at 350 degrees. Let cakes cool on a rack for at least an hour.</li><li>As cakes cool, move on to hazelnut pastry cream. Pour whipping cream in a sauce pan and scald (heat just before boiling).</li><li>In a separate bowl, whisk egg yolks with sugar. Add flour and cornstarch. Whisk until smooth.</li><li>Use a ladle to scoop about a cup of the hot cream into the eggy sugar. Whisk immediately and quickly to combine.</li><li>Pour remaining cream in with eggs and keep stirring. Return warm mixture to sauce pan.</li><li>Continue to cook, whisking all the while, until thick.</li><li>Pour into a heat safe bowl and whisk in vanilla and Frangelico until smooth and creamy. Cover with plastic wrap directly touching the cream so a film will not form. Let the cream sit until its reached room temperature. Cool completely in fridge.*  Stir hazelnuts into cream once cold.</li><li>Level off both cooled cakes and slice each one in half, so there are four layers.</li><li>Lay down one cake layer and smooth about a third of the hazelnut cream on top, spreading to about 1/2 inch from edge. Repeat with next two layers and top with last layer.  Place cake in fridge to set while you make the frosting.</li><li>For the frosting, whisk all of the ingredients in a medium sized heat resistant bowl. Place bowl on top of a slightly larger pot with 1-2 inches of hot, simmering water.  (Do not let water level reach the bottom part of the bowl.)</li><li>With an electric mixer, beat egg white mixture for six minutes.  Remove from heat and continue beating for another minute while adding the vanilla.</li><li>Allow frosting to cool slightly (we put it in the fridge for about 10 minutes) before frosting cake.  Top with extra hazelnuts.</li><li>You can make the pastry cream 1-2 days ahead of time, which is exactly what we did.  Do not stir in the hazelnuts until right before you plan to use it.</li></ol>',
          analyzedInstructions: [
            {
              name: '',
              steps: [
                {
                  number: 1,
                  step: 'Starting with cake, cream butter and sugars until smooth.',
                  ingredients: [
                    {
                      id: 1053,
                      name: 'cream',
                      localizedName: 'cream',
                      image: 'fluid-cream.jpg'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 2,
                  step: 'Add eggs and vanilla.',
                  ingredients: [
                    {
                      id: 1052050,
                      name: 'vanilla',
                      localizedName: 'vanilla',
                      image: 'vanilla.jpg'
                    },
                    {
                      id: 1123,
                      name: 'egg',
                      localizedName: 'egg',
                      image: 'egg.png'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 3,
                  step: 'Pour into chocolate and mix well.Sift together flour, baking soda and salt.',
                  ingredients: [
                    {
                      id: 18372,
                      name: 'baking soda',
                      localizedName: 'baking soda',
                      image: 'white-powder.jpg'
                    },
                    {
                      id: 20081,
                      name: 'all purpose flour',
                      localizedName: 'all purpose flour',
                      image: 'flour.png'
                    },
                    {
                      id: 2047,
                      name: 'salt',
                      localizedName: 'salt',
                      image: 'salt.jpg'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 4,
                  step: 'Add dry ingredients to wet ingredients alternately with buttermilk.Stir coffee into boiling water until combined, then pour into cake batter and stir until smooth.Spray two 9-inch cake pans with floured baking spray. Dust with cocoa. Evenly spread cake batter between both pans.  Bang lightly on the counter to settle batter.',
                  ingredients: [
                    {
                      id: 1230,
                      name: 'buttermilk',
                      localizedName: 'buttermilk',
                      image: 'buttermilk.jpg'
                    },
                    {
                      id: 14209,
                      name: 'coffee',
                      localizedName: 'coffee',
                      image: 'brewed-coffee.jpg'
                    },
                    {
                      id: 14412,
                      name: 'water',
                      localizedName: 'water',
                      image: 'water.png'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 5,
                  step: 'Bake for 30 minutes, or until tester comes out clean, in a preheated oven at 350 degrees.',
                  ingredients: [],
                  equipment: [
                    {
                      id: 404784,
                      name: 'oven',
                      localizedName: 'oven',
                      image: 'oven.jpg'
                    }
                  ],
                  length: {
                    number: 30,
                    unit: 'minutes'
                  }
                },
                {
                  number: 6,
                  step: 'Let cakes cool on a rack for at least an hour.As cakes cool, move on to hazelnut pastry cream.',
                  ingredients: [
                    {
                      id: 12120,
                      name: 'hazelnuts',
                      localizedName: 'hazelnuts',
                      image: 'hazelnuts.jpg'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 7,
                  step: 'Pour whipping cream in a sauce pan and scald (heat just before boiling).In a separate bowl, whisk egg yolks with sugar.',
                  ingredients: [
                    {
                      id: 1001053,
                      name: 'whipping cream',
                      localizedName: 'whipping cream',
                      image: 'fluid-cream.jpg'
                    },
                    {
                      id: 1125,
                      name: 'egg yolk',
                      localizedName: 'egg yolk',
                      image: 'egg-yolk.jpg'
                    },
                    {
                      id: 19335,
                      name: 'sugar',
                      localizedName: 'sugar',
                      image: 'sugar-in-bowl.png'
                    }
                  ],
                  equipment: [
                    {
                      id: 404669,
                      name: 'sauce pan',
                      localizedName: 'sauce pan',
                      image: 'sauce-pan.jpg'
                    },
                    {
                      id: 404661,
                      name: 'whisk',
                      localizedName: 'whisk',
                      image: 'whisk.png'
                    },
                    {
                      id: 404783,
                      name: 'bowl',
                      localizedName: 'bowl',
                      image: 'bowl.jpg'
                    }
                  ]
                },
                {
                  number: 8,
                  step: 'Add flour and cornstarch.',
                  ingredients: [
                    {
                      id: 20027,
                      name: 'corn starch',
                      localizedName: 'corn starch',
                      image: 'white-powder.jpg'
                    },
                    {
                      id: 20081,
                      name: 'all purpose flour',
                      localizedName: 'all purpose flour',
                      image: 'flour.png'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 9,
                  step: 'Whisk until smooth.Use a ladle to scoop about a cup of the hot cream into the eggy sugar.',
                  ingredients: [
                    {
                      id: 1053,
                      name: 'cream',
                      localizedName: 'cream',
                      image: 'fluid-cream.jpg'
                    },
                    {
                      id: 19335,
                      name: 'sugar',
                      localizedName: 'sugar',
                      image: 'sugar-in-bowl.png'
                    }
                  ],
                  equipment: [
                    {
                      id: 404630,
                      name: 'ladle',
                      localizedName: 'ladle',
                      image: 'ladle.jpg'
                    },
                    {
                      id: 404661,
                      name: 'whisk',
                      localizedName: 'whisk',
                      image: 'whisk.png'
                    }
                  ]
                },
                {
                  number: 10,
                  step: 'Whisk immediately and quickly to combine.',
                  ingredients: [],
                  equipment: [
                    {
                      id: 404661,
                      name: 'whisk',
                      localizedName: 'whisk',
                      image: 'whisk.png'
                    }
                  ]
                },
                {
                  number: 11,
                  step: 'Pour remaining cream in with eggs and keep stirring. Return warm mixture to sauce pan.Continue to cook, whisking all the while, until thick.',
                  ingredients: [
                    {
                      id: 1053,
                      name: 'cream',
                      localizedName: 'cream',
                      image: 'fluid-cream.jpg'
                    },
                    {
                      id: 1123,
                      name: 'egg',
                      localizedName: 'egg',
                      image: 'egg.png'
                    }
                  ],
                  equipment: [
                    {
                      id: 404661,
                      name: 'whisk',
                      localizedName: 'whisk',
                      image: 'whisk.png'
                    },
                    {
                      id: 404669,
                      name: 'sauce pan',
                      localizedName: 'sauce pan',
                      image: 'sauce-pan.jpg'
                    }
                  ]
                },
                {
                  number: 12,
                  step: 'Pour into a heat safe bowl and whisk in vanilla and Frangelico until smooth and creamy. Cover with plastic wrap directly touching the cream so a film will not form.',
                  ingredients: [
                    {
                      id: 1052050,
                      name: 'vanilla',
                      localizedName: 'vanilla',
                      image: 'vanilla.jpg'
                    },
                    {
                      id: 1053,
                      name: 'cream',
                      localizedName: 'cream',
                      image: 'fluid-cream.jpg'
                    }
                  ],
                  equipment: [
                    {
                      id: 404730,
                      name: 'plastic wrap',
                      localizedName: 'plastic wrap',
                      image: 'plastic-wrap.jpg'
                    },
                    {
                      id: 404661,
                      name: 'whisk',
                      localizedName: 'whisk',
                      image: 'whisk.png'
                    },
                    {
                      id: 404783,
                      name: 'bowl',
                      localizedName: 'bowl',
                      image: 'bowl.jpg'
                    }
                  ]
                },
                {
                  number: 13,
                  step: 'Let the cream sit until its reached room temperature. Cool completely in fridge.*  Stir hazelnuts into cream once cold.Level off both cooled cakes and slice each one in half, so there are four layers.Lay down one cake layer and smooth about a third of the hazelnut cream on top, spreading to about 1/2 inch from edge. Repeat with next two layers and top with last layer.',
                  ingredients: [
                    {
                      id: 12120,
                      name: 'hazelnuts',
                      localizedName: 'hazelnuts',
                      image: 'hazelnuts.jpg'
                    },
                    {
                      id: 1053,
                      name: 'cream',
                      localizedName: 'cream',
                      image: 'fluid-cream.jpg'
                    }
                  ],
                  equipment: []
                },
                {
                  number: 14,
                  step: 'Place cake in fridge to set while you make the frosting.For the frosting, whisk all of the ingredients in a medium sized heat resistant bowl.',
                  ingredients: [],
                  equipment: [
                    {
                      id: 404661,
                      name: 'whisk',
                      localizedName: 'whisk',
                      image: 'whisk.png'
                    },
                    {
                      id: 404783,
                      name: 'bowl',
                      localizedName: 'bowl',
                      image: 'bowl.jpg'
                    }
                  ]
                },
                {
                  number: 15,
                  step: 'Place bowl on top of a slightly larger pot with 1-2 inches of hot, simmering water.  (Do not let water level reach the bottom part of the bowl.)With an electric mixer, beat egg white mixture for six minutes.',
                  ingredients: [
                    {
                      id: 1124,
                      name: 'egg whites',
                      localizedName: 'egg whites',
                      image: 'egg-white.jpg'
                    },
                    {
                      id: 14412,
                      name: 'water',
                      localizedName: 'water',
                      image: 'water.png'
                    }
                  ],
                  equipment: [
                    {
                      id: 404628,
                      name: 'hand mixer',
                      localizedName: 'hand mixer',
                      image: 'hand-mixer.png'
                    },
                    {
                      id: 404783,
                      name: 'bowl',
                      localizedName: 'bowl',
                      image: 'bowl.jpg'
                    },
                    {
                      id: 404752,
                      name: 'pot',
                      localizedName: 'pot',
                      image: 'stock-pot.jpg'
                    }
                  ],
                  length: {
                    number: 6,
                    unit: 'minutes'
                  }
                },
                {
                  number: 16,
                  step: 'Remove from heat and continue beating for another minute while adding the vanilla.Allow frosting to cool slightly (we put it in the fridge for about 10 minutes) before frosting cake.  Top with extra hazelnuts.You can make the pastry cream 1-2 days ahead of time, which is exactly what we did.  Do not stir in the hazelnuts until right before you plan to use it.',
                  ingredients: [
                    {
                      id: 12120,
                      name: 'hazelnuts',
                      localizedName: 'hazelnuts',
                      image: 'hazelnuts.jpg'
                    },
                    {
                      id: 1052050,
                      name: 'vanilla',
                      localizedName: 'vanilla',
                      image: 'vanilla.jpg'
                    }
                  ],
                  equipment: [],
                  length: {
                    number: 10,
                    unit: 'minutes'
                  }
                }
              ]
            }
          ],
          originalId: null,
          spoonacularSourceUrl: 'https://spoonacular.com/chocolate-hazelnut-cake-639057'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
