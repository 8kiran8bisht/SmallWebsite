# SmallWebsite
Dynamic Web page in NodeJs
************************************************************************************


Experimentation with building Simple Express.js Web Apps.

Build an Express App that listens to 3 routes:

The first route would be handled when someone visits the root domain of the website, i.e the homepage. The home page should contain : a header, a nav with 3 links, a main area with two sections that contains some content and a footer.  

The second route should facilitate users when they navigate to  “/contact-us'' This route should return a contact us page. The page should contain all of the above areas from the home page (a header, a nav with 3 links, a main area, footer). However for this main section, it should contain a contact us form. The contact us form should have  labels and form controls that will capture a user first and last name, phone number and their message.

The third route should facilitate users when they navigate to “/products.” Like, the previous pages, this page should also contain a header, a nav with 3 links, a main area and a  footer. However, the main section for this page must contain dynamic data that must be pulled from an “Fake database” aka an array. The array  should be populated with 3 product objects. Each product should have a title, price and a description. 

See below  examples  of how I went the products being rendered on the page
        
        Product Title : XPS 13
Price : $1,349.99
Description : Our smallest 13-inch laptops feature a virtually 
borderless InfinityEdge display and up to 10th gen Intel® processors. 
Touch, silver, rose gold and frost options available.

Product Title : XPS 15
Price : $1,749.99
Powerhouse performance with the latest processors and NVIDIA 
graphics paired with a stunning 4K Ultra HD display.

 The above routes all have common areas : a header, nav, footer and a main section. Using your programming knowledge, make the above more efficient so that you don’t have to repeat those sections over and over again.
