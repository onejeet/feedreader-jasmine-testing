/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {

                /* This is our first test - it tests to make sure that the
                 * allFeeds variable has been defined and that it is not
                 * empty. Experiment with this before you get started on
                 * the rest of this project. What happens when you change
                 * allFeeds in app.js to be an empty array and refresh the
                 * page?
                 */
                it('are defined', function() {
                    expect(allFeeds).toBeDefined();
                    expect(allFeeds.length).not.toBe(0);
                });


                /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a URL defined
                 * and that the URL is not empty.
                 */
                it('URL Validator',function(){
                    allFeeds.forEach(function(feed){
                        expect(feed.url).toBeDefined();
                        expect(feed.url.length).not.toBe(0);
                    });
                });


                /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */
                it('Name Validator',function(){
                    allFeeds.forEach(function(feed){
                        expect(feed.name).toBeDefined();
                        expect(feed.name.length).not.toBe(0);
                    });
                 });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The Menu', function() {

                /*
                 * Select Body Element before each spec
                 */
                body = $('body');
                menuIcon = $('.menu-icon-link');

                /* TODO: Write a test that ensures the menu element is
                 * hidden by default. You'll have to analyze the HTML and
                 * the CSS to determine how we're performing the
                 * hiding/showing of the menu element.
                 */
                 it('Menu Default Validator', function(){
                    expect(body.hasClass('menu-hidden')).toBe(true);
                 });

                 /* TODO: Write a test that ensures the menu changes
                  * visibility when the menu icon is clicked. This test
                  * should have two expectations: does the menu display when
                  * clicked and does it hide when clicked again.
                  */
                  it('Menu Toggle Validator', function(){
                    menuIcon.click();
                    expect(body.hasClass('menu-hidden')).toBe(false);
                    menuIcon.click();
                    expect(body.hasClass('menu-hidden')).toBe(true);
                 });
    });

    /* EXTRA: Header Title Test Suite */

    describe('Header Title', function(){

                /* Write a test that ensures when the Feed Reader
                 * Web App loads, the initial Header-Title should set to 'Feeds'
                 * until the async call completes and loads the feed title
                 */
                it('Default Header Title Validator', function(){
                        const headerTitle = $('.header-title').text();
                        expect(headerTitle =='Feeds').toBe(true);
                });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function(){
                /*
                 * Run Before Spec
                 */
                beforeEach(function(done){
                    loadFeed(0, function(){
                        done();
                        });
                });

                /* TODO: Write a test that ensures when the loadFeed
                 * function is called and completes its work, there is at least
                 * a single .entry element within the .feed container.
                 * Remember, loadFeed() is asynchronous so this test will require
                 * the use of Jasmine's beforeEach and asynchronous done() function.
                 */
                it('Intial LoadFeed Entries Validator', function(){
                        const feedEntries = $('.feed .entry').length;
                        expect(feedEntries).toBeGreaterThan(0);
                });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function(){
                /*
                 * Run Before Spec
                 */
                beforeEach(function(done){
                        loadFeed(0, function(){
                            previousFeed = $('.feed').html();
                            done();
                        });
                });

                /*
                 * Run After Spec
                 * Return to the default feed
                 */
                afterEach(function(){
                        loadFeed(0, function(){
                        });
                });

                /* TODO: Write a test that ensures when a new feed is loaded
                 * by the loadFeed function that the content actually changes.
                 * Remember, loadFeed() is asynchronous.
                */
                it('Entries Change Validator', function(done){

                    // Switching to Random Feed between index 1 to last
                    const id = Math.floor(Math.random() * (allFeeds.length - 1)) + 1;

                    loadFeed(id, function(){
                            const currentFeed = $('.feed').html();
                            expect(previousFeed === currentFeed).toBe(false);
                            done();
                    });
                });

    });

}());
