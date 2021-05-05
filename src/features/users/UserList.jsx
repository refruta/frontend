import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function UserList() {
  return(<div>
        <marquee><h1>Submitted Successfully you will get result in some time</h1>
        </marquee>
        </div>)
 /* const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button
            onClick={() => dispatch(fetchUsers())}
            className="button-primary"
          >
            Load users
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Brand Name</th>
                <th>Price</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ productId, productName, brandName ,price}, i) => (
                  <tr key={i}>
                    <td>{productId}</td>
                    <td>{productName}</td>
                    <td>{brandName}</td>
                    <td>{price}</td>
                    <td>
                      <button onClick={() => handleDelete(productId)}>Delete</button>
                      <Link to={`/edit-user/${productId}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
                */
               }
