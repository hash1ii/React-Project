import React from 'react'
import Styles from '../css/about.module.css'
import image1 from '../images/work.jpeg'
import image2 from '../images/repair.jpg'
import image3 from '../images/OIP.jpeg'

  const imageData = [
    { id: 1, src: image1, alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2'},
    { id: 3, src: image3, alt: 'Image 3' }
  ];
  const about = () => {
  return (
    <>
    <div className={Styles.body}>
<h1>ABOUT US</h1>
<h3>------OUR STORY------</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


      {imageData.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} className={Styles.images}/>
      ))}
    </div>

    </>
  )
}

export default about