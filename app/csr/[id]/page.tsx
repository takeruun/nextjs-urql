'use client';

import ItemEditor from "@/app/components/ItemEditor";

export default function Page({params}: {params: {id: string}}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <ItemEditor id={params.id} isPage={true} />
      </div>
    </main>
  )
}