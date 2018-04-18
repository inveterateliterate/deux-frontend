import React from 'react'
import { Link } from 'react-router'
import { DAYS_ROUTE } from 'config'
import * as Types from 'types'

const propTypes = {
  day: Types.day.isRequired,
}

const defaultProps = {}

function DayCard ({
  day: { id, weekday },
}) {
  return (
    <div className="box day-block">
      <Link to={ `${DAYS_ROUTE}/${id}` } className="has-text-centered">
        { weekday }
      </Link>
    </div>
  )
}

DayCard.propTypes = propTypes
DayCard.defaultProps = defaultProps

export default DayCard
