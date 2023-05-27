import { ActionFunction, LoaderArgs, json } from "@remix-run/node";
import { Link, V2_MetaFunction, useLoaderData, useParams } from "@remix-run/react";
import { deletePost, getPosts } from "~/utils/posts.server";
import { CommentList } from "../components/CommentList"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Forum" }];
};

export async function loader({ params }: LoaderArgs) {
    const forumId:number = Number(params.id)
    const posts = await getPosts(forumId)
    return {
      posts,
      forumId
    }
  }

  export const action:ActionFunction = async ({ request }:any) => {
    const form = await request.formData();
    const id = form.get("idDelete")
    const response = await deletePost(Number(id))
    return null
}

export default function Forum() {
  //const { posts } = useLoaderData()
  const {posts, forumId} = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <CommentList reviews={posts}></CommentList>
      <br></br>
      {(posts == undefined || posts === null) ? 
      null 
      :
      <Link to={`/review/create/${forumId}`} className="bg-indigo-800 px-4 py-2 rounded-xl text-gray-50">Nueva reseña</Link>  
      }
    </div>
  );
}


