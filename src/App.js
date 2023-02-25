import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import ProductBlock from './components/ProductBlock';
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
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <ProductBlock title='птиц' price='500' source='img/bird1.jpg' />
            <ProductBlock title='дог' price='300' source='img/dogs.jpg'/>
            <ProductBlock title='сергульки' price='300' source='img/earrings.jpg'/>
            <ProductBlock title='котяч' price='300' source='img/cats.jpg'/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
