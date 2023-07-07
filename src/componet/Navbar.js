import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nave() {
  return (
    <>
      <ul className="ul">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Job Aids</a>
        </li>
        <li className="loginbtn">Login</li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container  ">
        <div className="row">
          <div className="col-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmjrYIp__wE4JsegSr0zcGF-janINGzdxkQ&usqp=CAU"
              className="logo"
            ></img>
            <h1 className="head">Principal Portal</h1>
            <input
              type="text"
              placeholder="    what are looking for"
              className="searchbox"
            ></input>
          </div>
          <div className="col-6">
            <div className="container">
              <div className="row ">
                <div className="col-3  cards purple">
                  <img
                    src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?size=626&ext=jpg&ga=GA1.1.1416148950.1688700904&semt=sph"
                    className="logoround"
                  ></img>

                  <p className="dummytext">School Tools</p>
                </div>
                <div className="col-3  cards blue ">
                  <img
                    src="https://img.freepik.com/free-vector/location_53876-25530.jpg?size=626&ext=jpg&ga=GA1.2.1416148950.1688700904&semt=ais"
                    className="logoround"
                  ></img>
                  <p className="dummytext">District Ops</p>
                
                </div>
                <div className="col-3  cards orange ">
                  <img
                    src="https://img.freepik.com/free-vector/award-ribbon-check-mark-with-stars_78370-1097.jpg?size=626&ext=jpg&ga=GA1.1.1416148950.1688700904&semt=sph"
                    className="logoround"
                  ></img>
                  <p className="dummytext">Certification</p>
                </div>
                <div className="col-3  cards orange">
                  <img src="https://img.freepik.com/free-vector/rocket_53876-25492.jpg?size=626&ext=jpg&ga=GA1.1.1416148950.1688700904&semt=sph"className="logoround"></img>
                  <p className="dummytext">Actions</p>
                </div>
                <div className="col-3  cards red">
                <img src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?size=626&ext=jpg&ga=GA1.2.1416148950.1688700904&semt=sph"className="logoround"></img>
                  <p className="dummytext">student info</p>
                </div>
                <div className="col-3  cards green">
                <img src="https://img.freepik.com/free-icon/event_318-584639.jpg?size=626&ext=jpg&ga=GA1.1.1416148950.1688700904&semt=sph"className="logoround"></img>
                  <p className="dummytext">What`s new</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nave;
