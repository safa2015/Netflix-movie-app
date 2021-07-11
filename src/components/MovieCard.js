import React from "react";
import { Card, Button } from "react-bootstrap";
import { FiveStart } from "./FiveStart";

export const MovieCard = ({ el, handleTrash }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.srcImg} style={{ height: "350px" }} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {" "}
            <FiveStart rate={el.Rate} />
          </Card.Text>

          <Button
            variant="primary"
            style={{ width: "100%" }}
            onClick={() => window.open(el.srcVideo, "_blank")}
          >
            Bande Annonce
          </Button>
          <i
            className="fas fa-minus-circle"
            onClick={() => {
              handleTrash(el.id);
            }}
          >
            {" "}
            Delete
          </i>
        </Card.Body>
      </Card>
    </div>
  );
};
