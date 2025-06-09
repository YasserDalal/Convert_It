
import React from "react";

export default function boldInsideStrings(text) {
  const string = text.split(/(<b>.*?<\/b>)/g);
  return string.map((words, i) => {
    // check if there are bold tags *<br></br>* inside the string
    if (words.startsWith('<b>') && words.endsWith('</b>')) {
      return <b key={i}>{words.slice(3, -4)}</b>;
    }
    // otherwise, just return the text
    return <React.Fragment key={i}>{words}</React.Fragment>;
  });
}