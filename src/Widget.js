import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';




function Widget() {

  const newArticles = (heading, subtitle) =>(
    <div className='widgets__articles'>
            <div className='widgets__artclesLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__artclesRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
  )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {/* <newArticles heading={'Tesla has new highs'} subtitle={'Top news readers 8000'}/>
        <newArticles heading={"PAPA react back"} subtitle={"Top news readers 9090"}/>
        <newArticles heading={'Cyrpto'} subtitle={'Top news readers 6320'}/>
        <newArticles heading={'Coronavirus updates'} subtitle={'Top news readers 5000'}/> */}
        {newArticles('Tesla has new highs','Top news readers 8000')}
        {newArticles('PAPA react back','Top news readers 9090')}
        {newArticles('Cyrpto','Top news readers 8000')}
        {newArticles('Coronavirus updates','Top news readers 8000')}
    </div>
  )
}

export default Widget