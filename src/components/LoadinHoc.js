import React from 'react'

 const LoadinHoc = (Comp) => {
    return function loadi({load,...p}){
      return    (load) ? <div className="loader"></div> :  <Comp {...p} />
    }
}
export default LoadinHoc
