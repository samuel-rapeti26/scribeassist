import React, { useEffect, useState } from "react";

const FinalNarrative = ({ paragraphs }) => {
  const [highlightedSuggestions, setHighlightedSuggestions] = useState([]);
  useEffect(() => {
    highlightSuggestions(paragraphs);
  });
  const highlightSuggestions = (paragraphs) => {
    const highlighted = paragraphs.map((paragraph) => {
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
      const suggestionSpan = suggestion;

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
        <div dangerouslySetInnerHTML={{ __html: paragraph.paraContent }} />
      ))}
    </div>
  );
};

export default FinalNarrative;
