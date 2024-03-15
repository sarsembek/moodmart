import React from 'react'
import { IconType } from '../../../core/type/icon.type'

export const FavoriteIcon: React.FC<IconType> = ({ size = 32, color, className="" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} d="M23.755 9.37846C22.7863 8.40983 21.504 7.88042 20.1353 7.88042C18.7667 7.88042 17.4804 8.41375 16.5118 9.38238L16.0059 9.88827L15.4922 9.37454C14.5236 8.40591 13.2334 7.86865 11.8647 7.86865C10.5 7.86865 9.21375 8.40199 8.24904 9.3667C7.28041 10.3353 6.74708 11.6216 6.751 12.9902C6.751 14.3589 7.28825 15.6412 8.25688 16.6098L15.6216 23.9746C15.7236 24.0765 15.8608 24.1314 15.9942 24.1314C16.1275 24.1314 16.2647 24.0805 16.3667 23.9785L23.7471 16.6255C24.7157 15.6569 25.2491 14.3706 25.2491 13.002C25.253 11.6334 24.7236 10.3471 23.755 9.37846ZM23.002 15.8765L15.9942 22.8569L9.00198 15.8647C8.23335 15.0961 7.80982 14.0765 7.80982 12.9902C7.80982 11.904 8.22943 10.8843 8.99806 10.1196C9.76277 9.35493 10.7824 8.9314 11.8647 8.9314C12.951 8.9314 13.9745 9.35493 14.7432 10.1236L15.6294 11.0098C15.8373 11.2177 16.1706 11.2177 16.3785 11.0098L17.2569 10.1314C18.0255 9.36277 19.0491 8.93924 20.1314 8.93924C21.2138 8.93924 22.2334 9.36277 23.002 10.1275C23.7706 10.8961 24.1903 11.9157 24.1903 13.002C24.1942 14.0883 23.7706 15.1079 23.002 15.8765Z" fill={color}/>
    </svg>
  )
}