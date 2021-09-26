

codes = []
obj = [];
fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    .then(function (data) {
        return data.json()
    })
    .then(function (data) {
        data.forEach(element => {
            //if (element.capital != "") {
                var div1 = document.createElement("div");
                div1.setAttribute("class", "col-lg-12 card mb-5");
                div1.style.width = "18rem";
                var ele = element.capital + "," + element.alpha2Code;
                //console.log(ele)
                div1.innerHTML =
                    '<img src = "https://restcountries.com/data/' + element.flag.substr(element.flag.length - 7) + '" class="card-img-top">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + element.name + '</h5>' +
                    '<p class="card-text">Capital : ' + element.capital + '</p>' +
                    '<p class="card-text">Region : ' + element.region + '</p>' +
                    '<button type="button" id="' + element.capital + "," + element.alpha2Code + '" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Get Weather Report</button>' +
                    '</div>';
                if(element.capital!="")
                {document.getElementById("r").appendChild(div1);
                codes.push(ele);
                }
            //}
            //console.log(s, document.getElementById(s))
            //c+=1
            //btn = document.getElementById(s);
            //btn.onclick=getWea(s);

        });
        console.log(codes)
        getjson(codes);
    })
    .catch(function (err) {
        console.log(err)
    })




function getWea(cap) {
    var api2 = "https://api.openweathermap.org/data/2.5/weather?q=" + cap + "&appid=956a4fbaf0f962bb156bf2dc188038bd";
    fetch(api2)
        .then(function (data1) {
            return data1.json()
        })
        .then(function (data2) {
            var o1 = new Object();
            o1.id = cap
            o1.temp = data2.main.temp;
            o1.press = data2.main.pressure;
            o1.desc = data2.weather[0].description;
            obj.push(o1);
            if (obj.length == 237) {
                //console.log(codes)
                codes.forEach(ele => {
                    var FOUND = obj.find(function (post, index) {
                        if (post.id == ele)
                            return true;
                    });
                    //console.log(FOUND);
                    if (FOUND != undefined) {
                        div1 = document.createElement("div");
                        div1.setAttribute("id", ele + "1");                       
                        div1.innerText = ele+"\n"+"Temperature:  "+FOUND.temp+"\n"+"Pressure:  "+FOUND.press+"\n"+"Description:  "+FOUND.desc;
                        div1.style.display = "none";
                        document.getElementById("idbtn").appendChild(div1);
                        
                        func_btn(ele, function (btn) {    
                                                    
                            btn.setAttribute("onclick", "set(this,function(d){console.log(d);d.style.display='block';})");
                            
                                   
                        })                                                                    //////loophole1

                    }
                })
            }
        })
        .catch(function (err1) {
            console.log(err1)
        })
}
function set(elem, func) {
    d = document.getElementById(elem.id + "1");
    x=document.getElementById("idbtn").childNodes;
    for(var i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }
    func(d)
}
function func_btn(ele, func) {
    //console.log(ele)
    btn = document.getElementById(ele);
    func(btn)
}
function getjson(codes) {
    codes.forEach(element => {
        getWea(element);
    });
}
