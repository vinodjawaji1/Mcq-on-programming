import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);
function Header() {
  return <header>Mcq Question Based On Programming Language</header>;
}

function Content() {
  function getResult(event) {
    let marks = 0;
    let a = event.target.q1.value;
    let b = event.target.q2.value;
    let c = event.target.q3.value;
    let d = event.target.q4.value;
    let e = event.target.q5.value;
    let f = event.target.q6.value;
    let g = event.target.q7.value;
    let h = event.target.q8.value;
    let i = event.target.q9.value;
    let j = event.target.q10.value;

    if (a === "B. James Gosling") {
      marks++;
    }
    if (b === "D. Java is a platform-independent programming language") {
      marks++;
    }
    if (c === "C. Compilation") {
      marks++;
    }
    if (d === "A. Bytecode is executed by JVM") {
      marks++;
    }
    if (e === "D. All of the above") {
      marks++;
    }
    if (f === "B. Cascading Style Sheets") {
      marks++;
    }
    if (g === "C. Layout of the webpage") {
      marks++;
    }
    if (h === "B. Object-Based") {
      marks++;
    }
    if (i === "D. All of the above") {
      marks++;
    }
    if (j === "D. @PostMapping") {
      marks++;
    }
    alert("Marks: " + marks);
  }

  return (
    <form onSubmit={getResult}>
      <div>
        <Question
          q1="1.Who invented Java Programming?"
          op1="A. Guido van Rossum"
          op2="B. James Gosling"
          op3="C. Dennis Ritchie"
          op4="D. Bjarne Stroustrup"
          name="q1"
        />
        <Question
          q1="2.Which statement is true about Java?"
          op1="A. Java is a sequence-dependent programming language"
          op2="B. Java is a code dependent programming language"
          op3="C. Java is a platform-dependent programming language"
          op4="D. Java is a platform-independent programming language"
          name="q2"
        />
        <Question
          q1="3.Which of the following is not an OOPS concept in Java?"
          op1="A. Polymorphism"
          op2="B. Inheritance"
          op3="C. Compilation"
          op4="D. Encapsulation"
          name="q3"
        />
        <Question
          q1="4.Which of the following option leads to the portability and security of Java?"
          op1="A. Bytecode is executed by JVM"
          op2="B. The applet makes the Java code secure and portable"
          op3="C. Use of exception handling"
          op4="D. Dynamic binding between objects"
          name="q4"
        />
        <Question
          q1="5.What is the use of final keyword in Java?"
          op1="A. When a class is made final, a subclass of it can not be created."
          op2="B. When a method is final, it can not be overridden."
          op3="C. When a variable is final, it can be assigned value only once."
          op4="D. All of the above"
          name="q5"
        />
        <Question
          q1="6.What is the full form of CSS?"
          op1="A. Casecading Styles Sheet"
          op2="B. Cascading Style Sheets"
          op3="C. Use of exception handling"
          op4="D. None of the Above"
          name="q6"
        />
        <Question
          q1="7.CSS describes the_____"
          op1="A. Structure of a webpage"
          op2="B. Skeleton of a webpage"
          op3="C. Layout of the webpage"
          op4="D. None"
          name="q7"
        />
        <Question
          q1="8.Which type of JavaScript language is ___"
          op1="A. Object-Oriented"
          op2="B. Object-Based"
          op3="C. Assembly-language"
          op4="D. High-level"
          name="q8"
        />
        <Question
          q1="9.Spring Boot is used for developing?"
          op1="A. Web applications"
          op2="B. Distributed applications (Restful web services)"
          op3="C. Microservices"
          op4="D. All of the above"
          name="q9"
        />
        <Question
          q1="10.Which Spring annotation is used to handle HTTP POST requests?"
          op1="A. @GetMapping"
          op2="B. @PutMapping"
          op3="C. @CreateMapping"
          op4="D. @PostMapping"
          name="q10"
        />
      </div>
      <br></br>
      <br></br>
      <button style={{ color: "white", backgroundColor: "red" }}>
        Submit Quiz
      </button>
    </form>
  );
}

function Question(props) {
  return (
    <div className="q1">
      <h1>{props.q1}</h1>
      <label>
        <input type="radio" name={props.name} value={props.op1}></input>
        {props.op1}
      </label>

      <label>
        <input type="radio" name={props.name} value={props.op2}></input>
        {props.op2}
      </label>
      <label>
        <input type="radio" name={props.name} value={props.op3}></input>
        {props.op3}
      </label>
      <label>
        <input type="radio" name={props.name} value={props.op4}></input>
        {props.op4}
      </label>
    </div>
  );
}

function Footer() {
  return <footer>Best of luck</footer>;
}
