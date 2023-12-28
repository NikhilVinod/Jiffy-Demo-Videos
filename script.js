var icons = [
  {
    image: "images/icon-1.svg",
    videoID: "video1",
    video30sec: "858759071?h=f92e0ca4c4",
    video2min: "4xG2aJa6UyY",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "310px", left: "345px" }
  },
  {
    image: "images/icon-2.svg",
    videoID: "video2",
    video30sec: "850067170?h=752496456c",
    video2min: "4xG2aJa6UyY",
    powerpoint: "XF34-Wu6qWU",
    position: { top: "400px", left: "250px" }
  },
  {
    image: "images/icon-3.svg",
    videoID: "video3",
    video30sec: "850067238?h=a73a89e6d2",
    video2min: "4xG2aJa6UyY",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "520px", left: "225px" }
  },
  {
    image: "images/icon-4.svg",
    videoID: "video4",
    video30sec: "850067074?h=d43fbb0da9",
    video2min: "LPJYD6W9om0",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "650px", left: "280px" }
  },
  {
    image: "images/icon-5.svg",
    videoID: "video5",
    video30sec: "850067279?h=d00f2700ee",
    video2min: "4xG2aJa6UyY",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "670px", left: "450px" }
  },
  {
    image: "images/icon-6.svg",
    videoID: "video6",
    video30sec: "858756611?h=2dd738324d",
    video2min: "4xG2aJa6UyY",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "580px", left: "580px" }
  },
  {
    image: "images/icon-7.svg",
    videoID: "video7",
    video30sec: "850066661?h=b1ca78b4b9",
    video2min: "4xG2aJa6UyY",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "395px", left: "605px" }
  },
  {
    image: "images/icon-8.svg",
    videoID: "video8",
    video30sec: "827611815?h=8c08fd3b8b",
    video2min: "827611815?h=8c08fd3b8b",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "300px", left: "605px" }
  },
 
  {
    image: "images/icon-10.svg",
    videoID: "video9",
    video30sec: "803170323?h=b3958fd76d",
    video2min: "803170323?h=b3958fd76d",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "300px", left: "510px" }
  },

  {
    image: "images/icon-11.svg",
    videoID: "video10",
    video30sec: "827614812?h=cd82a70e30",
    video2min: "4xG2aJa6UyY",
    powerpoint: "1GcHO3fngu-eXZid4aKXlNO_90z9AsCdNmjCj3rDKDQM",
    position: { top: "550px", left: "365px" }
  }
];

var iconsContainer = document.getElementById("iconsContainer");
var activeIcon = icons[9];

icons.forEach(function(icon) {
  var iconElement = document.createElement("img");
  iconElement.src = icon.image;
  iconElement.classList.add("icon");
  iconElement.style.top = icon.position.top;
  iconElement.style.left = icon.position.left;
  iconsContainer.appendChild(iconElement);

    // Add click event listener to each icon
  iconElement.addEventListener("click", function() {

      activeIcon = icon;

      document.getElementById("tab1").click(); 

  });

});

  var contentElement = document.getElementById("content");

  contentElement.style.display = "block";
  contentElement.style.position = "absolute";
  contentElement.style.top = "325px";
  contentElement.style.left = "980px";
  contentElement.style.width = "480px";
  contentElement.style.height = "260px";


  var video30secTab = document.getElementById("tab1");
  video30secTab.addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    contentElement.src = "https://player.vimeo.com/video/" + activeIcon.video30sec;
    hideBars();
    showBar("bar_30sec");
  });

  document.getElementById("tab1").click(); 


  var video2minTab = document.getElementById("tab2");
  video2minTab.addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    contentElement.src = "https://player.vimeo.com/video/" + activeIcon.video2min;
    hideBars();
    showBar("bar_2min");
  });


  
  var powerpointTab = document.getElementById("tab3");
  powerpointTab.addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    contentElement.src = "https://docs.google.com/presentation/d/" + activeIcon.powerpoint + "/present?slide=id.p";
    hideBars();
    showBar("bar_powerpoint"); // Show only the PowerPoint demo bar
  });

  

  function showBar(barId) {
    document.getElementById(barId).style.display = "inline-block";
  }

  function hideBars() {
    document.getElementById("bar_30sec").style.display = "none";
    document.getElementById("bar_2min").style.display = "none";
    document.getElementById("bar_powerpoint").style.display = "none";
  }
