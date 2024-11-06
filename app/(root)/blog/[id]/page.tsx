import { client } from '@/sanity/lib/client';
import { BLOG_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

// export const experimental_ppr = true;

const page = async({params}:{params: Promise<{id:string}>}) => {
    const id = (await params).id;
    
    const post = await client.fetch(BLOG_BY_ID_QUERY,{id});

    if(!post) return notFound();
  return (
    <>
      <h1>Blog number {id}</h1>
      <h3>Blog Title : {post.title}</h3>
    </>
  )
}

export default page
