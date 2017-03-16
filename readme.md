# Couch-Recipe - Example App

[http://ec2-54-152-93-18.compute-1.amazonaws.com/](Couch-Recipe)

__Goal__: Production of a web application demonstrating an example recipe review area.

__Description__:  The web app features a login page (doesn't actually log in or register users) and a recipes page. The recipes page retrieves recipe details and star ratings for each recipe from a CouchDB database. The user can update their ratings for each recipe and rating changes are stored in the database for later retrieval. Clicking on a recipe will display the description and ingredients of the recipe. Clicking on the rating stars will update the stars view and store this new rating in the database.

__Constraints__: Must use Angular 2, Node.js/Express, and a NoSQL database management system - in this case CouchDB.
