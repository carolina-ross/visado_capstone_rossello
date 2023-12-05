'use client'
import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import Image from "next/image"

export const ProfileLogo = ({widthCircle = 207 , heightCircle = 207 , fontSize = '45px'}) => {

  const { auth  } = useContext(AuthContext)

  const getLetters = () =>{
    let letterString = '';
    let index = 0;
    const names = auth.user.name.split(' ');
    
    names.forEach((name) => {
        if(index <= 2){
            letterString += name[0]
        }
        index++;
    });

    return letterString;
  }

  return (
    <>
        { 
            auth.authenticated ? 
                <div style={{width: `${widthCircle}px` , height: `${heightCircle}px` , fontSize: fontSize}} className="profile-logo">
                   {    
                     getLetters()
                   }
                </div>
            : <Image className="profile-image" src="/register-icon.svg" height={heightCircle} width={widthCircle} alt="profile" />
        }
    
    </>
  )
}
