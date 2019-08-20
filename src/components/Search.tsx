import React, { useState, ChangeEvent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { debounce } from 'lodash';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  WebSearchBreeds,
  WebSearchBreedsVariables,
} from './__generated__/WebSearchBreeds';
import './Search.css';

const SEARCH_BREEDS = gql`
  query WebSearchBreeds($query: String!) {
    searchBreeds(query: $query) {
      id
      name
      images(limit: 3) {
        id
        url
      }
    }
  }
`;

const Search: React.FC<RouteComponentProps> = () => {
  const [searchInput, setSearchInput] = useState('');
  const [executeSearch, { data, loading }] = useLazyQuery<
    WebSearchBreeds,
    WebSearchBreedsVariables
  >(SEARCH_BREEDS, {
    variables: {
      query: searchInput,
    },
  });

  const debouncedSearch = debounce(() => executeSearch(), 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);

    debouncedSearch();
  };

  return (
    <div>
      <div className="search">
        <label htmlFor="search">Search: </label>
        <input name="search" id="search" onChange={handleChange} />
      </div>
      {loading && <div className="loading">Loading!</div>}
      <div className="results">
        {data &&
          data.searchBreeds &&
          data.searchBreeds.map(breed => (
            <div className="breed" key={`breed-${breed.id}`}>
              <h2>{breed.name}</h2>
              {breed.images.map(image => (
                <div className="cat-image" key={`cat-image-${image.id}`}>
                  <img src={image.url} alt="Cute cat" />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
