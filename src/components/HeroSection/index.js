import React from 'react'

const HeroSection = () => {
    return (
        <>
          <HeroContainer id="home">
              <HeroBg>
                  <VideoBg autoplay loop muted src={Video} type='video/mp4'>

                  </VideoBg>
              </HeroBg>
          </HeroContainer> 
        </>
    )
}

export default HeroSection
