import React, { useEffect, useState } from "react";
import CardItem from "../../components/CardItem";
import Loading from "../../components/Loading";
import { GraphQLClient } from "../../hooks/api";
import InfoProject from "./InfoProject";

export default function Home({ idsearch }) {
  const [dataposts, setdataposts] = useState(null);
  useEffect(() => {
    GraphQLClient.query(
      `{
        posts{
          data{
            id
            title
            user{
              name
            }
          }
        }
      }
      `
    ).then((res) => setdataposts(res.data.posts.data.slice(0, 9)));
  }, []);
  if (!dataposts) return <Loading />;
  var datafilter = [];
  dataposts.forEach((element) => {
    if (element.title.indexOf(idsearch) !== -1) {
      datafilter.push(element);
    }
  });
  return (
    <>
      <>
        <div className="container">
          <InfoProject/>
          <div className="row">
            {datafilter.map((value) => (
              <CardItem key={value.id} value={value} />
            ))}
          </div>
        </div>
      </>
    </>
  );
}
