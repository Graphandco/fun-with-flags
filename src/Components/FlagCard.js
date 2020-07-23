import React from 'react';

const FlagCard = ({ flag }) => {
    let region;

    if (flag.region === 'Europe') {
        region = 'Europe';
    } else if (flag.region === 'Asia') {
        region = 'Asie';
    } else if (flag.region === 'Americas') {
        region = 'Amérique';
    } else if (flag.region === 'Oceania') {
        region = 'Océanie';
    } else if (flag.region === 'Polar') {
        region = 'Cercle Polaire';
    } else if (flag.region === 'Africa') {
        region = 'Afrique';
    }

    return (
        <>
            <img src={flag.flag} alt='Drapeau' />
            <div className='content'>
                <div className='pays'>{flag.translations.fr}</div>
                <div className='continent'>
                    <span>Continent</span> : {region}
                </div>
                {flag.capital ? (
                    <div className='capitale'>
                        <span>Capitale</span> : {flag.capital}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default FlagCard;
