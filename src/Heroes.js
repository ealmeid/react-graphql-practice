import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Heroes = () => (
    <Query
     query={gql`
     {
         allHeroes {
             name
             quirk
             height
             age
             className
         }
        }
    `}
>
{({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.allHeroes.map(({ name, quirk, height, age, className }) => (
      <div key={id}>
        <p>{`${name} Quirk: ${quirk}`}</p>
      </div>
    ));
  }}
</Query>
);

export default Heroes;