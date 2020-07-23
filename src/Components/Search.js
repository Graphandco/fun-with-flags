import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');
    const [selectValue, setSelectValue] = useState('');

    const onChange = (q) => {
        setText(q);
        q && getQuery(`name/${q}`);
    };

    const onSelect = (q) => {
        console.log(q);
        setSelectValue(q);
        setText('');
        q ? getQuery(`region/${q}`) : getQuery('');
    };

    return (
        <div className='search'>
            <input
                type='text'
                placeholder='Chercher un pays'
                onChange={(e) => onChange(e.target.value)}
                value={text}
            />

            <FormControl className='form'>
                <InputLabel htmlFor='continent'>Continent</InputLabel>
                <Select
                    value={selectValue}
                    onChange={(e) => onSelect(e.target.value)}
                >
                    <MenuItem value={''}>Tous</MenuItem>
                    <MenuItem value={'Europe'}>Europe</MenuItem>
                    <MenuItem value={'Americas'}>Amérique</MenuItem>
                    <MenuItem value={'Asia'}>Asie</MenuItem>
                    <MenuItem value={'Africa'}>Afrique</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Search;
