const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Connected !");
})
const products=[
    {
        Title : "XPS 13",
        Price : "$1,349.99",
        Description : `Our smallest 13-inch laptops feature a virtually
         borderless InfinityEdge display and up to 10th gen Intel® processors. 
         Touch, silver, rose gold and frost options available.`
      },
      {
        Title : "XPS 15",
        Price : "$1,749.99",
        Description:`  Powerhouse performance with the latest processors and NVIDIA 
            graphics paired with a stunning 4K Ultra HD display.`

      },
      
    ];
 
    function getProduct(pro){
        let s='';
        for(i=0;i<pro.length;i++){
            s+=`<p><b>Product Title</b> : ${products[i].Title}
        <br><b>Price</b> : ${products[i].Price}
        <br><b>Description</b> : ${products[i].Description}</p>`
        }
         return s;
       

    }
 

const objects={
    home:{
        title:'Home Page',
        h1:'This is NodeJs Home Page',
        main:` <p>
                 The first route would be handled when someone visits the root domain of the website, i.e the homepage. The home page should contain : a header, a nav with 3 links, a main area with two sections that contains some content and a footer.
                </p>
                <p>
                  The second route should facilitate users when they navigate to  “/contact-us'' This route should return a contact us page. The page should contain all of the above areas from the home page (a header, a nav with 3 links, a main area, footer). However for this main section, it should contain a contact us form. The contact us form should have  labels and form controls that will capture a user first and last name, phone number and their message.
                </p>`
         },
    contact:{
        title:'Contact us',
        h1:'Contact Us',
        main:`<form>
        <lable>First Name:</lable>
        <input type="text"><br>
        <lable>Last Name:</lable>
        <input type="text"><br>
        <lable>Email</lable>
        <input type="email"><br>
        <label>Contact Number</label>
        <input type="tel"><br>
        <input type="submit">
    </form>`
    },
    products:{
        title:'Product Page',
        h1:'This is NodeJs Product Page',
        main:getProduct(products)
    },
    about:{
        title:'About Page',
        h1:'Experimentation with building Simple Express.js Web Apps.',
        main:`

       <p> Build an Express App that listens to 3 routes:
       </p>
       <p>The first route would be handled when someone visits the root domain of the website, i.e the homepage. The home page should contain : a header, a nav with 3 links, a main area with two sections that contains some content and a footer.  
       </p> 
       <p> The second route should facilitate users when they navigate to  “/contact-us'' This route should return a contact us page. The page should contain all of the above areas from the home page (a header, a nav with 3 links, a main area, footer). However for this main section, it should contain a contact us form. The contact us form should have  labels and form controls that will capture a user first and last name, phone number and their message.
       </p>
       <p> The third route should facilitate users when they navigate to “/products.” Like, the previous pages, this page should also contain a header, a nav with 3 links, a main area and a  footer. However, the main section for this page must contain dynamic data that must be pulled from an “Fake database” aka an array. The array  should be populated with 3 product objects. Each product should have a title, price and a description. 
       </p>
       <p>See below  examples  of how I went the products being rendered on the page</p>
                
       <p>       Product Title : XPS 13
        Price : $1,349.99<br>
        Description : Our smallest 13-inch laptops feature a virtually <br>
        borderless InfinityEdge display and up to 10th gen Intel® processors. <br>
        Touch, silver, rose gold and frost options available.</p>
        <p>
        Product Title : XPS 15<br>
        Price : $1,749.99<br>
        Powerhouse performance with the latest processors and NVIDIA <br>
        graphics paired with a stunning 4K Ultra HD display.</p>
        <p> 
         The above routes all have common areas : a header, nav, footer and a main section. Using your programming knowledge, make the above more efficient so that you don’t have to repeat those sections over and over again.
         </p>`
    }
    
};

function page(obj){
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>${obj.title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <header>
                <h1>${obj.h1}</h1>
            </header>
            <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/contact">Contact Us</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
            </ul>
    
            </nav>
            <main>
               ${obj.main}
            </main>
            <footer>
                
            </footer>
        </body>
    </html>`
}
app.get("/",(req,res)=>{
   
    res.send(page(objects.home));
})
app.get("/contact",(req,res)=>{
    res.send(page(objects.contact));
})

app.get("/products",(req,res)=>{
     res.send(page(objects.products));
 })

 app.get("/about",(req,res)=>{
    res.send(page(objects.about));
})