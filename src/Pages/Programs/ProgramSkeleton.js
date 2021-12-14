import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProgramSkeleton = ({ props }) => {
    return (
        <div className="col">
            <div className="card single_card"
                data-aos="zoom-in"
            >

                <Skeleton
                    className='image_skeleton'
                    height={200} />
                <div className="card-body">
                    <h5 className="card-title">{props?.title || <Skeleton />}</h5>
                    <p><small>{props?.instructor}</small></p>
                    <p className="card-text">{props?.description?.slice(0, 90) || <Skeleton count={3} />}</p>
                </div>
            </div>
        </div>
    );
};

export default ProgramSkeleton;