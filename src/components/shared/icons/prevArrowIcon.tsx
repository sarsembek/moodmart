import React from 'react'
import { IconType } from '../../../core/type/icon.type'


export const PrevArrowIcon: React.FC<IconType> = ({ size = 32, color, className , onClick }) => {
  return (
    <svg className={`transform scale-x-[-1] ${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path d="M12.4314 4.16797L11.5406 5.05887L15.5049 9.02323H2.5V10.2832H15.5049L11.5406 14.2475L12.4314 15.1384L17.9167 9.65316L12.4314 4.16797Z" fill={color}/>
    </svg>
  )
}