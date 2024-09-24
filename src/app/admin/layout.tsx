"use client";
import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import { useSession } from "next-auth/react"
import Login from '@/components/admin-panel/login';
const layout = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isLoading = useAppSelector(store => store.LoadingReducer)
const {  data: session, } = useSession()

if(!session?.user){
    return <Login/>
}

  return (
    <div>
      layout
    </div>
  )
}

export default layout
