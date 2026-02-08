import React from "react";
import cupcakeImg from "../assets/images/cupcake.jpg";

const Menu = () => {
  const menuCategories = [
    {
      title: "Custom Cakes",
      icon: "🎂",
      items: [
        { name: "Classic Vanilla", description: "Moist vanilla cake with vanilla buttercream, perfect for any occasion" },
        { name: "Chocolate Decadence", description: "Rich chocolate cake layered with chocolate ganache" },
        { name: "Red Velvet Supreme", description: "Southern classic with cream cheese frosting" },
        { name: "Lemon Bliss", description: "Fresh lemon cake with zesty lemon curd filling" },
        { name: "Carrot Cake", description: "Spiced cake loaded with carrots, walnuts, and cream cheese frosting" },
        { name: "Funfetti Celebration", description: "Vanilla cake studded with colorful sprinkles" },
        { name: "Strawberry Dream", description: "Strawberry cake with fresh strawberry buttercream" },
        { name: "Cookies & Cream", description: "Chocolate cake with Oreo buttercream" }
      ]
    },
    {
      title: "Gourmet Cupcakes",
      icon: "🧁",
      items: [
        { name: "Classic Vanilla", description: "Vanilla cupcake with swirled vanilla buttercream" },
        { name: "Chocolate Fudge", description: "Rich chocolate cupcake with chocolate fudge frosting" },
        { name: "Salted Caramel", description: "Vanilla cupcake with salted caramel buttercream" },
        { name: "Lemon Lavender", description: "Delicate lemon cake with lavender-infused frosting" },
        { name: "Red Velvet", description: "Classic red velvet with cream cheese frosting" },
        { name: "Birthday Cake", description: "Vanilla cupcake loaded with sprinkles" },
        { name: "Peanut Butter Chocolate", description: "Chocolate cupcake with peanut butter frosting" },
        { name: "Raspberry Champagne", description: "Champagne-infused cupcake with raspberry frosting" }
      ]
    },
    {
      title: "Artisan Cookies",
      icon: "🍪",
      items: [
        { name: "Classic Chocolate Chip", description: "Crispy edges, chewy center, loaded with chocolate chips" },
        { name: "Double Chocolate", description: "Chocolate cookie with chocolate chunks" },
        { name: "Snickerdoodles", description: "Cinnamon-sugar coated soft cookies" },
        { name: "Oatmeal Raisin", description: "Hearty oats with plump raisins" },
        { name: "Sugar Cookies", description: "Decorated sugar cookies perfect for any theme" },
        { name: "Peanut Butter", description: "Classic peanut butter with fork marks" },
        { name: "White Chocolate Macadamia", description: "Premium white chocolate and macadamia nuts" },
        { name: "Lemon Drop", description: "Tangy lemon cookies with powdered sugar" }
      ]
    },
    {
      title: "Specialty Treats",
      icon: "🥧",
      items: [
        { name: "Brownies", description: "Fudgy, rich chocolate brownies - plain, with nuts, or swirled with cream cheese" },
        { name: "Blondies", description: "Vanilla brownies with white chocolate chunks" },
        { name: "Cookie Bars", description: "Thick-cut cookie bars in various flavors" },
        { name: "Cheesecake Bars", description: "Creamy cheesecake in convenient bar form" },
        { name: "Lemon Bars", description: "Tangy lemon filling on a buttery shortbread crust" },
        { name: "Cake Pops", description: "Bite-sized cake balls on sticks, beautifully decorated" },
        { name: "Mini Pies", description: "Individual fruit pies perfect for parties" },
        { name: "Whoopie Pies", description: "Soft cookie sandwiches with creamy filling" }
      ]
    }
  ];

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>Our Menu</h1>
          <p className="lead fancy-font" style={{fontSize: '1.2rem', color: '#555'}}>
            Handcrafted desserts made fresh to order
          </p>
          <p className="text-muted">
            All items can be customized to your preferences. Dietary accommodations available upon request.
          </p>
        </div>
      </div>

      {menuCategories.map((category, idx) => (
        <div key={idx} className="row mb-5">
          <div className="col-12">
            <div className="card shadow-sm" style={{border: 'none', borderRadius: '15px', overflow: 'hidden'}}>
              <div className="card-header text-center py-4" style={{backgroundColor: '#6d8454', color: 'white'}}>
                <h2 className="mb-0">
                  <span className="me-3" style={{fontSize: '2rem'}}>{category.icon}</span>
                  {category.title}
                </h2>
              </div>
              <div className="card-body p-4">
                <div className="row">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="col-md-6 mb-4">
                      <div className="p-3 h-100" style={{
                        backgroundColor: '#f8f9fa', 
                        borderRadius: '10px',
                        borderLeft: '4px solid #6d8454'
                      }}>
                        <h5 style={{color: '#6d8454', fontWeight: 'bold'}}>{item.name}</h5>
                        <p className="mb-0 text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="row mt-5">
        <div className="col-12">
          <div className="alert" style={{
            backgroundColor: '#f0f4ed', 
            border: '2px solid #6d8454',
            borderRadius: '15px'
          }}>
            <h4 className="alert-heading" style={{color: '#6d8454'}}>
              <i className="bi bi-info-circle-fill me-2"></i>Custom Orders Welcome!
            </h4>
            <p className="mb-2">
              Don't see exactly what you're looking for? We love creating custom flavors and designs! 
            </p>
            <ul className="mb-3">
              <li>Gluten-free options available</li>
              <li>Vegan and dairy-free alternatives</li>
              <li>Nut-free preparations</li>
              <li>Sugar-free options</li>
              <li>Custom flavor combinations</li>
            </ul>
            <hr />
            <p className="mb-0">
              <strong>Please note:</strong> All items require advance notice. Contact us to discuss your order and timeline!
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 text-center">
          <a href="/contact" className="btn btn-lg" style={{
            backgroundColor: '#6d8454', 
            color: 'white',
            padding: '15px 50px',
            fontWeight: 'bold',
            borderRadius: '10px'
          }}>
            Place Your Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;