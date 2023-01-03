import React, { useEffect, useState } from "react";

const ErrorsContent = ({ paragraphs }) => {
  const [highlightedErrors, setHighlightedErrors] = useState("");
  useEffect(() => {
    highlightErrors(paragraphs);
  });
  const highlightErrors = (paragraphs) => {
    let errors = "";
    paragraphs.forEach((paragraph) => {
      const { paraContent, error } = paragraph;
      const errorPos = paraContent.indexOf(error);
      if (errorPos === -1) {
        return;
      }
      const beforeError = paraContent.substring(0, errorPos);
      const afterError = paraContent.substring(errorPos + error.length);
      const errorSpan = `<span class="text-white bg-yellow-500 px-2 py-1">${error}</span>`;
      const highlightedParagraph = beforeError + errorSpan + afterError;
      errors += highlightedParagraph;
    });

    setHighlightedErrors(errors);
  };
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: highlightedErrors }} />
    </div>
  );
};

export default ErrorsContent;
