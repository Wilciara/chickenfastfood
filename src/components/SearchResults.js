import React from 'react';


const SearchResults = ({data}) => {

if(!data || !data.length) return null;

const resultList = data.map(({name, desc }) =>{

    return (
        <li Key={name}>
            <span>{desc}</span>
        </li>
    );
});

  return (
    <div className='search-results'>
        <ul>{resultList}</ul>

    </div>
  )
}

export default SearchResults