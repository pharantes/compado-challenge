# Compado Challenge

This project was created using [Create React App](https://github.com/facebook/create-react-app) on Front-end and Node.js/Express on the Backend.
The project was deployed on Heroku.com -> [Compado Challenge](https://compado-challenge.herokuapp.com/)

## Exercise

Create a small javascript application that:Connects to the ebay product API.Gets a list of products for a given keyword (or keywords) and allows the user to set a price range to filter products.Displays the results in a list.Make the list and search form as user friendly as possible.Provide styling using a CSS preprocessor. (SASS)Feel free to use existing third party components such as ReactTable or VueTableChoose an existing design upon which to base your application’s design, and explain why you choose this design

## Run the app locally

1. ### `git clone https://github.com/pharantes/compado-challenge.git`
2. ### `cd client` && `npm install`
3. ### `cd server` && `npm install`
4. ### `cd client` && `npm start`
5. ### `cd server` && `npm start`

## Deployment on Heroku

Create a project on Heroku.com. I named the project "compado-challenge".
Then, you need to link your Git project with Heroku.

```
# Replace "compado-challenge" by the name of your Heroku project
$ heroku git:remote -a compado-challenge
$ git push heroku master
```

## Improvements

Setup a load more button for the ProductsList component depending on the size of the search object.
This way we could improve speed and usability.

## Screenshot

[](./'ebay.png')
