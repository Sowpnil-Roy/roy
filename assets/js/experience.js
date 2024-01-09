AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Projects",
    cardImage: "assets/images/experience-page/software.jpg",
    place: "AUST",
    time: "(May, 2022 - present)",
    desp: "<li>This is our university project.</li> <li>I create a Blood Bank management project.</li> <li>Here I used HTML, CSS, PHP, MySQL, JavaScript, etc.</li>",
  },
  {
    title: "Android Studio Project",
    cardImage: "assets/images/experience-page/android.png",
    place: "AUST,Dhaka",
    time: "(Dec, 2019 - Present)",
    desp:"<li>I learn Adndroid studio in 2019, Then I develop my simple application</li><li>I develop my First Gaming Application in Kotlin language</li><li>Now I word as a Part time app Developer</li>",
  },

  {
    title: "Graphic Design",
    cardImage: "assets/images/experience-page/graphic_design.jpeg",
    place: "Rangpur,Bangladesh",
    time: "(Dec, 2019 - Present)",
    desp:"<li>I learn Graphic Design from (LEDP=Learning and Earning Development Project)</li><li>I learn Adobe Photoshop, Adobe Illustrator , Adobe XD,</li><li>Sometimes I also edit videos in Wondershare FilmoraGo</li>",
  },


  {
    title: "UI/UX Designer",
    cardImage: "assets/images/experience-page/uiux.jpg",
    place: "Rangpur,Dhaka,Bangladesh",
    time: "(Mar 2019 - present)",
    desp: "<li>I learn UI/UX design in University Life</li> <li>I also design for a company </li>",
  },

  {
    title: "Cyber Security",
    cardImage: "assets/images/experience-page/cyber.png",
    place: "Dhaka,Bangladesh",
    time: "(Mar 2020 - present)",
    desp: "<li>I lean Cyber Security in many of courses like Udemy,Coursera,Cisco Network Academy </li>",
  },



];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Python",
    cardImage: "assets/images/experience-page/python.jpg",
    description:
      "In 2022 I learn Python form Cisco Network Academy. Here I got First Price form Grameenphone ",
  },
  {
    title: "Internet of Things (IoT)",
    cardImage: "assets/images/experience-page/iot.png",
    description:
      "IOT course is verry interesting, Because I learn from Cisco Network Academy",
  },
  {
    title: "Hacking",
    cardImage: "assets/images/experience-page/haking.jpg",
    description:
      "Hacking is big part of my life. Because I work a team in 2019-2021 . Here I learn meany Things",
  },
  {
    title: "Codeforces",
    cardImage: "assets/images/experience-page/codeforces.jpg",
    description:
      "Somwtime I work codeforces to problem solve",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

