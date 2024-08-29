import React from "react";

function About() {
  return (
    <div>
      <h1 class="text-dark text-center pt-5" id="about">
        About Me
      </h1>
      <div class="about pt-5 ">
        <div class="about-text col-md-6 col-sm-12 ">
          <p class="pb-5">
            Hello, I'm Hasnain! 👋 I am a dedicated web developer with 01 year
            of hands-on experience, and my journey in this field continues to
            grow. My expertise lies in HTML, CSS, JavaScript, Tailwind CSS, and
            React. I am driven by a passion for creating compelling and
            functional websites.
          </p>
          {/* <!-- <div class="btn-download">
          <a href="/download/HasnainCV.pdf"
            class="btn py-3 px-3"
            download="resume"
            target="_blank"
            style="background-color: #ffbd39; border-radius: 30px;"
          >
            Download CV
          </a>
        </div> --> */}
        </div>
        <div class="about-img">
          <img
            src="/assets/images/image.png"
            alt=""
            
          />
        </div>
      </div>
    </div>
  );
}

export default About;
