import { Link } from "react-router-dom";
import logo from './logo.png';

const NavBar = () => {
    return (
        <div className="container-fluid bg-danger py-3">
            <div className="row justify-content-between align-items-center">
                <div className="col-sm-3 text-center">
                    <img src={logo}
                        width="50%"
                        className="d-inline-block align-top rounded"
                        alt="Logo" />
                </div>
                <div className="col-sm-3 text-center">
                    <h1 className="text-success display-3">Operational Interface</h1>
                </div>
                <div className="col-sm-5 text-center">
                    <nav className="navbar">
                        <div className="mx-5">
                            <Link className="m-1 btn btn-success" to="/">Home</Link>
                            <Link className="m-1 btn btn-success" to="/SingleStudent">All Students Data</Link>
                            <Link className="m-1 btn btn-success" to="/SliceDicingData">Compare</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;