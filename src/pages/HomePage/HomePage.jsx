import React from 'react'
import Search from '../Search/Search'
import Banner from '../Banner/Banner'
import ListMovie from '../ListMovie/ListMovie'
import TabsMovie from '../Tabs/TabsMovie'
import News from '../News/News'

export default function HomePage() {
  return (
    <div className=''>
      <Banner />
      <ListMovie />
      <TabsMovie />
      <News />
    </div>
  )
}
