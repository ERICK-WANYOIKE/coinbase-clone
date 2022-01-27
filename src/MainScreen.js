import Content from "./Content"
import Team from "./Team";
import CardSection from "./CardSection";
import Feature from "./Feature";
import FeturesPg from "./FeaturesPg"




const { default: NavBar } = require("./NavBar")
const { default: Hero } = require("./Hero")
const { default: Footer } = require("./Footer")



const travelLocations = [
    {
      image: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'",
      title: "Backpack",
      description: "Lovely travel destination",
      price:"$220",
      buttonLabel: "Add to Cart",
    
    },
    {
        image: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'",
        title: "Backpack",
        description: "Lovely travel destination",
        price:"$220",
        buttonLabel: "Add to Cart",
      
      },
      {
        image: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'",
        title: "Backpack",
        description: "Lovely travel destination",
        price:"$220",
        buttonLabel: "Add to Cart",
      
      },
      {
        image: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'",
        title: "Backpack",
        description: "Lovely travel destination",
        price:"$220",
        buttonLabel: "Add to Cart",
      
      },
      {
        image: "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'",
        title: "Backpack",
        description: "Lovely travel destination",
        price:"$220",
        buttonLabel: "Add to Cart",
      
      },
   
  ];


const MainScreen = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Feature/>
            <FeturesPg/>
            <CardSection content={travelLocations}/>
            <Content/>
            <Team/>
            <Footer/>
           
        </div>
      );
}
 
export default MainScreen;