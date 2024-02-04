function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="right">
            <h1 style={{color:"whitesmoke"}}>E-visa</h1>
        </div>
        <div className="left">
            <ul>
                <a href="/home"><li>Home</li></a>
                <a href="/evisa"><li>Apply E-Visa</li></a>
                <a href="/revisa"><li>Renewal E-Visa</li></a>
                <a href="/status"><li>Check status</li></a>
                <a href="/faq"><li>FAQ's</li></a>
                <a href="/about"><li>About us</li></a>
                <a href="/contact"><li>Contact us</li></a>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
