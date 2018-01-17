export default [{
  id: 'date',
  disablePadding: false,
  label: 'Date',
  numeric: true,
  transformData: data => +new Date(data),
  transformContent: data => new Date(data).toString(),
}, {
  id: 'title',
  disablePadding: true,
  label: 'Title',
  searchable: true,
}, {
  id: 'topics',
  disablePadding: true,
  label: 'Topics',
  transformContent: data => data.join(', '),
  searchable: true,
}]
