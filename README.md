# Cat GIFs

## Run Guide

In order to run this project locally, download the files, then enter the following scripts in the command line:

npm install

npm start

Webpack will compile assets and launch a dev version at localhost:3000.

## Goal

Create a web application that shows different cat gifs via the Giphy API each time a button is clicked.  Repeated gifs should be avoided as much as possible.

The following technologies should be used:

- ReactJS
- Redux
- React-Router
- Fetch API
- Giphy API
- ECMAScript 2015


## Initial Plan

My initial build plan was to create a ReactJS project and use the Redux cycle to make Fetch API requests from within the middleware.  Giphy's API would return data, which would be processed by pure functions in the application's reducer (following Redux principles).

In order to avoid recurring gifs, I thought of a number of potential solutions:

#### Use a database

A database could easily keep track of all previously requested information, preventing a priorly seen gif from being displayed ever again.

However, this would likely require user authentication, which would make this application unnecessarily complex, and if the user requested enough gifs, there would be no more new content to display.  At this point the database would likely be reset and previously seen gifs would be shown again, eliminating the need for a database all together.

#### Use cookies

Cookies could be used to keep track of queried data for a given browser.  A browser cookie can hold up to 4000 bytes, and updating it every time a request is made could keep a running log of recent activity.

As far as how we could store this data, values referring to the pagination parameters (offset, length) are small and would allow us to keep track of which gifs we had recently seen.  However, since Giphy's database is dynamic, these values would become useless as soon as a new cat gif was uploaded.  

While we could store ID numbers of recent gifs in the cookie, these numbers are around 12-14 characters in length, which would mean our cookie would only be able to keep track of around 300 recent gifs (assuming that each character would take up 1 byte of space in a cookie with a max limit of 4000 bytes).

Not only is this buffer rather small, but adding a cookie would increase the amount of data that needs to be transmitted, which could become a factor on devices with slower connections.

#### Query Giphy API for total number of cat gifs, then select one at random

On initial testing, I noticed the data that the Giphy API returns includes a total_count parameter.  I assumed this parameter referred to the total number of cat gifs I was searching for in my requests.  If that were the case, I could use the onComponentMount lifecycle method to grab the total number of available cat gifs when the application was loaded.  This would allow me to know the upper limit of my random number, ensuring that I was randomly selecting a gif from the biggest possible pool.

Unfortunately, further testing revealed that while the total_count parameter does seem to refer to the number of gifs matching the search query, the offset value in a request cannot exceed 4998.  Any search request that attempts to pull data offset by more than 4998 returns nothing.

#### Use a random number between 0 and 4998

After discovering that the Giphy API's highest accepted offset value was 4998, I chose to simply select a random number, which would result in a very low probability of recently repeated gifs appearing in the application.

In addition, this approach would keep the application simple and fast, ensuring requests were as streamlined as possible.

## Application Lifecycle

All state changes in this application are handled from within the Redux store.  Requesting a new gif dispatches an action that holds a Fetch API request.  This request is caught in the middleware, where it is fired and waits for returning data.  When data is returned, another action is dispatched, which is caught in the reducer and updates the state with a pure function.

ReactJS then uses the returned state to determine what elements need to be modified, and updates the gif source parameter accordingly.

## Additional Features

I noticed that depending on the speed of the internet connection, the response time of the Giphy API, and the size of the incoming gif, the user might have to wait a second or two until the new gif arrives.  

To ensure the user knows that a new gif is on its way, I added a variation of a traditional loading spinner by using a CSS keyframe animation to rapidly change the colors of an existing page element.  This animation starts as soon as a new gif is requested and ceases once it loads, letting a waiting user know that their request is processing.

## Styling

I decided to design this web application to look exactly like the interior wall of an older house, where art depicting cats might not look completely out of place.

The main gif is surrounded by a gilded frame border, which makes it look like a featured masterpiece.  The button to request a new gif takes the form of a miniature metal plaque underneath the gif, and performs a sweeping shine animation upon mouse hover.

In addition, an image of a chest of drawers is fixed to the bottom of the page.  This not only adds to the atmosphere of the webpage, but also serves as a base for the gif loading spinner, which takes the form of a cat-themed picture frame.  As discussed earlier, the background of this spinner rapidly changes color to signify that a new gif is in the process of being loaded.

Upon arriving at the page or refreshing it, all elements (aside from the background and title) have zero opacity until the first gif is loaded, to prevent elements from jumping around as they load.  Once the first gif loads, these elements fade in.

All images (wallpaper, button, title, picture frames, furniture, etc) were processed in Adobe Photoshop to ensure they were appropriately sized and displayed.
