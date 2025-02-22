import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Banner Image */}
      <img 
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" 
        className="img-fluid w-100 pt-1" 
        alt="Banner"
      />

      {/* Recipe Cards Section */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-2">
        
        {/* Card 1 - Veg Recipes */}
        <div className="col">
          <div className="card">
            <img 
              src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg" 
              className="card-img-top" 
              alt="Veg Recipe" 
            />
            <div className="card-body">
              <h5 className="card-title">Veg Recipes</h5>
              <p className="card-text">Try delicious vegetarian dishes with fresh ingredients.</p>
            </div>
          </div>
        </div>

        {/* Card 2 - Healthy Meals */}
        <div className="col">
          <div className="card">
            <img 
              src="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg" 
              className="card-img-top" 
              alt="Healthy Meal" 
            />
            <div className="card-body">
              <h5 className="card-title">Healthy Meals</h5>
              <p className="card-text">Nutritious and tasty meal ideas to keep you fit and energized.</p>
            </div>
          </div>
        </div>

        {/* Card 3 - Desserts */}
        <div className="col">
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="card-img-top" 
              alt="Dessert" 
            />
            <div className="card-body">
              <h5 className="card-title">Desserts</h5>
              <p className="card-text">Indulge in delicious homemade desserts and sweet treats.</p>
            </div>
          </div>
        </div>

        {/* Card 4 - Fast Food */}
        <div className="col">
          <div className="card">
            <img 
              src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" 
              className="card-img-top" 
              alt="Fast Food" 
            />
            <div className="card-body">
              <h5 className="card-title">Fast Food</h5>
              <p className="card-text">Enjoy quick and easy fast food recipes for a tasty treat.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;