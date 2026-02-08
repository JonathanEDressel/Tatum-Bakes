import React from "react";
import cupcake from "../assets/images/cupcake.jpg";
import tatumLogo from "../assets/images/tatumbakes.jpg";

const Gallery = () => {
  const galleryItems = [
    { 
      image: cupcake, 
      title: 'Chocolate Dream Cupcakes', 
      desc: 'Rich chocolate cupcakes topped with silky chocolate buttercream and chocolate shavings. Perfect for chocolate lovers!',
      category: 'Cupcakes'
    },
    { 
      image: tatumLogo, 
      title: 'Custom Birthday Cake', 
      desc: 'A stunning three-tier vanilla celebration cake with buttercream frosting and custom decorations. Made this beauty for a special birthday!',
      category: 'Cakes'
    },
    { 
      image: cupcake, 
      title: 'Red Velvet Elegance', 
      desc: 'Classic red velvet cupcakes with cream cheese frosting, topped with a red velvet crumb. A customer favorite!',
      category: 'Cupcakes'
    },
    { 
      image: tatumLogo, 
      title: 'Wedding Cake Masterpiece', 
      desc: 'Multi-tiered wedding cake with delicate fondant roses and gold accents. Each tier featured a different flavor as requested by the happy couple.',
      category: 'Cakes'
    },
    { 
      image: cupcake, 
      title: 'Lemon Bliss Cupcakes', 
      desc: 'Light and fluffy lemon cupcakes with tangy lemon buttercream and a candied lemon slice. Fresh and zesty!',
      category: 'Cupcakes'
    },
    { 
      image: tatumLogo, 
      title: 'Chocolate Drip Cake', 
      desc: 'Decadent chocolate cake with chocolate ganache drip, topped with fresh berries and macarons. Perfect for any celebration!',
      category: 'Cakes'
    },
    { 
      image: cupcake, 
      title: 'Vanilla Bean Perfection', 
      desc: 'Classic vanilla cupcakes made with real vanilla bean, topped with vanilla buttercream swirls and colorful sprinkles.',
      category: 'Cupcakes'
    },
    { 
      image: tatumLogo, 
      title: 'Rustic Buttercream Cake', 
      desc: 'A beautiful semi-naked cake with rustic buttercream finish, decorated with fresh flowers and berries. Perfect for garden parties!',
      category: 'Cakes'
    },
  ];

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>Gallery</h1>
          <p className="lead fancy-font" style={{fontSize: '1.2rem', color: '#555'}}>
            A showcase of our sweet creations
          </p>
          <p className="text-muted">
            Each dessert is custom-made with love and attention to detail
          </p>
        </div>
      </div>

      <div className="gallery-container">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="mb-5">
            {idx % 2 === 0 ? (
              <div className="card shadow-sm" style={{
                border: 'none',
                borderRadius: '15px',
                overflow: 'hidden'
              }}>
                <div className="row g-0">
                  <div className="col-md-5">
                    <img 
                      src={item.image} 
                      className="img-fluid h-100" 
                      alt={item.title}
                      style={{objectFit: 'cover', width: '100%', minHeight: '250px'}}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-4 d-flex flex-column justify-content-center h-100">
                      <div>
                        <span 
                          className="badge mb-3" 
                          style={{
                            backgroundColor: '#6d8454',
                            color: 'white',
                            padding: '8px 15px',
                            fontSize: '0.85rem'
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h3 className="card-title mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                        {item.title}
                      </h3>
                      <p className="card-text" style={{fontSize: '1.1rem', lineHeight: '1.7', color: '#555'}}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card shadow-sm" style={{
                border: 'none',
                borderRadius: '15px',
                overflow: 'hidden'
              }}>
                <div className="row g-0">
                  <div className="col-md-7 order-md-1 order-2">
                    <div className="card-body p-4 d-flex flex-column justify-content-center h-100">
                      <div>
                        <span 
                          className="badge mb-3" 
                          style={{
                            backgroundColor: '#6d8454',
                            color: 'white',
                            padding: '8px 15px',
                            fontSize: '0.85rem'
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h3 className="card-title mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                        {item.title}
                      </h3>
                      <p className="card-text" style={{fontSize: '1.1rem', lineHeight: '1.7', color: '#555'}}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 order-md-2 order-1">
                    <img 
                      src={item.image} 
                      className="img-fluid h-100" 
                      alt={item.title}
                      style={{objectFit: 'cover', width: '100%', minHeight: '250px'}}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="card" style={{
            backgroundColor: '#f0f4ed',
            border: '2px solid #6d8454',
            borderRadius: '15px'
          }}>
            <div className="card-body p-5 text-center">
              <h3 className="mb-3" style={{color: '#6d8454'}}>
                <i className="bi bi-camera-fill me-2"></i>
                Want to See More?
              </h3>
              <p className="mb-4" style={{fontSize: '1.1rem'}}>
                Follow us on social media for daily updates, behind-the-scenes content, 
                and more photos of our delicious creations!
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-outline-secondary btn-lg" style={{
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  borderColor: '#6d8454',
                  color: '#6d8454'
                }}>
                  <i className="bi bi-instagram me-2"></i>Instagram
                </button>
                <button className="btn btn-outline-secondary btn-lg" style={{
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  borderColor: '#6d8454',
                  color: '#6d8454'
                }}>
                  <i className="bi bi-facebook me-2"></i>Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 text-center">
          <div className="p-5" style={{
            backgroundColor: '#6d8454',
            borderRadius: '15px',
            color: 'white'
          }}>
            <h3 className="mb-3">Inspired by What You See?</h3>
            <p className="mb-4" style={{fontSize: '1.1rem'}}>
              Let's create something beautiful and delicious for your next event!
            </p>
            <a href="/contact" className="btn btn-light btn-lg" style={{
              fontWeight: 'bold',
              padding: '12px 40px'
            }}>
              Place Your Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;