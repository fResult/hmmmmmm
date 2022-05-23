import React from 'react'

/**
 * @param { { id: string, className: string, service: { id: string, btu: string, categoryName: string, price: number } } } props
 */
const ServiceItem = (props) => {
  const { className, service } = props

  return (
    <li
      key={service.id}
      className={`service-item ${className} flex justify-between w-[600px] p-4`}
    >
      <div class="flex flex-col gap-2">
        <p className="text-xl font-semibold">
          {[`${service.btu} BTU`, `แบบ${service.categoryName}`].join(', ')}
        </p>
        <div className="flex gap-4 items-center">
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/216653/tag.svg"
            alt="tag"
          />
          <p className="text-gray-500">{`${service.price} ฿ / เครื่อง`}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center text-3xl">
        <button className="rounded-lg py-2 px-4 border-blue-500 border-solid border text-blue-500 leading-none">
          -
        </button>
        <span className="text-base font-bold">0</span>
        <button className="rounded-lg py-2 px-4 border-blue-500 border-solid border text-blue-500 leading-none">
          +
        </button>
      </div>
    </li>
  )
}

export default ServiceItem
