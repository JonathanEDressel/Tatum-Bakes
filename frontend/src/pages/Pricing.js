import React from "react";

const Pricing = () => {
  const pricingData = [
    {
      category: "Custom Cakes",
      icon: "🎂",
      basePrice: "Starting at $45",
      description: "Beautifully decorated custom cakes for your special occasions",
      sizes: [
        { size: "6-inch (serves 8-10)", price: "$45-65" },
        { size: "8-inch (serves 12-16)", price: "$65-85" },
        { size: "10-inch (serves 20-25)", price: "$85-120" },
        { size: "1/4 sheet (serves 25-30)", price: "$90-130" },
        { size: "1/2 sheet (serves 45-50)", price: "$140-180" }
      ],
      notes: "Prices vary based on design complexity, filling choices, and decoration details"
    },
    {
      category: "Cupcakes",
      icon: "🧁",
      basePrice: "Starting at $30/dozen",
      description: "Individually crafted cupcakes with premium frosting",
      sizes: [
        { size: "Half dozen (6)", price: "$18-22" },
        { size: "One dozen (12)", price: "$30-36" },
        { size: "Two dozen (24)", price: "$55-65" },
        { size: "Three dozen (36)", price: "$80-90" }
      ],
      notes: "Specialty flavors and intricate decorations may incur additional charges"
    },
    {
      category: "Cookies",
      icon: "🍪",
      basePrice: "Starting at $18/dozen",
      description: "Fresh-baked cookies made with premium ingredients",
      sizes: [
        { size: "Half dozen (6)", price: "$10-12" },
        { size: "One dozen (12)", price: "$18-22" },
        { size: "Two dozen (24)", price: "$34-40" },
        { size: "Decorated Sugar Cookies", price: "$36-48/dozen" }
      ],
      notes: "Custom decorated sugar cookies priced based on design complexity"
    },
    {
      category: "Specialty Items",
      icon: "🥧",
      basePrice: "Varies by item",
      description: "Brownies, bars, cake pops, and other delicious treats",
      sizes: [
        { size: "Brownies (dozen)", price: "$24-30" },
        { size: "Cookie/Lemon Bars (dozen)", price: "$28-34" },
        { size: "Cake Pops (dozen)", price: "$30-42" },
        { size: "Mini Cheesecakes (dozen)", price: "$36-45" }
      ],
      notes: "Perfect for parties, gifts, or treating yourself!"
    }
  ];

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>Pricing Guide</h1>
          <p className="lead fancy-font" style={{fontSize: '1.2rem', color: '#555'}}>
            Quality ingredients, handcrafted with love
          </p>
          <p className="text-muted">
            All prices are estimates. Final pricing depends on specific requirements and customizations.
          </p>
        </div>
      </div>

      <div className="row">
        {pricingData.map((item, idx) => (
          <div key={idx} className="col-lg-6 mb-4">
            <div className="card h-100 shadow-sm" style={{
              border: 'none',
              borderRadius: '15px',
              overflow: 'hidden'
            }}>
              <div className="card-header text-center py-4" style={{
                backgroundColor: '#6d8454',
                color: 'white'
              }}>
                <div style={{fontSize: '3rem'}}>{item.icon}</div>
                <h3 className="mb-2">{item.category}</h3>
                <p className="mb-0" style={{fontSize: '1.3rem', fontWeight: 'bold'}}>
                  {item.basePrice}
                </p>
              </div>
              <div className="card-body p-4">
                <p className="text-center mb-4 fancy-font" style={{fontSize: '1.05rem'}}>
                  {item.description}
                </p>
                <div className="pricing-list">
                  {item.sizes.map((size, sizeIdx) => (
                    <div key={sizeIdx} className="d-flex justify-content-between align-items-center mb-3 pb-2" style={{
                      borderBottom: '1px solid #e9ecef'
                    }}>
                      <span style={{fontSize: '1rem'}}>{size.size}</span>
                      <span style={{
                        fontWeight: 'bold',
                        color: '#6d8454',
                        fontSize: '1.1rem'
                      }}>{size.price}</span>
                    </div>
                  ))}
                </div>
                <div className="alert alert-light mt-3" style={{
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #e9ecef',
                  borderRadius: '10px',
                  fontSize: '0.9rem'
                }}>
                  <small><strong>Note:</strong> {item.notes}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="card shadow" style={{
            border: 'none',
            borderRadius: '15px',
            backgroundColor: '#f0f4ed'
          }}>
            <div className="card-body p-5">
              <h3 className="text-center mb-4" style={{color: '#6d8454'}}>
                Important Information
              </h3>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <h5 style={{color: '#6d8454'}}>
                    <i className="bi bi-calendar-check me-2"></i>Ordering Timeline
                  </h5>
                  <ul className="list-unstyled ms-4">
                    <li className="mb-2">📅 <strong>Custom Cakes:</strong> 2-3 weeks advance notice preferred</li>
                    <li className="mb-2">🧁 <strong>Cupcakes:</strong> 1 week minimum</li>
                    <li className="mb-2">🍪 <strong>Cookies:</strong> 3-5 days minimum</li>
                    <li className="mb-2">⚡ <strong>Rush Orders:</strong> May incur additional fees</li>
                  </ul>
                </div>
                <div className="col-md-6 mb-3">
                  <h5 style={{color: '#6d8454'}}>
                    <i className="bi bi-info-circle me-2"></i>Additional Details
                  </h5>
                  <ul className="list-unstyled ms-4">
                    <li className="mb-2">💳 50% deposit required to secure your order</li>
                    <li className="mb-2">📍 Local delivery available (fees may apply)</li>
                    <li className="mb-2">🎨 Consultations are complimentary</li>
                    <li className="mb-2">🌾 Dietary accommodations available</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 text-center" style={{
                backgroundColor: 'white',
                borderRadius: '10px'
              }}>
                <h5 className="mb-3" style={{color: '#6d8454'}}>Special Occasion Packages Available!</h5>
                <p className="mb-3">
                  Planning a wedding, corporate event, or large celebration? 
                  We offer special package pricing for bulk orders and events.
                </p>
                <p className="mb-0">
                  <strong>Contact us for a personalized quote!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <div className="p-5" style={{
            backgroundColor: '#6d8454',
            borderRadius: '15px',
            color: 'white'
          }}>
            <h3 className="mb-3">Ready to Place Your Order?</h3>
            <p className="mb-4" style={{fontSize: '1.1rem'}}>
              Let's discuss your vision and create something delicious!
            </p>
            <a href="/contact" className="btn btn-light btn-lg" style={{
              fontWeight: 'bold',
              padding: '12px 40px'
            }}>
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;