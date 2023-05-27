import { ActionArgs, ActionFunction, LoaderArgs, json, redirect } from "@remix-run/node";
import { Form, Link, V2_MetaFunction, useActionData, useLoaderData } from "@remix-run/react";
import { createPost } from "~/utils/posts.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Review" }];
};

export async function loader({ params }: LoaderArgs) {
  const forumId:number = Number(params.forumid)
  return {
    forumId
  }
}

export async function action({ request }: ActionArgs) {
    const form = await request.formData();
    const comment = form.get("comment")
    var stars = Number(form.get("stars")) || null
    const forumId = Number(form.get("forumId"))
    var errors = {}
    //data verification
    if(comment === undefined || comment?.length < 1) {
      errors.commentError = "Comment is missing"
    }
    if (typeof stars !== "number") {
      errors.starsError = "Stars must be a number";
    }
  
    // return data if we have errors
    if (Object.keys(errors).length) {
      return json(errors, { status: 422 });
    }

    const response = await createPost(comment, forumId, stars)
    return redirect("/")
}

export default function ReviewEdit() {
  const {forumId} = useLoaderData()
  const errors = useActionData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Form method="post" className="mx-60" reloadDocument>
        <div>
            <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Comment  {errors?.commentError ? (
            <span className="text-red-500">{errors.commentError}</span>
          ) : null}
            </label>
            <input type="text" id="comment" name="comment" className="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
        </div>
        <div>
            <label htmlFor="stars" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Stars {errors?.starsError ? (
            <span className="text-red-500">{errors.starsError}</span>
          ) : null}
            </label>
            <input type="text" id="stars" name="stars" className="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
        </div>
        <button type="submit" name="forumId" value={forumId} className="bg-indigo-800 px-4 py-2 rounded-xl text-gray-50">Guardar</button>
        <Link to={"/"} className="bg-red-800 px-4 py-2 rounded-xl text-gray-50">Cancel</Link>      
      </Form>
    </div>
  );
}
