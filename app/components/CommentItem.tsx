import { Form, Link } from "@remix-run/react";

function CommentItem(props:any) {
  const reviewLink = "/review/edit/" + props.id
  const actionLink = "/forum/" + props.forumid
  return (
      <>
        <div className="max-w-lg px-12 py-8 border-2 border-stone-300 rounded-2xl shadow-md">
          <p className="text-md mr-64">
            {props.comment}
          </p>
          <Form method="post" action={actionLink}>
            <button type="submit" name="idDelete" value={props.id} className="bg-red-800 px-4 py-2 rounded-xl text-gray-50">Borrar</button>
          </Form>
          <br></br>
          <Link to={reviewLink} className="bg-indigo-800 px-4 py-2 rounded-xl text-gray-50">Editar</Link>
        </div>
      </>
    );
  }
  
  export default CommentItem;
  