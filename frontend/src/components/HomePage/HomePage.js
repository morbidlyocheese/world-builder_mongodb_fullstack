import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';

import * as charActions from '../../store/char';

import './HomePage.css';

function HomePage({ data }) {
    const dispatch = useDispatch();
    // const { charId } = useParams();

    // const sessionUser = useSelector((state) => state.session.user);
    // const userId = useSelector((state) => state.session.user);
    useEffect(() => {
        dispatch(charActions.fetchCharacters())
    }, [dispatch]);

    const chars = useSelector((state) => state.characters.characters);

    console.log('chars -->', chars)


    return (
        <div className='home-page-container'>
            <div className='char-section_container'>
                <div className='char-section'>
                    {<ul>
                        {/* {chars && chars.map((char) => 
                            <a href={`/characters/${char.id}`}>
                                {char.name}
                            </a>
                        )} */}
                    </ul>}
                </div>
            </div>
        </div>
    )
}

export default HomePage;