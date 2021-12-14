import React, { useState, useEffect } from 'react';
import Header from '../SharedPage/Header/Header';
import Footer from './../SharedPage/Footer/Footer';
import Program from './Program/Program';
import ProgramSkeleton from './ProgramSkeleton';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('./programs.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPrograms(data)
            })
    }, []);
    const skeleton = [
        {}, {}, {}, {}, {}, {}
    ]
    return (
        <div>
            <Header />
            <div className="main_program_container">
                <div className="container">
                    <h2 className='text-center mt-3 mb-4' data-aos="zoom-out">Our Regular Programs</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                        {
                            programs[2] ? programs.map(program => <Program
                                key={program.id}
                                program={program}
                            />)
                                :
                                skeleton.map(pro => <ProgramSkeleton
                                    pro={pro}
                                />)



                        }

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Programs;