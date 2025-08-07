import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className="accordion-item p-4"
        style={{
          backgroundColor: props.mode === "dark" ? "#646464ff" : "#e0e0e0ff",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="accordion-header ">About TextUtils</h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            <strong>TextUtils</strong> is a powerful, easy-to-use text
            manipulation tool built using React.js. It is designed to help users
            analyze, transform, and improve their text efficiently and quickly.
            Whether you're a student preparing assignments, a writer working on
            drafts, or a developer testing inputs, this tool simplifies your
            daily text-related tasks.
            <h2 className="accordion-header ">Key Features:</h2>
            <h6>Convert to Uppercase / Lowercase</h6>
            Easily switch your text between UPPERCASE and lowercase to match
            formatting needs.
            <h6> Clear Text in One Click</h6>
            Instantly remove all content from the input box to start fresh.
            <h6> 🌐 Translate to Hindi</h6>
            Translate English sentences into Hindi with one tap - perfect for
            bilingual users or regional content creators.
            <h6>Reading Time Estimator</h6>
            Get an approximate reading time based on the entered content, useful
            for blog writers and content creators.
            <h6>Dark/Light Mode Toggle</h6>
            Switch between light and dark themes for a comfortable reading and
            writing experience, day or night.
            <h6> 📌 Why Use TextUtils?</h6>✅ User-friendly Interface ✅ Fast,
            real-time updates ✅ No external dependencies - works offline after
            loading ✅ Mobile-responsive and clean design
            <h6> Built With:</h6>React.js Bootstrap JavaScript
          </div>
        </div>
      </div>
    </>
  );
}
