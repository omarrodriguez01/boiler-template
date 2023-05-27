import type { V2_MetaFunction } from "@remix-run/react";
import CreateBook from "./createBook";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
     
        
        <CreateBook></CreateBook>
    </div>
  );
}
