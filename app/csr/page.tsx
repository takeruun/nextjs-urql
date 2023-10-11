'use client';

import { graphql } from '@/app/@generated/gql';
import { useQuery } from '@urql/next';
import { useState } from 'react';

const searchItemsQuery = graphql(/* GraphQL */`
  query SearchItems($where: ItemWhere!) {
    searchItems(where: $where) {
      id
      item {
        title
        description
      }
    }
  }`);

const ItemList = ({title, description, pause}: {title: string, description: string, pause: boolean}) => {
  const [result] = useQuery({
    query: searchItemsQuery,
    pause,
    variables: {
      where: {
        title,
        description,
      }
    }
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...(csr)</p>;
  if (error) return <p>Oh no... {error.message}</p>;


  return (
    <>
    {data && (
        <ul>
          {data.searchItems.map(item => (
            <li key={item.id}>title: {item.item?.title}, description: {item.item?.description}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default function Page() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submit, setSubmit] = useState(false);
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <input className="text-black" type="text" placeholder="title" value={title} onChange={(e) => {setTitle(e.target.value); setSubmit(false);}} />
          <input className="text-black" type="text" placeholder='description' value={description} onChange={(e) => {setDescription(e.target.value);setSubmit(false);}} />
        </div>
        <button type="submit">Search</button>

        <ItemList title={title} description={description} pause={!((title == '' && description == '') || submit)} />
      </form>
    </main>
  );
};
