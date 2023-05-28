import { ActionFunction, LoaderArgs, json, redirect } from "@remix-run/node";
import { Form, Link, V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { getPost, updatePost } from "~/utils/posts.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Edit Review" }];
};

export async function loader({ params }: LoaderArgs) {
    const postId:number = Number(params.id)
    const post = await getPost(postId)
    return json({post})
}

export const action:ActionFunction = async ({ request }:any) => {
    const form = await request.formData();
    const newComment = form.get("comment")
    const id = form.get("idUpdate")
    const response = await updatePost(Number(id), newComment)
    return redirect("/")
}

export default function ReviewEdit() {
  const { post } = useLoaderData()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Form method="post">
        <input type="text" name="comment" defaultValue={post.comments} />
        <br></br>
        <button type="submit" name="idUpdate" value={post.id} className="bg-indigo-800 px-4 py-2 rounded-xl text-gray-50">Guardar</button>
        <br></br>
        <br></br>
        <Link to={"/"} className="bg-red-800 px-4 py-2 rounded-xl text-gray-50">Cancel</Link>      
      </Form>
    </div>
  );
}
