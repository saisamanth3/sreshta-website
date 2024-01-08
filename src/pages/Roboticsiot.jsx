import React from "react";


const Roboticsiot = () => {
    return(

    <>

<div>
  {/* Breadcrumb start */}
  <div className="breadcrumb-area bg-img bg-cover" data-bg-image="assets/images/robotics-breadcrumb.jpg">
    <div className="container">
      <div className="content text-center">
        <h2>Robotics With IOT</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">Robotics</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb end */}
  {/* content-area start */}
  <div className="course-area pt-60 pb-75">
    <div className="container">
      <div className="row">
        <div className="col-md-6 how-img">
          <img src="assets/images/robotics/robotics-iot.jpg" />
        </div>
        <div className="col-md-6">
          <h4>Robotics IOT</h4>
          <p className="text-muted">
            For most of technological history, the focus was on how to make devices communicate with humans, or how to use devices to communicate with other humans. How can we make our TV switch on, how can we make our computer run a game, how can we make the air conditioner give us the temperature we want. We used the internet to send emails to other humans, to check up on other humans on social media, to buy things from other humans.
            <br />
            Internet of Things is about limiting human involvement in that communication network. The internet here becomes not a network of humans connected through devices, but a network of devices talking to each other. IoT is basically a network of things capable of communicating with other things.
            <br />              
            Robotics is also about reducing human involvement. With robotics, we develop ways to delegate human tasks to machines. Robots can assist or even replace humans in doing tasks.
            <br />
            So it makes sense that these disciplines can benefit from collaboration. Robotics and IoT working together are how we can actually bring the power of computing into the physical world.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* content-area end */}
</div>





    </>

    )
}

export default Roboticsiot;