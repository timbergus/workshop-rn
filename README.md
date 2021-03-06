# Workshop-RN
React Native w/Redux Workshop - Twitter API

## Objective
This workshop teaches the basics of React Native development. We want to help you create the best of breed user experiences and mobile applications. The idea is to make our own twitter application starting from a react-native/redux boilerplate. 

##  Who Should Attend
The training will start at a low level, and does not require in depth knowledge of the platform in question. Desirable participant profile (basic knowledge): 
- HTML
- CSS (Especially Flexbox)
- JavaScript
- React Native
- Redux

## Getting Started

Please, use this repository as a base for you workshop phase. The idea is to fork this project so everyone uses the same folder structure for the workshop.

If this is your first time creating a React Native app, make sure you have Node, npm or yarn installed. For default, it's working with EXPO.

Follow the next steps: 

1. Run `git clone https://github.com/van1985/workshop-rn.git`
2. Enter workshop-rn folder: `cd workshop-rn`
3. Enter redux-boilerplate folder: `cd redux-boilerplate`
4. Run `npm install`
5. open an emulator (android or iOS - from android studio, xCode , genymotion)
6. Run `npm start` (and choose 'a' for android or 'i' for iOS emulator)
7. Enjoy

## Wireframes

### Home

<p align="center">
  <img height="80%" width="80%" src="https://github.com/van1985/workshop-rn/blob/master/wireframes/home.png">
</p>

### Twitter Details

<p align="center">
  <img height="40%" width="40%" src="https://github.com/van1985/workshop-rn/blob/master/wireframes/tweet_details.png">
</p>

### Search & Trends

<p align="center">
  <img height="80%" width="80%" src="https://github.com/van1985/workshop-rn/blob/master/wireframes/search_1.png">
</p>
<p align="center">
  <img height="80%" width="80%" src="https://github.com/van1985/workshop-rn/blob/master/wireframes/search_2.png">
</p>

### Configuration

<p align="center">
  <img height="40%" width="40%" src="https://github.com/van1985/workshop-rn/blob/master/wireframes/configuration.png">
</p>


## Stories

1. **As a user ,I want to see my twitter timeline.**

2. **As a user, I want to see my twitter timele  (with infinite scroll).**

3. **As a user, I want to see a specific twitter details.**

4. **As a user, I want to see my country trends.**

5. **As a user, I want to search on twitter to quickly find news and events.**

6. **As a user, I want to see all the results for a specific search (with infinite scroll).**

7. **As a user, I want to configure what I want to see in my twitter timeline. This configuration must be reflected in the home section.**

8. **As a user, I want to use the app in Android & iOS Platform**

## Some tips...

* Use flatlist component for develop the different lists.
* Use ActivityIndicator for develop loading component. Make a specific component, so you can reuse it. 
* Use propTypes property for typechecking on the props for a component.
* Use the _base.js file to save all colors and attributes that are cross to the application.
 
## Set Up Twitter Server

1. Open the console
2. Enter inside `server` folder
3. Execute the command `node server` in the console
3. Open the browser and type `localhost:8080`
4. Should see this text on the brower `Twitter API is running...`

The endpoints availables are:

### GET statuses / home_timeline

endpoint: /timeline?count=100

Returns a collection of the most recent Tweets posted by the authenticating user and the users they follow.

#### Parameters

**count (optional)**: Specifies the number of records to retrieve. Must be less than or equal to 200. Defaults to 20. The value of count is best thought of as a limit to the number of tweets to return because suspended or deleted content is removed after the count has been applied.

### GET trends/place

endpoint: /trends?id=23424747

Returns the top 50 trending topics for a specific WOEID, if trending information is available for it.

#### Parameters

**id (required)**: The Yahoo! Where On Earth ID of the location to return trending information for. Global information is available by using 1 as the WOEID .

### GET search/tweets

endpoint: /search?q=TanBionicaCocaColaFM

Returns a collection of relevant Tweets matching a specified query.. This search API searches against a sampling of recent Tweets published in the past 7 days. Part of the 'public' set of APIs.

#### Parameters

**q (required)**: A UTF-8, URL-encoded search query of 500 characters maximum, including operators. Queries may additionally be limited by complexity.

### GET statuses/show/:id

endpoint: show?id=1011417658833551361 (id_str)

Returns a single Tweet, specified by the id parameter. The Tweet’s author will also be embedded within the Tweet.

#### Parameters

**id** (required): The numerical ID of the desired Tweet.
