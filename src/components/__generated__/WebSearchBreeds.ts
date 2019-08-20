/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WebSearchBreeds
// ====================================================

export interface WebSearchBreeds_searchBreeds_images {
  __typename: 'Image';
  id: string;
  url: string;
}

export interface WebSearchBreeds_searchBreeds {
  __typename: 'Breed';
  id: string;
  name: string;
  images: WebSearchBreeds_searchBreeds_images[];
}

export interface WebSearchBreeds {
  searchBreeds: WebSearchBreeds_searchBreeds[];
}

export interface WebSearchBreedsVariables {
  query: string;
}
