var icons = [
  {
    image: "images/icon1.png",
    videoID: "video1",
    videoURL: "m99lkzqB-E0",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "m99lkzqB-E0",
    bars: [
      { id: "bar_30sec_1", active: true },
      { id: "bar_2min_1", active: false },
      { id: "bar_powerpoint_1", active: false }
    ],
    position: { top: "310px", left: "345px" }
  },
  {
    image: "images/icon2.png",
    videoID: "video2",
    videoURL: "q8NLtdyxyJM",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "q8NLtdyxyJM",
    bars: [
      { id: "bar_30sec_2", active: true },
      { id: "bar_2min_2", active: false },
      { id: "bar_powerpoint_2", active: false }
    ],
    position: { top: "380px", left: "260px" }
  },
  {
    image: "images/icon3.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_3", active: true },
      { id: "bar_2min_3", active: false },
      { id: "bar_powerpoint_3", active: false }
    ],
    position: { top: "480px", left: "225px" }
  },
  {
    image: "images/icon4.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_4", active: true },
      { id: "bar_2min_4", active: false },
      { id: "bar_powerpoint_4", active: false }
    ],
    position: { top: "600px", left: "260px" }
  },
  {
    image: "images/icon5.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_5", active: true },
      { id: "bar_2min_5", active: false },
      { id: "bar_powerpoint_5", active: false }
    ],
    position: { top: "670px", left: "345px" }
  },
  {
    image: "images/icon6.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_6", active: true },
      { id: "bar_2min_6", active: false },
      { id: "bar_powerpoint_6", active: false }
    ],
    position: { top: "670px", left: "470px" }
  },
  {
    image: "images/icon7.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_7", active: true },
      { id: "bar_2min_7", active: false },
      { id: "bar_powerpoint_7", active: false }
    ],
    position: { top: "580px", left: "580px" }
  },
  {
    image: "images/icon8.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_8", active: true },
      { id: "bar_2min_8", active: false },
      { id: "bar_powerpoint_8", active: false }
    ],
    position: { top: "405px", left: "605px" }
  },
  {
    image: "images/icon9.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_9", active: true },
      { id: "bar_2min_9", active: false },
      { id: "bar_powerpoint_9", active: false }
    ],
    position: { top: "300px", left: "605px" }
  },
  {
    image: "images/icon9.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_10", active: true },
      { id: "bar_2min_10", active: false },
      { id: "bar_powerpoint_10", active: false }
    ],
    position: { top: "300px", left: "500px" }
  },

  {
    image: "images/icon11.png",
    videoID: "video2",
    videoURL: "GpntFE3M3Pw",
    trigger2min: "4xG2aJa6UyY",
    triggerPowerpoint: "XF34-Wu6qWU",
    trigger30sec: "GpntFE3M3Pw",
    bars: [
      { id: "bar_30sec_11", active: true },
      { id: "bar_2min_11", active: false },
      { id: "bar_powerpoint_11", active: false }
    ],
    position: { top: "550px", left: "365px" }
  }
  // Add more icon objects with unique properties here
];


var iconsContainer = document.getElementById("iconsContainer");
var activeVideo = null;

icons.forEach(function(icon) {
  var iconElement = document.createElement("img");
  iconElement.src = icon.image;
  iconElement.classList.add("icon");
  iconElement.style.top = icon.position.top;
  iconElement.style.left = icon.position.left;
  iconsContainer.appendChild(iconElement);

  var trigger30secElement = document.getElementById("trigger1");
  trigger30secElement.addEventListener("click", function() {
    var videoElement = document.getElementById(icon.videoID);
    videoElement.src = "https://www.youtube.com/embed/" + icon.trigger30sec;
    hideBars(icon);
    showBar(icon.bars[0].id)
  });

  var trigger2minElement = document.getElementById("trigger2");
  trigger2minElement.addEventListener("click", function() {
    var videoElement = document.getElementById(icon.videoID);
    videoElement.src = "https://www.youtube.com/embed/" + icon.trigger2min;
    hideBars(icon); // Hide all the bars before showing the 2-minute demo bar
    showBar(icon.bars[1].id); // Show only the 2-minute demo bar
  
    // Update the link for the 2-minute bar
    var bar2minElement = document.getElementById(icon.bars[1].id);
    var bar2minLink = bar2minElement.getElementsByTagName("a")[0];
    bar2minLink.href = "https://www.youtube.com/watch?v=" + icon.trigger2min;
    bar2minLink.innerHTML = "2-minute demo"; // Update the text content of the bar
  });
  
  var triggerPowerpointElement = document.getElementById("trigger3");
  triggerPowerpointElement.addEventListener("click", function() {
    var videoElement = document.getElementById(icon.videoID);
    videoElement.src = "https://www.youtube.com/embed/" + icon.triggerPowerpoint;
    hideBars(icon);
    showBar(icon.bars[2].id); // Show only the PowerPoint demo bar
  });

  // Add click event listener to each icon
  iconElement.addEventListener("click", function() {
    var videoID = icon.videoID;
    var videoURL = icon.videoURL;
    var trigger30sec = icon.trigger30sec;
    var trigger2min = icon.trigger2min;
    var triggerPowerpoint = icon.triggerPowerpoint;

    // Hide the previously played video
    if (activeVideo !== null) {
      activeVideo.style.display = "none";
    }

    // Update the video source and display the video
    var videoElement = document.getElementById(videoID);
    videoElement.src = "https://www.youtube.com/embed/" + videoURL;
    videoElement.style.display = "block";
    videoElement.style.position = "absolute";
    videoElement.style.top = "325px";
    videoElement.style.left = "980px";
    videoElement.style.width = "480px";
    videoElement.style.height = "260px";

// Update the trigger URLs and display the bars
var bar30SecElement = document.getElementById(icon.bars[0].id);
var bar2minElement = document.getElementById(icon.bars[1].id);
var barPowerpointElement = document.getElementById(icon.bars[2].id);
bar30SecElement.href = "https://www.youtube.com/watch?v=" + icon.trigger30sec;
bar30SecElement.innerHTML = "";
bar2minElement.href = "https://www.youtube.com/watch?v=" + icon.trigger2min;
bar2minElement.innerHTML = "";
barPowerpointElement.href = "https://www.youtube.com/watch?v=" + icon.triggerPowerpoint;
barPowerpointElement.innerHTML = "";
bar30SecElement.style.display = "inline-block";
bar2minElement.style.display = "inline-block";
barPowerpointElement.style.display = "inline-block";


  hideBars(icon);
  showBar(icon.bars[0].id);



    // Set the currently active video
    activeVideo = videoElement;
  });

  function showBar(barId) {
    var barElement = document.getElementById(barId);
    barElement.style.display = "inline-block";
  }

  function hideBars(icon) {
    var bars = icon.bars;
    bars.forEach(function(bar) {
      var barElement = document.getElementById(bar.id);
      barElement.style.display = "none";
    });
  }
  
});