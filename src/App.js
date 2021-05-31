import './App.css'

import Subnav from './Sidebar/Sidebar'

import { SidebarData } from './data'
import { useState } from 'react'

function App() {
  const [activeMenuLink, setActiveMenuLink] = useState(null)

  const menuLinkHandelr = (e) => {
    const { link } = e.target.dataset

    if (link === activeMenuLink) return setActiveMenuLink(null)

    setActiveMenuLink(link)
  }
  return (
    <div className='App'>
      <h1>ПАВЛУЧИО, ЛОВИ АККОРДИОН!</h1>

      <div className='sidebar'>
        {SidebarData.map(({ title, path, subNav }) => {
          const isOpenSubnav = activeMenuLink === path
          return (
            <>
              <h3
                to={path}
                className={`sidebar__title ${
                  isOpenSubnav ? 'sidebar__title--active' : ''
                }`}
                onClick={menuLinkHandelr}
                data-link={path}
              >
                {title}
              </h3>
              {Boolean(subNav.length) && (
                <Subnav
                  data={subNav}
                  isOpen={isOpenSubnav}
                  initActiveLink={activeMenuLink}
                />
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App
