import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Map from './Map';

const FlagSingle = ({ Loader }) => {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    let location = useLocation();

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const result = await axios(
                `https://restcountries.eu/rest/v2/name${location.pathname}`
            );
            setCountry(result.data);
            setLoading(false);
        };
        fetchItems();
    }, [location.pathname]);
    //console.log(country[0]);

    return (
        <>
            {loading ? (
                <div className='loading'>
                    <img src={Loader} alt='Loader' />
                </div>
            ) : (
                country.map((item) => (
                    <div className='flag-single' key={item.name}>
                        <NavLink to={'/'} className='retour'>
                            <ArrowBackIcon />
                            <span>Retour</span>
                        </NavLink>
                        <div className='content'>
                            <div className='flag'>
                                <img src={item.flag} alt='Drapeau' />
                            </div>
                            <div className='description'>
                                <h1>{item.translations.fr}</h1>
                                <div className='details'>
                                    <div className='detail'>
                                        <span className='name'>
                                            Capitale :{' '}
                                        </span>
                                        <span className='desc'>
                                            {item.capital}
                                        </span>
                                    </div>
                                    <div className='detail'>
                                        <span className='name'>
                                            Population :{' '}
                                        </span>
                                        <span className='desc'>
                                            {item.population} habitants
                                        </span>
                                    </div>
                                    <div className='detail monnaies'>
                                        <span className='name'>Monnaie : </span>
                                        <span className='desc'>
                                            {item.currencies.map((monnaie) => (
                                                <div key={monnaie}>
                                                    <span>{monnaie.name} </span>
                                                    {monnaie.symbol && (
                                                        <span>
                                                            ({monnaie.symbol})
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </span>
                                    </div>
                                    <div className='detail langage'>
                                        <span className='name'>Langage : </span>
                                        <ul className='desc'>
                                            {item.languages.map(
                                                (langage, index) => (
                                                    <li key={index}>
                                                        <span>
                                                            {langage.name}{' '}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Map lat={item.latlng[0]} long={item.latlng[1]} />
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default FlagSingle;
