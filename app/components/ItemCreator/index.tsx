import { useForm } from "react-hook-form"
import { graphql } from '@/app/@generated/gql';
import { useMutation } from '@urql/next';


const ITEM_CREATE_MUTATION = graphql(/* GraphQL */`
  mutation CreateItem($title: String!, $description: String!) {
    createItem(title: $title, description: $description) {
      item {
        id
        title
        description
      }
    }
  }`);

type FormValues = {
  title: string;
  description: string;
}

const ItemCreator = () => {
  const [_, createItem] = useMutation(ITEM_CREATE_MUTATION);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    await createItem(data);
  };

  return (
    <>
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