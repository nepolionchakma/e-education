import React from 'react';

const Service = (props) => {
    console.log(props)
    return (
        <div>
            {/* const {title, price, instractor, img, skill, duration} = props.courses; */}
            return (
            <div className="course-container p-3">
                {/* <img src={img} alt="" />
                <h2>Title : {title}</h2>
                <h5>Skill : {skill}</h5>
                <h5>Duration : {duration}</h5>
                <h5>Instractor:{instractor}</h5>
                <h6>Price : ${price}</h6>
                <button className="btn btn-success mt-3">Details</button> */}
            </div>
            );
        </div>
    );
};

export default Service;