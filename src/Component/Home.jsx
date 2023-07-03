import react from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="https://picsum.photos/id/237/200/300" />
                            <div className="card-body">
                                <h5 className="card-title">Dogs for Sale</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" className="btn btn-primary">Go somewhere </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="https://picsum.photos/id/237/200/300" />
                            <div className="card-body">
                                <h5 className="card-title">Dogs for Sale</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" className="btn btn-primary">Go somewhere </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="https://picsum.photos/id/237/200/300" />
                            <div className="card-body">
                                <h5 className="card-title">Dogs for Sale</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" className="btn btn-primary">Go somewhere </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Home;