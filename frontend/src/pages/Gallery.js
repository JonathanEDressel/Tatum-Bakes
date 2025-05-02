import React from "react";
import cupcake from "../assets/images/cupcake.jpg";

const Gallery = () => {
  var cardList = [];
  cardList.push({ image: cupcake, title: 'Chocolate Cupcake', desc: 'my desc'});
  cardList.push({ image: cupcake, title: 'Chocolate Cupcake', desc: 'my desc'});
  cardList.push({ image: cupcake, title: 'Chocolate Cupcake', desc: 'my desc'});
  cardList.push({ image: cupcake, title: 'Chocolate Cupcake', desc: 'my desc'});
  cardList.push({ image: cupcake, title: 'Chocolate Cupcake', desc: 'my desc'});
  cardList.push({ image: cupcake, title: 'Chocolate Cupcake', desc: 'my desc'});
  cardList.push({ image: cupcake, title: 'Chocolate Cupcake', desc: 'my desc'});

  return (
    <div>
        <div>
          {cardList.map((item, idx) => (
            idx % 2 === 0 ?
            <div class="card mb-3" style={{maxWidth: "80%;"}}>
            <div class="row g-0">
              <div class="col-md-2" style={{marginLeft: "2%", marginTop: "1%", marginBottom: "1%"}}>
                <img src={item.image} class="img-fluid" alt="Chocolate Cupcake"></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
            </div>
            : 
            <div class="card mb-3" style={{maxWidth: "80%;"}}>
            <div class="row g-0">
              <div class="col-md-9">
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div class="col-md-2" style={{marginLeft: "2%", marginTop: "1%", marginBottom: "1%"}}>
                <img src={item.image} class="img-fluid" alt="Chocolate Cupcake"></img>
              </div>
            </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;