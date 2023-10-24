'use client';

import { graphql } from '@/app/@generated/gql';
import { useQuery } from '@urql/next';
import { useEffect, useState } from 'react';
import ItemCreator from '../components/ItemCreator';
import ItemEditor from "@/app/components/ItemEditor";
import { useRouter } from 'next/navigation';

const ITEM_LIST_QUERY = graphql(/* GraphQL */`
  query ItemList {
    items(orderBy: {id: ASC}) {
      id
      title
      description
    }
  }
`);

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

const ItemSearchList = ({title, description, pause}: {title: string, description: string, pause: boolean}) => {
  const router = useRouter();
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
            <li key={item.id} onClick={()=>router.push(`csr/${item.id}`)}>id: {item.id}, title: {item.item?.title}, description: {item.item?.description}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default function Page() {
  const [{data}, reexecute] = useQuery({query: ITEM_LIST_QUERY});
  const [id, setId] = useState('1');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submit, setSubmit] = useState(false);
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
  };

  useEffect(()=> reexecute({requestPolicy: 'cache-and-network'}),[reexecute]);
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mt-4">
        <h2>Search items</h2>
        <ItemSearchList title={title} description={description} pause={!((title == '' && description == '') || submit)} />

        <form onSubmit={handleSubmit}>
          <div className="grid">
            <input className="text-black" type="text" placeholder="title" value={title} onChange={(e) => {setTitle(e.target.value); setSubmit(false);}} />
            <input className="text-black" type="text" placeholder='description' value={description} onChange={(e) => {setDescription(e.target.value);setSubmit(false);}} />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="mt-4">
        <h2>Item List</h2>

        <div className="mt-2">
          <ul>
            {data && data.items.map(item => (
              <li key={item.id}>id: {item.id}, title: {item.title}, description: {item.description}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h2>Item Create</h2>

        <div className="mt-2">
          <ItemCreator />
        </div>
      </div>

      <div className="mt-4">
        <h2>Item Edit</h2>

        <div className="mt-2">
          <div>
            <label>id</label>
            <input className="text-black" type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
          </div>
          <ItemEditor id={id} isPage={false} />
        </div>
      </div>
    </main>
  );
};
