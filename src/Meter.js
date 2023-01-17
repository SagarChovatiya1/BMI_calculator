import React,{ useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer"
// import {createApi  } from "unsplash-js";

function Meter({bmi}) {
    let valCal=parseInt(bmi)

    // const unsplash = createApi({ accessKey: 'Siy7qB0bKhUkWUaV76JUUWRCfmuB7HjqRqyeqFE796k' });

    // unsplash.search.getPhotos({
    //   query: "gym"
    // }).then(result=>{console.log(result)})

    return (
        <div className="row">
        <ReactSpeedometer
        width={500}
        maxValue={40}
        customSegmentStops={[0,16 , 18.5, 25, 30, 40]}
        segmentColors={['#E2001B', '#D86D7A', '#00C52A','#EFF604','#5F0206']}
        needleHeightRatio={0.7}
        value={valCal}
        currentValueText="Bmi Level"
        customSegmentLabels={[
          {
            text: 'Severe Thinness',
            position: 'OUTSIDE',
            color: '#555',
          },
          {
            text: 'UnderWeight',
            position: 'OUTSIDE',
            color: '#555',
          },
          {
            text: 'normal',
            position: 'OUTSIDE',
            color: '#555',
          },
          {
            text: 'OverWeight',
            position: 'OUTSIDE',
            color: '#555',
            fontSize: '19px',
          },
          {
            text: 'Objesity',
            position: 'OUTSIDE',
            color: '#555',
          }
        ]}
        ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'rgb(3 82 89)'}
        textColor={'#d8dee9'}
      />



        </div>
    )
}
export default Meter