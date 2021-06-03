import React, { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton';
import classes from './Headers.module.css'

const Header = () => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} />
            </div>
        </Fragment>
    )
}

export default Header;