import React from 'react'

export default [{
  id: 'name',
  disablePadding: true,
  label: 'Name',
  searchable: true,
}, {
  id: 'username',
  disablePadding: true,
  label: 'Username',
  searchable: true,
}, {
  id: 'phone',
  disablePadding: false,
  label: 'Phone',
  searchable: true,
}, {
  id: 'website',
  disablePadding: true,
  label: 'Website',
  transformContent: (website) => {
    if (website) {
      return (
        <a href={`http://${website}`}>{website}</a>
      )
    }

    return website
  },
}, {
  id: 'company',
  disablePadding: true,
  label: 'Company',
  transformContent: (company) => {
    if (company.name) {
      return company.name
    }

    return ''
  },
  searchable: true,
}]
