import React from 'react'
import ServiceItem from './ServiceItem'

/**
 * @param { { className: string, services: Array<{ id: string, btu: string, categoryName: string, price: number }> } } props
 */
const ServiceList = (props) => {
  const { services, className = '' } = props

  return (
    <ul className={`service-list ${className} grid`}>
      {services.map((service) => {
        return (
          <ServiceItem
            {...{
              className:
                'border-b last:border-b-0 border-solid border-gray-400',
              // service: service <== same meaning
              service
            }}
          />
        )
      })}
    </ul>
  )
}

export default ServiceList
