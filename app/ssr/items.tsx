import { graphql } from '@/app/@generated/gql';
import { getClient } from '../urql-client';

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

const ItemList = async ({title, description, pause}: {title: string, description: string, pause: boolean}) => {
  const result = await getClient().query(searchItemsQuery, {where: {title, description}});

  const { data, error } = result;

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

export default ItemList;