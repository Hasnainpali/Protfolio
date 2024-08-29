import React, { useEffect, useRef } from "react";

function HeroSection() {
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      let typeSpeed = 100;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 300;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  const txtElementRef = useRef(null);

  useEffect(() => {
    const txtElement = txtElementRef.current;
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement, words, wait);
  }, []);

  return (
    <div className="d-sm-flex align-items-center h-100 p-5 row" id="Home">
      <div className="col-md-6 col-sm-12 mb-4 mb-sm-0">
        <span className="text-uppercase" style={{ color: "#ffbd39" }}>
          Hello!
        </span>
        <h1 className="display-5 my-3 font-weight-bold text-dark">
          I'm{" "}
          <span
            ref={txtElementRef}
            className="txt-type"
            data-wait="3000"
            data-words='["Hasnain Iqbal"]'
            style={{ color: "#ffbd39" }}
          ></span>{" "}
        </h1>
        <h2 className="mb-4">
          {" "}
          <span style={{ color: "#000" }}>As a Front-End Developer</span>
        </h2>
        <div className="d-flex justify-content-center align-items-center justify-content-md-start" style={{gap:"10px"}}>
          <a
            href="/download/HasnainCV.pdf"
            className="btn py-2 px-2 py-md-3 px-md-3"
            download="resume"
            target="_blank"
            style={{ backgroundColor: "#ffbd39", borderRadius: "30px" }}
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="btn py-2 px-2 py-md-3 px-md-3"
            style={{
              backgroundColor: "transparent",
              borderRadius: "30px",
              color: "#000",
              border: "1px solid #000",
            }}
          >
            Hire me
          </a>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 d-flex justify-content-center my-4 my-md-0">
        <img
          className="profile-img"
          src="/assets/images/image.png"
          alt="profile-Picture"
        />
      </div>
    </div>
  );
}

export default HeroSection;
