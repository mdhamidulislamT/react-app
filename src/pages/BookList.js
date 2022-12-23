import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import NavbarTwo from "../components/NavbarTwo";
import Form from "react-bootstrap/Form";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [bookName, setBookname] = useState("");
  const [description, setDescription] = useState("");



  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    await axios
      .get(`http://localhost:8000/api/books`)
      .then(({ data, status }) => {
        setBooks(data?.data);
      });
  };

  // Edit
  const fetchBook = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Fetch Book!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    await axios
      .get(`http://localhost:8000/api/books/${id}`)
      .then(({ data }) => {
        const { name, description } = data.data.attributes;
        setBookname(name);
        setDescription(description);
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  // Create Book
  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", bookName);
    formData.append("description", description);

    await axios
      .post(`http://localhost:8000/api/books`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        setBookname("");
        setDescription("");
        fetchBooks();
      })
      .catch(({ response }) => {
        if (response.status === 422) {
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  // Delete
  const deleteBook = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    await axios
      .delete(`http://localhost:8000/api/books/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        fetchBooks();
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <NavbarTwo />
      <div className="container">
        <div className="row">
          <Form onSubmit={createProduct}>
            <div className="row">
              <div className="col-5">
                <Form.Group className="mb-3" controlId="BookName">
                  <Form.Label> Book Name </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Book Name"
                    value={bookName}
                    onChange={(event) => {
                      setBookname(event.target.value);
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-5">
                <Form.Group className="mb-3" controlId="Description">
                  <Form.Label> Description </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-2">
                <Button
                  variant="success"
                  className="btn btn-success mt-4 btn-lg"
                  type="submit"
                >
                   Save Book
                </Button>
              </div>
            </div>
          </Form>

          <div className="col-12">
            <div className="card card-body">
              <div className="table-responsive">
                <table className="table table-bordered mb-0 text-center">
                  <thead>
                    <tr>
                      <th>No#</th>
                      <th>Name</th>
                      <th>Publication Year</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.length > 0 &&
                      books.map((row, key) => (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>{row.attributes.name}</td>
                          <td>{row.attributes.publication_year}</td>
                          <td>
                            <Button
                              variant="success"
                              className="mr-2"
                              onClick={() => fetchBook(row.id)}
                            >
                              Edit
                            </Button>

                            <Button
                              variant="danger"
                              onClick={() => deleteBook(row.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
