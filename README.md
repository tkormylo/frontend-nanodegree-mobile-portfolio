## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

************************************************
************************************************
**                                            **
**  Thomas Kormylo - Optimization Changes     **
**                                            **
************************************************
************************************************

1. I researched, downloaded, installed, and utilized "GRUNT" as a solution to help optimize the index.html web page. The tasks GRUNT performs are listed below. Please see the gruntfile.js file for details on the tasks and how they are defined.
 - Clean all necessary directories and files before running grunt tasks to ensure old production files are deleted.
 - Minify CSS files
 - Uglify JS files
 - Resize Images
 - Optimize Images
 - Place critical CSS inline (index.html)
 
 2. Updated master index.html to use minified CSS files
 
 3. PageInsights score above 90 achived for both mobile and desktop.




####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>


************************************************
************************************************
**                                            **
**  Thomas Kormylo - FPS Optimization Changes **
**                                            **
************************************************
************************************************

1. After a review of the main.js file I made the following changes.
 - Update the number of animated pizzas from 200 to 35. The screen is still covered in pizzas, but greatly reduces the load and time to process the animations.
 - Update the "updatePositions" FOR loop that controls the pizzas location updates to pull out any variables that can be calculated as static to NOT be a part of the FOR loop. Again, the greatly helps with load times as the CPU does not need to re-calculate the same information over and over despite the value(s) remaining static.
 - 8/18/2015: Made additional updates as per suggestions of Udacity code review. Items such as how I scan the DOM for certain elements by
	class name have been improved, FOR loops have been further optimized to remove redundant static calculations, etc.
 - 8/18/2015: One change that has not been made is to dynamically calculate the number of pizzas to render on the screen based on the "inner height".
	While the suggestion from Udacity was made. It is not clear to me how this would be implemented or done. The review was classified as a nitpic
	and at this time the application currently performs well above 60FPS after the other changes were made.
 - 8/18/2015: Updated styles.css for pizza.html based on Udacity code review to further enhance FPS performance.
 
 
 
*******************************************************
*******************************************************
**                                                   **
**  Thomas Kormylo - Change Pizza Sizes Optimization **
**                                                   **
*******************************************************
*******************************************************

1. After a review of the main.js file I made the following changes.
 - Update the "changePizzaSizes" FOR loop so that the following variables are pre-calculated globally as they are static and do not need to be re-calucated with each iteration of the FOR loop.
	- var ranPizzaContainers = document.querySelectorAll(".randomPizzaContainer");
	- var numOfPizzaContainers = ranPizzaContainers.length;
	- var dx = determineDx(ranPizzaContainers[0], size);
	- var newwidth = (ranPizzaContainers[0].offsetWidth + dx) + 'px';

- After making the above variables "global" and not part of the FOR loop, the pizza sized change time is now under 5ms as directed.