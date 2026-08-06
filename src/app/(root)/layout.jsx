import React from 'react'
import { onBoardUser } from '@/module/auth/actions';
import Navbar from '@/module/home/components/Navbar';
const Layout = async({children}) => {
  
    await onBoardUser();

    return (


    <div>
        <Navbar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout;