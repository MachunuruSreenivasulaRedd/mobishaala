import './App.css';

function App() {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="leftContent">
        <h1 className="companyName">Mobishaala</h1>
        <h1 className="heading">Create your <span className="highlighter">Digital Classroom</span> in 5 mins for <span className="highlighter">FREE</span> & connect to 1+ million Students.</h1>
          <ul type="disc" className='options'>
            <li>No technical knowledge required.</li>
            <li>Quickly setup live class,notes,ebooks and more.</li>
            <li>Reach out to millions of students anywhere ,anytime. </li>
          </ul>
        </div>
        <div className="rightContainer">
        <iframe width="260" height="145" src="https://www.youtube.com/embed/jg5d59ligW4" title="Mobishaala Digital Classroom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button type="button" className="buyBtn">Buy</button>
      </div>
      <div className="rightContainerlarge">
        <iframe width="385" height="210" src="https://www.youtube.com/embed/jg5d59ligW4" title="Mobishaala Digital Classroom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button type="button" className="buyBtn">Buy</button>
      </div>
      </div>
      <div className="downContainer">
        <p>Institute/Teacher</p>
        <button type="button" className="startBtn">Get Started </button>
        <p className='sider'>Student</p>
        <button type="button" className="downloadBtn">Download App</button>
        <br/>
        <button className="chatBtn" type="button"><img src="https://res.cloudinary.com/dollmqugm/image/upload/t_whts/v1710466080/whts_y0onex.png" className="whatsappicon" alt="whatsup"/> Talk to Us</button>
      </div>
      <div className="footerSection" >
        <h1 className="Name">Mobishaala</h1>
        <br />
        <div className='section'>
        <h3 className="sideHeader">Vision</h3>
        <p className="content">Empower Institutions & Teachers with state of the art digital classroom technology.</p>
        </div>
        <div className='section'>
        <h3 className="sideHeader">Address</h3>
        <p className="content"><span className="high">Registered Office: </span>804,5th cross,9th main,4th block,koramangala,Bangalore,Karnataka,560034.</p>
        <p className="content"><span className="high">Corporate Office: </span>293,westend marg,near saket,saidulajab,saket,New Delhi,110030. </p>
        </div>
        <div className='section'>
        <h3 className="sideHeader">Quick Links</h3>
        <p>Blog</p>
        <p>Android App</p>
        <p>IOS App</p>
        </div>
      </div>
    </div>
  );
}

export default App;
