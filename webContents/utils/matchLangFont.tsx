import React from "react";

export function wrapLangSpecificFont(text: string) {
  const jpRegex = /[\u3000-\u303F\u3040-\u30FF\u4E00-\u9FFF]/g; // 히라가나/카타카나/한자
  const parts = text.split(jpRegex);
  const matches = text.match(jpRegex);

  const elements: JSX.Element[] = [];
  let i = 0;
  for (const part of parts) {
    if (part) {
      elements.push(<span className="font-kukde" key={`en-${i}`}>{part}</span>);
    }
    if (matches && matches[i]) {
      elements.push(<span style={{ fontFamily: `"M PLUS Rounded 1c"` }} key={`jp-${i}`}>{matches[i]}</span>);
    }
    i++;
  }

  return elements;
}