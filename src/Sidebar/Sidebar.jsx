import { useEffect, useState } from 'react'
import './Sidebar.css'

const LINK_HEIGHT = 20

export default function Subnav({ data, isOpen, initActiveLink }) {
  const [activeLink, setActiveLink] = useState(initActiveLink)

  const linkHandelr = (e) => {
    const { link } = e.target.dataset
    setActiveLink(link)
  }

  useEffect(() => {
    setActiveLink(initActiveLink)
  }, [initActiveLink])
  return (
    <div
      className={`subnav ${isOpen ? 'subnav--show' : ''}`}
      style={{ height: `${isOpen ? data.length * LINK_HEIGHT : 0}px` }}
    >
      {data.map(({ title, path }) => {
        return (
          <div
            className={`subnav-link ${
              activeLink === path ? 'subnav-link--active' : ''
            }`}
            key={path}
            onClick={linkHandelr}
            data-link={path}
            style={{ height: `${LINK_HEIGHT}px` }}
          >
            {title}
          </div>
        )
      })}
    </div>
  )
}
