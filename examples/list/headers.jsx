import React from 'react'

export default [{
  id: 'name',
  isPaddingDisabled: true,
  label: 'Name',
  isSearchable: true,
}, {
  id: 'username',
  isPaddingDisabled: true,
  label: 'Username',
  isSearchable: true,
}, {
  id: 'website',
  isPaddingDisabled: true,
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
  isPaddingDisabled: true,
  label: 'Company',
  transformContent: (id, company) => {
    if (company.name) {
      return company.name
    }

    return ''
  },
  isSearchable: true,
}]
