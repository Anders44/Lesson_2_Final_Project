
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            let results = JSON.parse(this.responseText);
            for(var i = 0; i < results.length; i++){
                console.log(results[i].name);
                
                var ul = document.getElementById("repos");
                var li = document.createElement("Li");
                var a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name));
                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                ul.appendChild(a);

            }
        }
    }

xhttp.open("GET", "https://api.github.com/users/Anders44/repos", true);
xhttp.send();

$(document).ready(function(){    
    $(".zoom").hover(function(){
        $(".zoom").css({"font-size": "200%"});
    }, function(){
        $(".zoom").css({"font-size": "100%"});
    });
});

$(document).ready(function(){    
    $(".smaller").hover(function(){
        $(".smaller").css({"font-size": "150%"});
    }, function(){
        $(".smaller").css({"font-size": "100%"});
    });
});
