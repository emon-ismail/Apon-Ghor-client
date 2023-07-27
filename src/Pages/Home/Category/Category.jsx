
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import { Carousel } from 'react-responsive-carousel';

const Category = () => {
    return (
     

         <div class="carousel carousel-center rounded-box p-10 space-x-4 ">
              
  <div class="carousel-item">
<div className="p-4 space-x-4 ">
 <img src={img1}/>
    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
</div>

<div className="p-4 space-x-4 ">
 <img src={img2}/>
    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
</div>
<div className="p-4 space-x-4 ">
 <img src={img3}/>
    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
</div>

<div className="p-4 space-x-4 ">
 <img src={img4}/>
    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
</div>
<div className="p-4 space-x-4 ">
 <img src={img5}/>
    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
</div>
<div className="p-4 space-x-4 ">
 <img src={img5}/>
    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
</div>




    
  </div> 
  


</div>
        
    );
};

export default Category;