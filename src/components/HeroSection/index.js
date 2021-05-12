import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
          <HeroContainer>
              <HeroBg>
                  <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
              </HeroBg>
              <HeroContent>
                  <HeroH1>Maintaing Health Record is now Easy</HeroH1>
                  <HeroP>
                      Sign up for a new account today and get free 7 day trial
                      and cashback on buying medicine online.
                  </HeroP>
                  <HeroBtnWrapper>
                      <Button 
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                      >
                          Get Started Now {hover ? <ArrowForward /> : <ArrowRight />}
                      </Button>
                  </HeroBtnWrapper>
              </HeroContent>
          </HeroContainer> 
        </>
    )
}

export default HeroSection
