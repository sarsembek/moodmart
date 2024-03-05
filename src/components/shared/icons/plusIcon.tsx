import React from 'react'
import { IconType } from '../../../core/type/icon.type'

export const PlusIcon: React.FC<IconType> = ({ size = 32, color, className="" }) => {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9999 3.625C13.5177 3.625 13.9374 4.04471 13.9374 4.56246L13.9374 12.0625L21.4374 12.0626C21.9552 12.0626 22.3749 12.4823 22.3749 13C22.3749 13.5177 21.9552 13.9374 21.4374 13.9374L13.9374 13.9365L13.9374 21.4376C13.9374 21.9554 13.5177 22.3751 12.9999 22.3751C12.4822 22.3751 12.0625 21.9554 12.0625 21.4376L12.0624 13.9365L4.56233 13.9374C4.04459 13.9374 3.62488 13.5177 3.62488 13C3.62488 12.4823 4.04459 12.0626 4.56233 12.0626L12.0624 12.0625L12.0625 4.56246C12.0625 4.04471 12.4822 3.625 12.9999 3.625Z" fill={color}/>
    </svg>
  )
}