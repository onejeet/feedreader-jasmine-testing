# FeedReader Testing Using Jasmine Framework
---
**Project**: Feed Reader
**Testing Framework**: [Jasmine 2.1.2](http://jasmine.github.io/)
**Developer**: [Jitendra Sharma](https://github.com/onejeet)
**Project Of**: Frontend Developer Nanodegree Course by Udacity


## Project Summary
---
Feed Reader is a web-based application that reads RSS feeds via async call. As, a frontend developer the task is to write test cases for multiple funcationalities. [Jasmine 2.1.2](http://jasmine.github.io/) testing framework has been used to test the web app for different scenarios.


## Web App Live
---
The web App is publicly hosted on github pages.
 **Checkout Live WebApp** : [Feed Reader Testing Project](https://onejeet.github.io/)

## How to Run the Web App Locally
---
**Using GUI**:

1. Click "Clone in Desktop" / "Download ZIP".
2. Open the folder.
3. Open index.html on your preferred browser.
4. There should be several test results at the bottom of the screen that says... 
"__  specs, __  failures"

**Using TERMINAL**:

1. **Pre-requisite** : Install [**git**](https://git-scm.com/).
2. Clone this repo. Open your terminal or Git Bash and run `git clone `   <<<<<<<<<---
3. Open the folder.
4. Open index.html on your preferred browser.
5. There should be several test results at the bottom of the screen that says... 
"__  specs, __  failures"

## Tests Performed
---
**RSS Feeds**:
- Feeds are defined.
_Web App Must have a well defined feed array. Array shoud not be empty._
- Feed URLs are defined and are not empty.
_This will test the Feed's URL for being defined and not empty._
- Feed names are defined and are not empty.
_This will test the Feed's Name for being a String, defined and not empty._

**Menu Bar** :
- Menu Bar is hidden on page load.
_This will check for Menu's deafult behaviour when page loads. The menu shoud be hidden by default._
- Menu Bar appears on  first click.
- Menu Bar disappears on  second click.
_This will check for Menu's behaviour when the hamburger icon is clicked. First click should toggle the menu's visiblity to show. And the following second click should toggle visiblity to hidden._

**Default Header Title**:
- Default Header Title should be 'Feeds'.
_Header Title must set to 'Feeds' before the async call loads the feed title._

**Intial RSS Feed has Entries**:
- Intial feed must have entries.
_This Spec will check that default feed must have atleast one entry on the web page._

**Feed Content Changes on Changing Feed** :
- New feed entries loads on changing feed.
_The Feed will automatically change to a random feed, other than the current. The Jasmine spec check for the content and will switch the page back to deafult feed._


## Resources Used
---
- [**Jasmine Framework 2.1.2**](http://jasmine.github.io/)
- [**Orgional Feed ReaderSource Code**](https://github.com/udacity/frontend-nanodegree-feedreader)
- [**Udacity Frontend Developer NanoDegree Course**](https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001)

