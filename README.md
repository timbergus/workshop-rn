# Workshop-RN
React Native w/Redux Workshop - Twitter API

## Acceptance Criteria

* The app should work for Android & iOS
* 


## Some tips...

* Use flatlist component for develop the different lists
* Use ActivityIndicator for develop loading component. Make a specific component, so you can reuse it. 
 
## Set Up Server

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