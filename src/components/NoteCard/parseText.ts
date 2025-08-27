const linkExpression = /(.*)(https?:\/\/\S+)(.*)/;

type TextItem = {
  type: "text" | "link";
  value: string;
};

export const parseText = (text: string): TextItem[] => {
  const matches = text.match(linkExpression);

  if (!matches) {
    return [
      {
        type: "text",
        value: text,
      },
    ];
  }

  const before = matches[1];
  const link = matches[2];
  const after = matches[3];

  return [
    {
      type: "text",
      value: before,
    },
    {
      type: "link",
      value: link,
    },
    {
      type: "text",
      value: after,
    },
  ];
};

export const parseLines = (text: string) => {
  return text.split("\n").map((text, index) => {
    return {
      index,
      text: parseText(text),
    };
  });
};
