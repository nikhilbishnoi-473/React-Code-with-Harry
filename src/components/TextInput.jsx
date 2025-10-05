import React, { useState } from "react";

const TextInput = (props) => {
  const [Text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("click in the button hello");
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upper case", "Success");
  };
  const handleOnClick = (event) => {
    // console.log("input text");
    setText(event.target.value);
  };
  const handleLowerClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lower case", "Success");

  };
  const handleDeleteClick = () => {
    setText(" ");
    props.showAlert("Delete", "Success");

  };

  
  return (
    <>
    <div className=""  style={{color: props.mode === 'light'? 'black':'white'}}>
        <div className="container" >
        <div className="mb-3">
          <h2 htmlFor="exampleFormControlTextarea1" className="mt-5 form-label">
            {props.email}
          </h2>
          <textarea
            style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white': 'black'}}
            value={Text}
            onChange={handleOnClick}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <div className=" d-flex gap-4 pt-4">
          <button disabled={Text.length === 0} onClick={handleUpClick} className="btn btn-primary">
            Convert upper case
          </button>
          <button disabled={Text.length === 0}  onClick={handleLowerClick} className="btn btn-primary">
            Convert lower case
          </button>
          <button disabled={Text.length === 0}  onClick={handleDeleteClick} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
      <div className="container" >
        <h1 className="mt-3">Your Text Summary</h1>
        <p>
          {Text.split(" ").filter((element) => {return element.length!==0}).length} words and {Text.length} characters in this
          input
        </p>
        <p>{Text.length> 0? Text: "enter your text"}</p>
     
      </div>

    </div>
        </>
  );
};

export default TextInput;
