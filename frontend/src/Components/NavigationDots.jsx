import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
         {['Home','About','Work','Skills','Testmonials','Contact'].map((item,index)=>(
            <a
             href={`#${item}`}
             key={item + index}
             className="app__navigation__dots"
             style={active == item ? {backgroundColor: '#d70226'} :{ }}
            />
        ))}
    </div>
  )
}

export default NavigationDots