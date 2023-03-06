import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import ProductBlock from './components/ProductBlock';

import products from '../src/assets/products.json'



console.log(products)

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все товары</h2>
          <div className="content__items">
            {
            products.map(obj => <ProductBlock title={obj.title} price={obj.price} image={obj.imageSrc} /> )
            }
            {/* <ProductBlock title='птиц' price='500' source={bird} />
            <ProductBlock title='дог' price='300' source={dogs}/>
            <ProductBlock title='сергульки' price='300' source={earrings}/>
            <ProductBlock title='котяч' price='300' source={cats}/>
             */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
