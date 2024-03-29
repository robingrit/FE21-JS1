let beerString = `{
      "id": 176,
      "name": "Old World India Pale Ale",
      "tagline": "English India Pale Ale.",
      "first_brewed": "10/2011",
      "description": "This recreated the epic IPAs that were sent on monumental ocean voyages from England to India by sea in the 1800s. Medium bodied with a complex malt profile, backed up with intense bitterness and a woodsy, earthy rich English hop character.",
      "image_url": "https://images.punkapi.com/v2/176.png",
      "abv": 7.5,
      "ibu": 80,
      "target_fg": 1012,
      "target_og": 1069,
      "ebc": 50,
      "srm": 25,
      "ph": 4.4,
      "attenuation_level": 82.6,
      "volume": {
        "value": 20,
        "unit": "litres"
      },
      "boil_volume": {
        "value": 25,
        "unit": "litres"
      },
      "method": {
        "mash_temp": [
          {
            "temp": {
              "value": 65,
              "unit": "celsius"
            },
            "duration": null
          }
        ],
        "fermentation": {
          "temp": {
            "value": 22,
            "unit": "celsius"
          }
        },
        "twist": null
      },
      "ingredients": {
        "malt": [
          {
            "name": "Maris Otter Extra Pale",
            "amount": {
              "value": 6.25,
              "unit": "kilograms"
            }
          },
          {
            "name": "Amber",
            "amount": {
              "value": 0.25,
              "unit": "kilograms"
            }
          },
          {
            "name": "Crystal 150",
            "amount": {
              "value": 0.25,
              "unit": "kilograms"
            }
          }
        ],
        "hops": [
          {
            "name": "Bramling Cross",
            "amount": {
              "value": 62.5,
              "unit": "grams"
            },
            "add": "start",
            "attribute": "bitter"
          },
          {
            "name": "First Gold",
            "amount": {
              "value": 50,
              "unit": "grams"
            },
            "add": "end",
            "attribute": "flavour"
          },
          {
            "name": "Bramling Cross",
            "amount": {
              "value": 50,
              "unit": "grams"
            },
            "add": "end",
            "attribute": "flavour"
          }
        ],
        "yeast": "Wyeast 1272 - American Ale II™"
      },
      "food_pairing": [
        "Honey glazed ham with spicy roasted carrots",
        "Mature cheddar with spicy chutney",
        "Peach cobbler"
      ],
      "brewers_tips": "In beers like this with a hefty malt bill, it pays to check a spoonful of the mash with some iodine solution. This will indicate if the mash has converted all of the starch into fermentable sugars. If the colour is very dark, just extend the mash rest by 10 mins and check again.",
      "contributed_by": "Sam Mason <samjbmason>"
    }`;

const beerObj = JSON.parse(beerString);