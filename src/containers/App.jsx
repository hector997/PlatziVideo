import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItems from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';


const App = () => (
    <div className="App">
        <Header />
        <Search />
        <Categories>
            <Carousel>
                <CarouselItems />
                <CarouselItems />
                <CarouselItems />
                <CarouselItems />
                <CarouselItems />
            </Carousel>
        </Categories>
        <Footer />
    
    </div>
);
export default App