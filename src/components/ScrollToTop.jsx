import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 200)
  };

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer fixed right-10 bottom-10 z-50 flex justify-center items-center 
        bg-primary border-4 border-secondary-dark rounded-xl size-[4.375rem] 
        transition-all duration-500 ease-in-out transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
    >
      <img src="/icon/ic_arrow_up.svg" alt="Arrow Up" />
    </div>
  )
}

export default ScrollToTop