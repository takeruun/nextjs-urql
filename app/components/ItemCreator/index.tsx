import { useForm } from "react-hook-form"
import { graphql } from '@/app/@generated/gql';
import { useMutation, useQuery } from '@urql/next';

const ITEM_LIST_QUERY = graphql(/* GraphQL */`
  query ItemList {
    items {
      id
      title
      description
    }
  }
`);

const ITEM_CREATE_MUTATION = graphql(/* GraphQL */`
  mutation CreateItem($title: String!, $description: String!) {
    createItem(title: $title, description: $description) {
      id
      title
      description
    }
  }`);

type FormValues = {
  title: string;
  description: string;
}

const ItemCreator = () => {

  const [{},refetch] = useQuery({query: ITEM_LIST_QUERY});
  const [{data}] = useQuery({query: ITEM_LIST_QUERY});

  const [result, createItem] = useMutation(ITEM_CREATE_MUTATION);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    await createItem(data);
    refetch({requestPolicy: 'network-only'});
  };

  return (
    <>
      <h1>Item List</h1>
      <ul>
        {data && data.items.map(item => (
          <li key={item.id}>title: {item.title}, description: {item.description}</li>
        ))}
      </ul>

      <div className="flex flex-col items-center justify-center w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-full">
          <input className="text-black" placeholder="title" {...register("title")} />
          <input className="text-black" placeholder="description" {...register("description")} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ItemCreator;