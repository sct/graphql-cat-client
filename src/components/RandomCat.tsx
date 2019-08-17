import React from "react";
import { RouteComponentProps } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { getRandomImage } from "./__generated__/getRandomImage";

const GET_RANDOM_IMAGE = gql`
  query getRandomImage {
    images(limit: 1) {
      id
      url
    }
  }
`;

const RandomCat: React.FC<RouteComponentProps> = () => {
  const { data, loading, refetch } = useQuery<getRandomImage>(
    GET_RANDOM_IMAGE,
    { notifyOnNetworkStatusChange: true }
  );
  return (
    <div>
      <h1>Welcome to the CAT API</h1>
      <button onClick={() => refetch()} disabled={loading}>
        {loading ? "Getting cat..." : "Get new cat"}
      </button>
      <div>
        {loading && <div>Loading Image...</div>}
        {!loading &&
          data &&
          data.images &&
          data.images.map(i => <img src={i.url} />)}
      </div>
    </div>
  );
};

export default RandomCat;
