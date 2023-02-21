import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";

const FinalNarrative = ({ paragraphs }) => {
  const [highlightedSuggestions, setHighlightedSuggestions] = useState([]);
  const {data, selectedNarratives} = useSelector((state) => state);
  const selectedRows = data.filter((row) => selectedNarratives.includes(row.id));
  useEffect(() => {
    highlightSuggestions(paragraphs);
  },[data,selectedNarratives]);
  const highlightSuggestions = (paragraphs) => {
    const highlighted = selectedRows.map((paragraph) => {
      const { paraContent, error, suggestion } = paragraph;
      const errorPos = paraContent.indexOf(error);

      // If the error is not found in the paragraph, skip it
      if (errorPos === -1) {
        return paragraph;
      }

      // Split the paragraph into three parts: the text before the error, the error itself, and the text after the error
      const beforeError = paraContent.substring(0, errorPos);
      const afterError = paraContent.substring(errorPos + error.length);

      // Wrap the suggestion in a span element with a "highlight" class
      const suggestionSpan = `<span class="text-white bg-green-500 px-2 py-1">${suggestion.split("/")[0]}</span>`;

      // Concatenate all three parts to get the highlighted paragraph
      const highlightedParagraph = beforeError + suggestionSpan + afterError;

      // Return the highlighted paragraph with the original error replaced with the suggestion
      return { ...paragraph, paraContent: highlightedParagraph };
    });

    setHighlightedSuggestions(highlighted);
  };
  return (
    <div>
      {highlightedSuggestions.map((paragraph) => (
        <span key={paragraph.para} dangerouslySetInnerHTML={{ __html: paragraph.paraContent }} />
      ))}
    </div>
  );
};

export default FinalNarrative;
