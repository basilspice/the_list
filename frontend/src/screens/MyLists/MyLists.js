import React from "react";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteListAction, listLists } from "../../actions/listsActions";
import Loading from "../../components/Loading";

import ErrorMessage from "../../components/ErrorMessage";

const MyLists = ({ search }) => {
  const dispatch = useDispatch();
  const listList = useSelector((state) => state.listList);
  const { loading, lists, error } = listList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const listCreate = useSelector((state) => state.listCreate);
  const { success: successCreate } = listCreate;

  const listUpdate = useSelector((state) => state.listUpdate);
  const { success: successUpdate } = listUpdate;

  const listDelete = useSelector((state) => state.listDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = listDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure about that?")) {
      dispatch(deleteListAction(id));
    }
  };

  const history = useHistory();

  useEffect(() => {
    dispatch(listLists());
    if (!userInfo) {
      history.pushState("/");
    }
  }, [
    dispatch,
    successCreate,
    history,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}`}>
      <Link to="/createlist">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New List
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {lists &&
        lists
          // .filter((filteredList) =>
          //   filteredList.title.toLowerCase().includes(search.toLowerCase())
          // )
          .reverse()

          .map((list) => (
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
                      
                      <Button href={`/api/lists/${list._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(list._id)}
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
                          Created on {""}
                          <cite title="Source Title">
                            {list.createdAt.substring(0, 10)}
                          </cite>
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
