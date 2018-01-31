(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("data.json", function(text){
    let data = JSON.parse(text);
    console.log(data);
    /*creatingSummary(data.basics.summary);*/
    creatingdeclaration(data.basics.declaration);
    /*strengths(data.strengths);*/
    creatingworkshops(data.basics.workshops);
    for(i in data.basics.seminar){
    creatingseminar(data.basics.seminar[i]);
  }
    creatingachievements(data.basics.achievements);

    for(i in data.basics.personalinfo){
      creatingpersonalinfo(data.basics.personalinfo[i]);
    }
     for(i in data.basics.education ){
    creatingeducation(data.basics.education[i]);
     }
     for(i in data.basics.skills){
       creatingskills(data.basics.skills[i]);
     }
  });

  var declarationDiv = document.getElementById("declaration");

  function creatingdeclaration(declaration){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = declaration;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    declarationDiv.appendChild(section);
  }
   var personalinfoDiv = document.getElementById("personalinfo");

  function creatingpersonalinfo(personalinfo){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = personalinfo;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    personalinfoDiv.appendChild(section);
  }
  var workshopsDiv = document.getElementById("workshops");

  function creatingworkshops(workshops){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = workshops;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    workshopsDiv.appendChild(section);
  }
  var seminarDiv = document.getElementById("seminar");

  function creatingseminar(seminar){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = seminar;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    seminarDiv.appendChild(section);
  }
  var achievementsDiv = document.getElementById("achievements");

  function creatingachievements(achievements){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = achievements;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    achievementsDiv.appendChild(section);
  }
  var skillsDiv = document.getElementById("skills");

  function creatingskills(skills){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = skills;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    skillsDiv.appendChild(section);
  }

})();
