'use strict'

const React = require('react')
const Radium = require('radium')
const {Style} = Radium
const PropTypes = require('prop-types')

const Utils = require('../../utils')
const {contentStyles} = require('../styles')

const Section = require('./section')

const Content = ({utils, docs}) => {
  return (
    <div className='content'>
      <Style rules={contentStyles} />
      {docs.map((section, i) => (
        <Section
          key={i}
          name={section.name}
          namespace={section.namespace}
          section={section}
          description={section.description}
          utils={utils} />
      ))}
    </div>
  )
}

Content.propTypes = {
  utils: PropTypes.instanceOf(Utils).isRequired,
  docs: PropTypes.array.isRequired
}

module.exports = Radium(Content)
