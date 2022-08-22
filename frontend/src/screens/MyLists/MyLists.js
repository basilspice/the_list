import React from "react";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";


const MyLists = () => {

const [lists, setLists] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure about that?")) {
    }
  };
  const fetchLists = async () => {
    const {data} = await axios.get("/api/lists");
   
    setLists(data)
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <MainScreen title="Welcome Back Basil...">
      <Link to="/createlist">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New List
        </Button>
      </Link>
      {lists.map((list) => (
        <Accordion defaultActiveKey={["0"]} key={list._id}>
          <Accordion.Item eventkey="0">
            <Card style={{ margin: 10 }} key={list._id}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Button as={Card.Text} variant="link">
                    {list.title}
                  </Accordion.Button>
                </span>
                <div>
                  <Button href={`/lists/${list.id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={deleteHandler}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse>
                <Card.Body>
                  <h4>
                    <Badge bg="success" text="light">
                      Category - {list.category}{" "}
                    </Badge>
                  </h4>

                  <blockquote className="blockquote mb-0">
                    <p>{list.content}</p>
                    <footer className="blockquote-footer">
                      Creater on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyLists;
