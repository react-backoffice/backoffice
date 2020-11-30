const getStringContent = (content: any) => {
  let matchContent = content;
  if (content.constructor === Array) {
    matchContent = content.join(" ");
  } else if (typeof content === "object") {
    matchContent = Object.values(content).join(" ");
  }
  return matchContent.toLowerCase();
};

const tryToMatch = (value: any, content: any) => {
  const initialContent = content;

  if (!content) {
    return false;
  }

  const contentToSearch = getStringContent(initialContent);
  if (contentToSearch.indexOf(value) > -1) {
    return true;
  }
  return false;
};

const filterElement = (
  element: Record<string, any>,
  value: any,
  searchables: any,
) => {
  const searchValue = value.toLowerCase();
  let newElement: Record<string, any> | undefined = undefined;

  Object.keys(element).forEach((key) => {
    if (searchables.indexOf(key) > -1) {
      const matched = tryToMatch(searchValue, element[key]);

      if (matched) {
        newElement = {
          ...element,
        };
      }
    }
  });

  return newElement;
};

export default filterElement;
