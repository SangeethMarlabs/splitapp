import React from 'react'
import axios from "axios";

const baseURL = "https://localhost:44307/User/GetAll";
export default function UsersList() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>{post.map((p) => {
            const list = (
              <>
                <ul>
                  <li>Id: {p.id}</li>
                  <li>Name: {p.firstName} {p.lastName}</li>
                  <li>emailAddress: {p.emailAddress}</li> 
                </ul>
                <hr />
              </>
            );
            return list;
          })}
        </div>
    );
}