import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import ProductBlock from './components/ProductBlock';

import bird from '../src/assets/img/bird1.jpg'
import dogs from '../src/assets/img/dogs.jpg'
import earrings from '../src/assets/img/earrings.jpg'
import cats from '../src/assets/img/cats.jpg'

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
            <ProductBlock title='птиц' price='500' source={bird} />
            <ProductBlock title='дог' price='300' source={dogs}/>
            <ProductBlock title='сергульки' price='300' source={earrings}/>
            <ProductBlock title='котяч' price='300' source={cats}/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
