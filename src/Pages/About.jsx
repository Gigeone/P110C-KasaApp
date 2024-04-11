import React from 'react'
import Dropdown from '../Components/Dropdown'
import aboutList from '../Data/aboutList.json'
import Banner from '../Components/Banner';

const About = () => {

  return (


    <div>
      <Banner/>
      <div className='dropdown-container'>
          {aboutList.map((item) => (
            <Dropdown key={item.title} label={item.title} data={item.content} />
          ))}
      </div>
      
    </div>
  )
}

export default About