import React from 'react'
import { onBoardUser } from '@/module/auth/actions';
const Layout = async({children}) => {
  
    await onBoardUser();

    return (


    <div>
        <nav></nav>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout;