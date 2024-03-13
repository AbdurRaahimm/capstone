

export default function TopBar() {
    return (
        <div className="topbar d-flex justify-content-between px-3 ">
            <div className="topbar-left d-flex justify-content-between ">
                <div className="topbar-left-item m-2">
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:123-456-7890" className="text-white text-decoration-none "> 123-456-7890 </a>
                </div>
                <div className="topbar-left-item m-2">
                    <i className="fas fa-envelope"></i>
                    <span>
                        <a href="mailto:admin@gmail.com" className="text-white text-decoration-none "> admin@gmail.com </a>

                    </span>

                </div>
            </div>
            <div className="topbar-right d-flex justify-content-between  ">
                <div className="topbar-right-item m-2">
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="topbar-right-item m-2">
                    <i className="fab fa-twitter"></i>
                </div>
                <div className="topbar-right-item m-2">
                    <i className="fab fa-instagram"></i>
                </div>
                <div className="topbar-right-item m-2">
                    <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="topbar-right-item m-2">
                    <a href="/" className="text-white text-decoration-none">Sign In</a>
                </div>
            </div>
            
        </div>
    )
}
