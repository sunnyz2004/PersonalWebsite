import React from 'react'


const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`${classNames}`}>
      <div className='app__flex'>
      </div>

        <Component />
      <div className="copyright">
        <p className="p-text"> </p>
      </div>

    </div>
  )
}

export default AppWrap;