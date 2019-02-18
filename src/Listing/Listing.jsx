import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import keycode from 'keycode'
import Uuid from 'init-uuid'
import Store from 'vanilla-store'

import easeInOutQuad from '../utils/easeInOutQuad'
import ListingBranch from './ListingBranch'

const getStringContent = (content) => {
  let matchContent = content

  if (content.constructor === Array) {
    matchContent = content.join(' ')
  } else if (typeof content === 'object') {
    matchContent = Object.values(content).join(' ')
  }

  return matchContent.toLowerCase()
}

const tryToMatch = (value, content) => {
  let initialContent = content

  if (!content) {
    return false
  }

  if (content.highlight) {
    initialContent = content.value
  }

  const contentToSearch = getStringContent(initialContent)

  if (contentToSearch.indexOf(value) > -1) {
    return true
  }

  return false
}

const getSearchableHeaders = headers => headers
  .filter(header => header.isSearchable)
  .map(header => header.id)


const filterElement = (element, value, searchables) => {
  const searchValue = value.toLowerCase()
  let newElement

  Object.keys(element).forEach((key) => {
    if (searchables.indexOf(key) > -1) {
      const matched = tryToMatch(searchValue, element[key])

      if (matched) {
        newElement = element
      }
    }
  })

  if (newElement) {
    Object.keys(newElement).forEach((key) => {
      if (newElement[key]) {
        newElement[key] = {
          highlight: searchValue,
          value: newElement[key].highlight ? newElement[key].value : newElement[key],
        }
      }
    })
  }

  return newElement
}
const withListing = Component => class Listing extends React.Component {
  static propTypes = {
    orderBy: PropTypes.string.isRequired,
    order: PropTypes.oneOf([
      'asc',
      'desc',
    ]),
    hasLoader: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    toolbarContent: PropTypes.node,
    onUpdateSelection: PropTypes.func,
    id: PropTypes.string,
  }

  static defaultProps = {
    id: new Uuid().get(),
    order: 'asc',
    hasLoader: false,
    toolbarContent: (<Fragment />),
    onUpdateSelection: () => { },
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      order: 'asc',
      orderBy: 'id',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 10,
      searchable: [],
      origData: null,
      id: null,
    }

    this.node = React.createRef()

    this.handleRequestSort = this.handleRequestSort.bind(this)
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleCheckClick = this.handleCheckClick.bind(this)
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
    this.isSelected = this.isSelected.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  componentWillMount() {
    const {
      id,
      data,
      headers,
      order,
      orderBy,
    } = this.props

    const storedData = Store.get('Listing', id)
    const newState = {
      data: this.sortData(data, orderBy, order),
      searchable: getSearchableHeaders(headers),
    }

    if (storedData) {
      if (storedData.page) {
        newState.page = storedData.page
      }

      if (storedData.rowsPerPage) {
        newState.rowsPerPage = storedData.rowsPerPage
      }
    }

    this.setState({
      ...newState,
      order,
      orderBy,
    })
  }

  componentWillReceiveProps({
    data,
    headers,
    orderBy,
    order,
  }) {
    this.setState({
      data: this.sortData(data, orderBy, order),
      orderBy,
      order,
      searchable: getSearchableHeaders(headers),
    })
  }

  sortData(data, orderBy, order) {
    const { headers } = this.props
    const orderByHeader = headers.filter(header => header.id === orderBy)[0]
    let { transformData } = orderByHeader

    if (!data) {
      return data
    }

    if (typeof transformData !== 'function') {
      transformData = values => values
    }

    const transformedData = data.map((element) => {
      const newElement = element
      newElement[orderBy] = transformData(element[orderBy])

      return newElement
    })
    const sortedData = transformedData.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1))

    if (order === 'asc') {
      return sortedData
    }

    return sortedData.reverse()
  }

  handleRequestSort(event, property) {
    const {
      orderBy: orderByState,
      order: orderState,
      data: dataState,
    } = this.state
    const orderBy = property
    let order = 'desc'

    if (orderByState === property && orderState === 'desc') {
      order = 'asc'
    }

    let data

    if (order === 'desc') {
      data = dataState.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
    } else {
      data = dataState.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1))
    }

    this.setState({
      data,
      order,
      orderBy,
    })
  }

  handleSelectAllClick(event, checked) {
    const { data } = this.state

    if (checked) {
      this.setState({
        selected: data.map(n => n.id),
      })

      return
    }

    this.setState({
      selected: [],
    })
  }

  handleKeyDown(event, id) {
    if (keycode(event) === 'space') {
      this.handleCheckClick(event, id)
    }
  }

  handleCheckClick(id) {
    const { onUpdateSelection } = this.props
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    onUpdateSelection(newSelected)

    this.setState({
      selected: newSelected,
    })
  }

  scrollToElement() {
    if (!this.node.current) {
      return
    }

    const { offsetTop } = this.node.current
    const start = window.scrollY
    const change = offsetTop - start
    const increment = 20
    const duration = 250
    let currentTime = 0

    const animateScroll = () => {
      currentTime += increment
      const val = easeInOutQuad(currentTime, start, change, duration)
      window.scrollTo(0, val)

      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }

    animateScroll()
  }

  handleChangePage(event, page) {
    const { id } = this.props
    const { rowsPerPage } = this.state

    Store.create('Listing', {
      id,
      rowsPerPage,
      page,
    })

    this.scrollToElement()

    this.setState({
      page,
    })
  }

  handleChangeRowsPerPage(event) {
    const rowsPerPage = event.target.value
    const { id, page } = this.state

    Store.create('Listing', {
      id,
      page,
      rowsPerPage,
    })

    this.setState({
      rowsPerPage,
    })
  }

  handleFilter(value) {
    const { searchable, origData, data } = this.state
    let searchableData

    if (origData && origData.constructor === Array) {
      searchableData = [...origData]
    } else {
      searchableData = [...data]
    }

    if (!value) {
      searchableData = searchableData.map((item) => {
        const newItem = item

        Object.keys(item).forEach((key) => {
          if (item[key]) {
            if (item[key].value) {
              newItem[key] = item[key].value
            } else {
              newItem[key] = item[key]
            }
          }
        })

        return newItem
      })

      this.setState({
        data: searchableData,
      })

      return
    }

    const newData = searchableData
      .map(element => filterElement(element, value, searchable))
      .filter(item => item !== undefined)

    this.setState({
      data: newData,
      origData: searchableData,
    })
  }

  isSelected(id) {
    const { selected } = this.state

    return selected.indexOf(id) !== -1
  }

  render() {
    return (
      <div ref={this.node}>
        <Component
          {...this.props}
          {...this.state}
          handleRequestSort={this.handleRequestSort}
          handleSelectAllClick={this.handleSelectAllClick}
          handleKeyDown={this.handleKeyDown}
          handleCheckClick={this.handleCheckClick}
          handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          handleChangePage={this.handleChangePage}
          onFilter={this.handleFilter}
          isSelected={this.isSelected}
        />
      </div>
    )
  }
}

export default withListing(ListingBranch)
