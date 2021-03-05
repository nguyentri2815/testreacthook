import React, { useState } from "react";

export default function InfoProject() {
    const [collapse , setcollapse ] = useState(false);
  return (
    <>
      <div className="mt-4">
        <p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>setcollapse(!collapse)}
          >
            những gì đã làm
          </button>
        </p>
        <div className={collapse?'collapse show ':"collapse"}>
          <div className="card card-body">
            <ul className="list-group">
              <li className="list-group-item active text-uppercase font-weight-bold">
                giao diện
              </li>
              <li className="list-group-item">
                - sử dụng boostrap4 
              </li>
              <li className="list-group-item">- Gồm 2 page home và detail</li>
              <li className="list-group-item active text-uppercase font-weight-bold">
                chức năng
              </li>
              <li className="list-group-item">
                - Search: gửi nhận props + truyền event
              </li>
              <li className="list-group-item">
                - Click: react-router-dom
              </li>
              <li className="list-group-item active text-uppercase font-weight-bold">
                các hook sử dụng
              </li>
              <li className="list-group-item">
                - <span className="font-weight-bold">useStace:</span> setdata từ grapql trả về, set toggle,like++ (phần
                comment trang detail)
              </li>
              <li className="list-group-item">
                - <span className="font-weight-bold">useEffect: </span>gọi api
              </li>
              <li className="list-group-item">
                - <span className="font-weight-bold">useRef: </span> kết hợp setTimeout tối ưu số lần render khi gõ text search
              </li>
              <li className="list-group-item">
                - <span className="font-weight-bold">useContext: </span> gửi biến user tới component cháu kiểm trả đăng nhập khi bấm nút replay commnent
              </li>
              <li className="list-group-item">
                - <span className="font-weight-bold">Portals </span> modal login khi bấm nút replay (commnent trang detail)
              </li>
              <li className="list-group-item active text-uppercase font-weight-bold">
                khác
              </li>
              <li className="list-group-item">
                link graphql:
                <a href="https://graphqlzero.almansi.me/api">
                  https://graphqlzero.almansi.me/api
                </a>
              </li>
              <li className="list-group-item">
                link Code: <a href="đâs">đâs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
