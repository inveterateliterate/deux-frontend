import React from 'react'
import { Link } from 'react-router'
import { WEEKS_ROUTE } from 'config'
import * as Types from 'types'

const propTypes = {
  week: Types.week.isRequired,
}

const defaultProps = {}

function WeekCard ({
  week: { id, num },
}) {
  return (
    <div className="box week-block">
      <Link to={ `${WEEKS_ROUTE}/${id}` } className="has-text-centered">
        Week { num }
      </Link>
    </div>
  )
}

WeekCard.propTypes = propTypes
WeekCard.defaultProps = defaultProps

export default WeekCard
