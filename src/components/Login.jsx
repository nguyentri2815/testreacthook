import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import { ThemeContext } from "../App";
export default function Login({showform}) {
    const [testUser, settestUser] = useState();
    const [texterror, settexterror] = useState("");
  // if (!open) return null
  const theme = useContext(ThemeContext);
  function login(){
    if(theme.name===testUser){
        theme.setform();
        settexterror('');
        localStorage.setItem("usertest",testUser);
    }else{
        settexterror(`bạn nhập sai tên! tên đúng là : testuser`)
    }

  }
  return ReactDom.createPortal(
    <>
        <div className={showform?"modal-fix active":"modal-fix"}>
            <div className="col-4">
                <div className="card">
                <div className="card-body">
                    <form  autoComplete="off" >
                        <div className="form-group show-tt">
                            <p className="pb-1">Gõ <span className="font-weight-bold">testuser</span> để đăng nhập</p>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="username" 
                                onChange={(e)=>settestUser(e.target.value)}
                            />
                            <p className="text-danger">{texterror}</p>
                        </div>
                        <button 
                            type="button" className="btn btn-primary" onClick={login}>
                            login
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </>,
    document.getElementById("portal")
  );
}
