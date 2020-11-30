const sortData = (headers: any, data: any, orderBy: any, order: any) => {
  const orderByHeader: any = headers.filter(
    (header: any) => header.id === orderBy,
  )[0];

  let { transformData } = orderByHeader;

  if (!data) {
    return data;
  }

  if (typeof transformData !== "function") {
    transformData = (values: any) => values;
  }

  const transformedData = data.map((element: any) => ({
    ...element,
    [orderBy]: transformData(element[orderBy]),
  }));

  const sortedData = transformedData.sort((a: any, b: any) =>
    a[orderBy] < b[orderBy] ? -1 : 1,
  );

  if (order === "asc") {
    return sortedData;
  }

  return sortedData.reverse();
};

export default sortData;
