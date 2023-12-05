import React from 'react';

interface IState{};
interface IProps{};

let About:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 fw-bold text-success"> About Us </p>
                        <p className="fs-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, ut optio tenetur libero deleniti, quasi ad vitae architecto, commodi maxime quibusdam! Voluptate alias ipsa veritatis quas neque, unde aspernatur magnam.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">
                                App Name: <span className="fw-bold">React Router with TypeScript</span>
                            </li>
                            <li className="list-group-item">
                                Author : <span className="fw-bold">Laurenz Melosantos</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;