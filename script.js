const review = [
    {
        id:  1,
        name: "Shelton Russel",
        job: "Full Stack Developer",
        image: "./image/𝒊𝑷𝒉𝒐𝒏𝒆 15..jpeg",
        about: "Premier Web Design Solutions, LLC has been a valuable web development asset to the NCDOT-BOWD. They are extremely professional to work with, and their work displays their creative abilities and great attention to detail. They have exceeded my expectations when comes to their timely completion and delivery of web projects. I highly recommend Premier Web Design Solutions as a company for your web solutions and would be happy to work with them on future web project needs.",
    },
      {
        id: 2,
        name: "Puskar Adhikari",
        job: "FrontEnd Developer",
        image: "./image/S23 ultra .jpeg",
        about: "Monk tech did a great job developing our website. Whether providing direct development support or giving us the opportunity to make our development updates, Monk Tech expertise and support services were top notch! It didn't take long to stand up our website, and we were pleased with the design and layout of the graphics and information. We look forward to engaging with Toinette again, especially as we look to build out our site services.",
    },
      {
        id: 3,
        name: "Weller R. Thomas",
        job: "CEO",
        image: "./image/S24 128gb.jpeg",
        about: "I have been fortunate to use the services of Premier Web Design Solutions for the past four years. In this ever changing world of technology, Premier Web Design Solutions has provided quality and timely service to my company. Premier has not only provided great service but provided consultation on best practices for my media company.  Pathfinders uses Premier to maintain our website, advertisement banners and update video content and digitizing our print publication.",
    },
      {
        id: 4,
        name: "Kimberly Morgan",
        job: "UI/UX Designer",
        image: "./image/𝒊𝑷𝒉𝒐𝒏𝒆 11 .jpeg",
        about: "I can’t say enough about how knowledgeable Toinette Rorie is in the area of Web Development. She indeed is a developer and can build a site from scratch. She understands functionality and is great at constructing a site that is robust and fully functioning. She listens to her clients and delivers an outstanding product in a timely fashion that surpasses your initial desires. My company website, doallthingswithjoy.com, was wholly designed and developed by her, and I couldn’t be happier with its design and function.",
    },
      {
        id: 5,
        name: "Ishika Allen",
        job: "Node JS Developer",
        image: "./image/S22 ultra .jpeg",
        about: "I just wanted to thank you for the excellent job you have done on our website. I am very pleased with the final product. I had the opportunity to work with a large national website design company, but I’m so glad I selected Premier Web Design Solutions instead. You made it a pleasure to work with you from the initial conversation of the concept of my website, through content development and page layout to the final roll out of the site. The part I enjoyed best was your professionalism and your ability to get things turned around in a timely fashion. I have been pleased to continue to use your services to monitor and tweak my website to make it indeed a valuable asset for my business.",
    }
]

let items = 0

const img = document.getElementById('client-img');
const identity = document.getElementById('client-name');
const job = document.getElementById('client-job');
const info = document.getElementById('client-info');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const supriseBtn = document.getElementById('supriseBtn');


leftBtn.addEventListener("click", function () {
    items--;
    if (items < 0){
        items = review.length - 1;
    }
    updateDisplay(items);
} )

rightBtn.addEventListener("click", function () {
    items++;
    if (items > review.length - 1){
        items = 0;
    }
    updateDisplay(items);
} )

supriseBtn.addEventListener("click", function () {
    items = Math.floor(Math.random() * 5)

    updateDisplay();
} )


window.addEventListener("DOMContentLoaded", function () {
  updateDisplay();
});


function updateDisplay() {
    const contain = review[items];
    img.src = contain.image;
    identity.textContent = contain.name;
    job.textContent = contain.job;
    info.textContent = contain.about;
    
}

