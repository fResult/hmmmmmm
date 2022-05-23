import { useState } from 'react'
import './App.css'
import ServiceList from './components/ServiceList'

/**
 * @typedef Service
 * @type { object }
 * @property { string } id
 * @property { string } btu
 * @property { string } categoryName
 * @property { number } price
 */

/**
 * @type { Array<Service> }
 */
const SERVICES = [
  {
    id: 1,
    categoryName: 'แขวนใต้ฝ้า',
    btu: '9000-18000',
    price: 900
  },
  {
    id: 2,
    categoryName: 'ติดผนัง',
    btu: '28000-36000',
    price: 1400
  },
  {
    id: 3,
    categoryName: 'ตั้งพื้น',
    btu: '9000-18000',
    price: 600
  },
  {
    id: 4,
    categoryName: 'แขวนใต้ฝ้า',
    btu: '21000-26000',
    price: 1200
  }
]

function App() {
  const [services, setServices] = useState([...SERVICES])

  return (
    <div className="App">
      <header className="bg-slate-400 h-[90px]">HEADER</header>

      <main className="[min-height:calc(100vh-90px)] bg-slate-300 flex">
        <section className="bg-gray-100 rounded-md px-4 py-6 m-auto">
          <h2 className="text-gray-500">เลือกบริการล้างแอร์</h2>
          <ServiceList className="min-w-1/3" services={services} />
        </section>
      </main>
    </div>
  )
}

export default App
