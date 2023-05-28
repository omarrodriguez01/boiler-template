import { Link } from "@remix-run/react";
import Icon from "./Icon";

function ForumListItem(props:any) {
  const forumLink = "/forum/" + props.forumid
  return (
      <>
        <div className="max-w-lg px-12 py-8 border-2 border-stone-300 rounded-2xl shadow-md">
          <span className="text-md font-bold mr-64">
            {props.title}
          </span>
          <Link to={forumLink} className="bg-indigo-800 px-4 py-2 rounded-xl text-gray-50">Visitar</Link>
        </div>
      </>
    );
  }
  
  export default ForumListItem;
  