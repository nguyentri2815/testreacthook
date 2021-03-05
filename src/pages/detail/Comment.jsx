import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
export default function Comment({value}) {
    const [coutlike, setcoutlike] = useState(0);
    const [form, setform] = useState(false);
    const theme = useContext(ThemeContext);
    // console.log(theme);
    function setcomment(){
      if(localStorage.getItem("usertest")){
        setform(!form)
      }else{
        theme.setform()
        // setform(!form)
      }
    }
  return (
    <>
      <div className="col-12 d-flex align-items-center">
        <div className="col-md-2">
          <img
            src="https://image.ibb.co/jw55Ex/def_face.jpg"
            className="img img-rounded img-fluid"
            alt="đâsd"
          />
          <p className="text-secondary text-center">{value.email}</p>
        </div>
        <div className="col-md-10">
          <p>
            <a
              className="float-left"
              href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
            >
              <strong>{value.name}</strong>
            </a>
          </p>
          <div className="clearfix" />
          <p>
            {value.body}
          </p>
          <p>
            <button className="float-right btn btn-outline-primary ml-2" onClick={setcomment}>

              <i className="fa fa-reply" /> Reply
            </button>
            <button  className="float-right btn text-white btn-danger" onClick={()=>setcoutlike(coutlike+1)}>
              <i className="fa fa-heart" /> Like
              <span className="pl-1">{coutlike}</span>
            </button>
          </p>
          <div className={form?"form-group mt-5 show":"form-group mt-5"}>
            <label htmlFor="comment">Comment: <span className="font-weight-bold">{localStorage.getItem("usertest")?localStorage.getItem("usertest"):""}</span></label>
            <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
        </div>

        </div>
      </div>
    </>
  );
}
