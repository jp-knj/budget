import React from 'react'

const BarChart = () => {
  return (
    <section className="chart">
      <svg width="350" height="180" class="center-align">
        <g class="x-axis" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" className="sample">
          <line x1="0" x2="100%" y1="30" y2="30" stroke-width="0.3" stroke="white"></line>
          <g class="tick" opacity="1" transform="translate(25,0)"><line stroke="currentColor" y2="0"></line><text fill="currentColor" y="3" dy=".5em">Sun</text></g>
          <g class="tick" opacity="1" transform="translate(75,0)"><line stroke="currentColor" y2="0"></line><text fill="currentColor" y="3" dy=".5em">Mon</text></g>
          <g class="tick" opacity="1" transform="translate(125,0)"><line stroke="currentColor" y2="0"></line><text fill="currentColor" y="3" dy=".5em">Tue</text></g>
          <g class="tick" opacity="1" transform="translate(175,0)"><line stroke="currentColor" y2="0"></line><text fill="currentColor" y="3" dy=".5em">Wed</text></g>
          <g class="tick" opacity="1" transform="translate(225,0)"><line stroke="currentColor" y2="0"></line><text fill="currentColor" y="3" dy=".5em">Thu</text></g>
          <g class="tick" opacity="1" transform="translate(275,0)"><line stroke="currentColor" y2="0"></line><text fill="currentColor" y="3" dy=".5em">Fri</text></g>
          <g class="tick" opacity="1" transform="translate(325,0)"><line stroke="currentColor" y2="0"></line><text fill="currentColor" y="3" dy=".5em">Sat</text></g></g>
          <g class="legend" className="sample1"><rect x="0" y="0" width="10" height="10" fill="rgba(255, 255, 255, 0.3)"></rect><rect x="130" y="0" width="10" height="10" fill="#fff"></rect><text fill="rgba(255, 255, 255, 0.6)" x="18" y="10" >INCOME</text><text fill="#fff" x="148" y="10">EXPENSE</text></g>
          <g class="layer" fill="rgba(255, 255, 255, 0.3)"><rect x="72" width="6" y="160.78333333333333" height="0"></rect><rect x="122" width="6" y="121.00000000000001" height="3.666666666666643"></rect><rect x="172" width="6" y="0" height="110.00000000000001"></rect><rect x="222" width="6" y="66" height="91.66666666666669"></rect></g>
        <g class="layer" fill="#fff"><rect x="72" width="6" y="160.78333333333333" height="4.216666666666669"></rect><rect x="122" width="6" y="124.66666666666666" height="40.33333333333334"></rect><rect x="172" width="6" y="110.00000000000001" height="54.999999999999986"></rect><rect x="222" width="6" y="157.66666666666669" height="7.333333333333314"></rect></g>
      </svg>
    </section>
  );
}

export default BarChart
