import React, { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton';
import classes from './Headers.module.css'

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onCartBtnClick} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} />
            </div>
        </Fragment>
    )
}

export default Header;