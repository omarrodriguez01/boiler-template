import { json } from "@remix-run/node";
import { V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { ForumList } from "~/components/ForumList";
import { getForums } from "~/utils/forum.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Main page" }];
};

export const loader = async () => {
  const forums = await getForums()
  return json({forums});
};

export default function Index() {
  const { forums } = useLoaderData()
  console.log("index forums: " + forums)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ForumList forums={ forums } />
    </div>
  );
}
