import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../../components/CardItem";
import Loading from "../../components/Loading";
import { GraphQLClient } from "../../hooks/api";
import Comment from "./Comment";

export default function Detail() {
  let { id } = useParams();
  const [dataDetail, setdataDetail] = useState(null);
  useEffect(() => {
    GraphQLClient.query(
      `{
                posts {
                  data {
                    id
                    title
                    body
                    comments{
                      data{
                        id
                        email
                        name
                        body
                      }
                    }
                    user{
                      id
                      name
                      username
                      email
                      phone
                      website
                    }
                  }
                }
            }
            `
    ).then((res) => setdataDetail(res.data.posts.data.slice(0, 9)));
  }, []);
  if (!dataDetail) {
    return <Loading />;
  }
  var item = dataDetail.filter((item) => item.id === id);
  var postRelate = dataDetail.filter((item) => item.id !== id).slice(0, 3);
  var comments=item[0].comments
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h2>What We Do</h2>
            <hr />
            <h3>post {id} detail</h3>
            <h4>{item[0].title}</h4>
            <p>{item[0].body}</p>
          </div>
          <div className="col-md-4 mb-5">
            <h2>Authur info</h2>
            <hr />
            <address>
              <strong>{item[0].user.name}</strong>
              <br />
              <abbr title="Phone">username:</abbr>
              {item[0].user.username}
              <br />
              <abbr title="Phone">website:</abbr>
              {item[0].user.website}
              <br />
            </address>
            <address>
              <abbr title="Phone">Phone:</abbr>
              {item[0].user.phone}
              <br />
              <abbr title="Email">Email:</abbr>
              <a href="mailto:#">{item[0].user.email}</a>
            </address>
          </div>
        </div>
        {/* /.row */}
        <div className="row">
          {postRelate.map((value) => (
            <CardItem key={value.id} value={value} />
          ))}
        </div>
        <div className="row">
          {comments.data.map((value) => <Comment key={value.id} value={value}/>)}
        </div>
      </div>
    </>
  );
}
