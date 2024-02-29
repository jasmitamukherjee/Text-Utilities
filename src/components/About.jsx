import React,{ useState } from 'react'

export default function About(props) {


// const [btnText, setBtnText] = useState("Enable Dark Mode")

  //  const [myStyle,setMyStyle]=useState(
    
  //   {
  //       color: 'black',
  //       backgroundColor : 'white',
        
  //   })
  let myStyle={
    color : props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'grey':'white',
    border: '2 px solid',
    borderColor : props.mode === 'dark'?'white':'black'
  }
// const toggleStyle=()=>{
//   if(myStyle.color==='black'){
//     setMyStyle({
//       color: 'white',
//         backgroundColor : 'black',
//         border: '1px solid white'
      

//     })
//     setBtnText("Enable light mode")
//   }
//   else{
//     setMyStyle({
      
//         color: 'black',
//         backgroundColor : 'white'


//     })
//     setBtnText("Enable dark mode")

//   }
// }

  return (
    <div className='container' style={myStyle}>
        <h2>About</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"   type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Our Creator
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
        <strong>Jasmita Mukherjee</strong>
        <div className="container">
          <img src='https://hips.hearstapps.com/clv.h-cdn.co/assets/17/29/2048x1152/hd-aspect-1500566326-gettyimages-512366437-1.jpg' alt='creater picture' width='50%' />
          </div> 

      </div>
    </div>
  </div>
  {/* <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed " type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}
</div>
{/* <div className="container my-3">

<button onClick={toggleStyle} type="button" className='btn btn-secondary'>{btnText}</button>

</div> */}


    </div>
  )
}
