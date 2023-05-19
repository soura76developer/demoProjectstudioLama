import react,{useState,useEffect} from 'react';
import Header from './header.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


const SecondPage = () =>{
    const json_data =[{index:"1",icon:"fa-regular fa-comments icon_style_second_page",text_one:"Speech and Communication",text_two:"Diffrently in speaking,sutters,stammers.."},{index:"2",icon:"fa-solid fa-apple-whole icon_style_second_page",text_one:"Food and nutrition",text_two:"Under weight child,food allergies,picky eater.."},{index:"3",icon:"fa-solid fa-chart-line icon_style_second_page",text_one:"Devlopmental issues",text_two:"Premature birth,ADHD,Austism.."},{index:"4",icon:"fa-solid fa-plus icon_style_second_page",text_one:"Skin,Allergies,sleep",text_two:"Rashes,acne,distributed sleep,dry skin.."},{index:"5",icon:"fa-solid fa-person-running icon_style_second_page",text_one:"Gross motor and Movement",text_two:"Craweling,Walking,Jumping,Catching.."},{index:"6",icon:"fa-solid fa-baby icon_style_second_page",text_one:"Behaviour and Social",text_two:"Cries a lot,tantrums,pinches,bites.."}]
    const [thisColour,setThisColour]=useState(null); 
    const [trackFlag,setTrackFlag]=useState(12);

    // function addStyleFunction(){
    //  if(thisColour != null){
    //     setThisColour(null);
    //  }
    // }

return(
    <>
    <Header/>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <p className="headerTextStyle">Get your questions answered by our consultants for the comfort of your home </p>
                </div>
                <div className="col-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8" > 
                            {
                                json_data.map((data,index)=>{
                                    // {console.log(index)}
                                    return(
                                        <>
                                            <div className={`row mb-2 justify-content-end second_page_element ${thisColour == index && 'Active'}`}  key={index}>
                                                {/* {console.log(e.)} */}
                                                <div className="col-md-1 p-2">
                                                    <i className={data.icon} data-hurry={index}  key={index}></i>
                                                </div>
                                                <div className="col-md-1"></div>
                                                <div className="col-md-10 text-start" data-hurry={index} key={index} onClick={()=>{setThisColour(index)}}>
                                                    <span className='font_one_style'  data-hurry={index} key={index}>{data.text_one}</span> <br/>  <span className="font_two_style">{data.text_two}</span>  
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            <div className="row mt-3">
                                <div className="col-md-11">
                                    <Button style={{backgroundColor:"gray",width:"355px",border:"none",color:"black"}}> Next   </Button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>                
    </>
)
}

export default SecondPage;