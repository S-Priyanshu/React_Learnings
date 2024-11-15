import React, { useState } from 'react'

export default function About() {

    const [myStyle ,setmyStyle] =useState({
        color : 'black',
        backgroundColor: 'white',
        
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () =>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color : 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setmyStyle({
                color : 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
       
    }
    
  return (
<div className="container" style={myStyle}>

<h1 className="my-2">About Us</h1>
<div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body"  style={myStyle}>
        {/* <strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ab. Eos animi, voluptas fuga, repudiandae rerum in sunt nam numquam asperiores voluptatum nisi aliquam corrupti. Omnis maiores pariatur nisi rem.</strong> */}
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis rerum minima est illum, nam deleniti quidem dignissimos? Reiciendis accusantium, similique excepturi quidem numquam aliquid corrupti, atque repellat aspernatur aperiam assumenda eos unde, iure in exercitationem. Eligendi, dolor eius! Mollitia molestias nisi deleniti? 
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, harum. Impedit, similique! Possimus optio tempore, velit deserunt eveniet voluptatibus ipsa saepe aliquid cumque sint quod sit voluptas eos est unde.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit itaque nobis repellat minima? Facilis inventore laudantium, enim ratione distinctio unde impedit nobis praesentium illum molestiae, labore animi natus? Rem distinctio fuga quod neque!
      </div>
    </div>
  </div>
</div>
<div className="container my-2">
    <button onClick={toggleStyle} type="button" className="btn btn-primary " > {btnText} </button>
</div>

</div>
  )
}
