import React, { useState } from "react";
import { Filter } from "./Filter";
import { Addmovie } from "./Addmovie";
import "./style.css";
import { Button, InputGroup, FormControl, Image } from "react-bootstrap";
const NavBar = ({ handlerate, handleinput, handleAdd, searchinit }) => {
  const [text, setText] = useState("");

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="conteneur">
      <Image
        src="http://www.cuevasandalucia.es/es/images/logos/netflix-logo.png"
        style={{ height: 50 }}
      />
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Movie"
            aria-label="Search Movie"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <InputGroup.Append>
            <Button
              variant="secondary"
              onClick={() => {
                searchinit();
                handleinput(text);
              }}
            >
              <i className="fas fa-search"></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <i
        className="fas fa-redo"
        onClick={() => {
          searchinit();
        }}
      ></i>
      <Filter handlerate={handlerate} />
      <i
        className="fas fa-photo-video cred"
        onClick={() => setModalShow(true)}
      ></i>

      <Addmovie
        handleAdd={handleAdd}
        setModalShow={setModalShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default NavBar;
