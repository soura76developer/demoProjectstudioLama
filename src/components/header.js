import react,{useState,useEffect} from 'react';

const Header=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 p-3" >
                                <div className='indicator_one'>
                                </div>
                            </div>
                            <div className="col-md-3 p-3 ">
                                <div className='indicator_two'>
                                </div>
                            </div>
                            <div className="col-md-3 p-3 ">
                                <div className='indicator_three'>
                                </div>
                            </div>
                            <div className="col-md-3 p-3 ">
                                <div className='indicator_four'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
