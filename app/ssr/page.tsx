import ItemList from './items';

export default  function Page() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemList title={'title'} description={''} pause={false}  />
    </main>
  );
};
