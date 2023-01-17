import { useEffect, useState, useCallback } from "react";
import {
  Card,
  Tabs,
  Heading,
  TextContainer,
  DisplayText,
  TextStyle,
  Button,
  MediaCard,
  VideoThumbnail
} from "@shopify/polaris";


export function VideoCard(props) {

  console.log("print reel url");
  const x = props.reelData;
  const y = props.no;
  console.log(y);

  return (
    <>
      <MediaCard
        size="small"
        portrait
        title={"Reel " + y}
        description="Leaf Boom Reel"
        popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
      >
        <video width="100%" height="300px" src={x} controls></video>
      </MediaCard>
      {/* https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/324702097_707523837430069_836027771336387261_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=HPqhTBdPaY8AX8dMrQT&tn=jsoUqYp_RDKEVic6&edm=ACHbZRIBAAAA&ccb=7-5&ig_cache_key=MzAxNDEwNzYxNzU2OTQwNzIzOTE1MDY5MzA5NDQzODIzMA%3D%3D.2-ccb7-5&oh=00_AfBdWjzrDY2Zk8uNHjJSe3pG-ukd087oJCA6qe0nACWCPw&oe=63C3D8EA&_nc_sid=4a9e64 */}
    </>
  );
}
