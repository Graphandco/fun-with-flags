import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import FlagItem from './FlagCard';
import Search from './Search';
import Loader from '../spinner.gif';

const FlagsList = () => {
    const [flags, setFlags] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    flags.sort(function compare(a, b) {
        if (a.translations.fr < b.translations.fr) return -1;
        if (a.translations.fr > b.translations.fr) return 1;
        return 0;
    });

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const result = await axios(
                `https://restcountries.eu/rest/v2/${query}`
            );
            //console.log(result.data);
            setFlags(result.data);
            setLoading(false);
        };
        fetchItems();
    }, [query]);

    return (
        <>
            <Search getQuery={(q) => setQuery(q)} />
            {loading ? (
                <div className='loading'>
                    <img src={Loader} alt='Loader' />
                </div>
            ) : (
                <div className='flags-list'>
                    {flags.map((flag, index) => (
                        <NavLink
                            key={index}
                            to={`/${flag.name}`}
                            className='flag-item'
                        >
                            <FlagItem flag={flag} />
                        </NavLink>
                    ))}
                </div>
            )}
        </>
    );
};

export default FlagsList;
