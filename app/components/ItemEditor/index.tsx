import { useForm } from "react-hook-form"
import { graphql } from '@/app/@generated/gql';
import { useMutation } from "@urql/next";
import { useRouter } from 'next/navigation';

const ITEM_UPDATE_MUTATION = graphql(/* GraphQL */`
  mutation UpdateItem($id: ID!, $title: String!, $description: String!) {
    updateItem(id: $id, title: $title, description: $description) {
      item {
        id
        title
        description
      }
    }
  }
`);

type FormValues = {
  title: string;
  description: string;
}

type Props = {
  id: string;
  isPage: boolean;
}

const ItemEditor: React.FC<Props> = (props) => {
  const {id, isPage} = props;
  const router = useRouter();
  const [result, updateItem] = useMutation(ITEM_UPDATE_MUTATION);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    await updateItem({id, ...data});
    reset();
    if (isPage) router.push('/csr');
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
  )
}

export default ItemEditor