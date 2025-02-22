import React from "react";


const FoodSupply = () => {
  return (
    <>
      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1 className="mt-5">Food Supply</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">About Our Food Services</h1>
                <img
                  src="images/Icon_team.png"
                  alt="line"
                  className="med_bottompadder20"
                />
                <p>
                  Welcome to Deepmind-Food Supply. We are dedicated to providing
                  high-quality food services, ensuring fresh and delicious meals
                  delivered to your doorstep.
                  <br />
                  Our services include a variety of food processes, from
                  sourcing fresh ingredients to carefully preparing and
                  packaging meals for delivery.
                </p>
                <div className="food_image_wrapper">
                  <img
                    className="img-responsive"
                    src="images/foodservice/food.jpg"
                    alt="food-img"
                  />
                  <img
                    className="img-responsive mt-3 "
                    src="images/foodservice/preparation.jpg"
                    alt="food-preparation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_us_section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">FOOD ITEMS</h1>
                <img
                  src="images/Icon_team.png"
                  alt="line"
                  className="med_bottompadder20"
                />
                <p>
                  We offer a wide range of food items, from healthy salads and
                  hearty main courses to delicious desserts. Below is the list
                  of items along with their prices.
                </p>
                <div className="food_image_wrapper">
                  <img
                    className="img-responsive mt-3"
                    src="images/foodservice/food-items.jpg"
                    alt="food-items"
                  />
                  <img
                    className="img-responsive mt-3"
                    src="images/foodservice/food-item2.jpg"
                    alt="food-items2"
                  />
                 
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="abt_txt">
                <h3>
                  <b>LIST OF FOOD ITEMS</b>
                </h3>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered food-table">
                  <thead className="thead-dark">
                    <tr>
                      <th>Serial Number</th>
                      <th>Food Item</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Salad</td>
                      <td>Fresh mixed greens with a variety of toppings.</td>
                      <td>₹150</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Chicken Curry</td>
                      <td>
                        Spicy and flavorful chicken curry with aromatic spices.
                      </td>
                      <td>₹300</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pasta</td>
                      <td>Rich and creamy pasta with a selection of sauces.</td>
                      <td>₹250</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Grilled Sandwich</td>
                      <td>
                        Grilled sandwich with fresh vegetables and cheese.
                      </td>
                      <td>₹100</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Chocolate Cake</td>
                      <td>Delicious and moist chocolate cake.</td>
                      <td>₹200</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Fruit Juice</td>
                      <td>Freshly squeezed seasonal fruit juice.</td>
                      <td>₹80</td>
                    </tr>
                  </tbody>
                </table>
                
              </div>
              <div className="order_btn text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-primary">
                      Order Now
                    </a>
                  </li>
                </ul>
              </div>
              <div className="food_image_wrapper">
                  <img
                    className="img-responsive mt-3"
                    src="images/foodservice/salad.jpg"
                    alt="dessert"
                  />
                  <img
                    className="img-responsive mt-3"
                    src="images/foodservice/dessert.jpg"
                    alt="dessert"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodSupply;
