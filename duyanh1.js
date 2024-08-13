$("body").css({
  'background-image': "none"
});
$(".pabg").hide();
$(".right1").hide();

function timeout(time,orgip) {
  setTimeout(function () {
    if (time != 0) {
      minute = Math.floor(time/60)
      second = time%60

    $(".showip").html(orgip+`Time remaining: ${minute < 10 ? "0"+minute : minute}:${second < 10 ? "0"+second : second}s`)  
      timeout(time-1,orgip)
    } else {document.write("Chào em, Hết Giờ Chơi Rồi<br>Load Lại Menu Để Dùng Tiếp!")}

  }, 1000)
}

function t(pass,ip) {
  pts = setTimeout(function () {
    fetch('https://ff.tmhhd.cf/ping/' + pass+ "?ip=" + ip )
    .then(response => response.json())
    .then(response => {
      if (response.status == 'ok') {
        if (response.sp == "1") {alert("Bán Hack À Ku?\nTắt Live Đi Và Đừng Nghĩ Tới Việc Bán Được Hack Này!")}
        t(pass,ip);
      } else {
        document.write("Hello em!<br>Key em đã hết hạn rồi, Liên hệ người mua để lấy key mới!");
      }
    })
    .catch(error => {
      alert("Cannot ping to server!\nYou have 2 minutes left to use!")
      timeout(120,$(".showip").html())
      clearTimeout(pts)
    });
  }, 3500);
}
function cp() {
  pass = ($('#pass').val()).replaceAll(" ","");
  $(".loading").hide().fadeIn("fast");

  fetch("https://ipv4.jsonip.com")
  .then(response => response.json())
  .then(response => {

    cip = response.ip;

    fetch('https://ff.tmhhd.cf/pass/' + pass + "?file=duyanh1" + ("&ip=" + response.ip))
    .then(response => response.json())
    .then(response => {
      if (response.status == 'ok') {
        $(".pch").hide();
        $(".pabg").show();
        $(".right1").show();

        if (response.sp == "1") {alert("Bán Hack À Ku?\nTắt Live Đi Và Đừng Nghĩ Tới Việc Bán Được Hack Này!")}

        if (localStorage.getItem("credit") != '1') {
          alert("Thanks for using login form.\nBy h3l2f\nhttps://h3l2f.site/");
          localStorage.setItem("credit", '1');
        }
        var scriptsrc = document.createElement("script");
        scriptsrc.src = "https://duyhoanggn2.github.io/stringdecode/js/fuck_buy.js";
        document.body.appendChild(scriptsrc);
        document.body.removeChild(scriptsrc);
        $("#used-pass").html("Pass: " + pass + "<br>IP: " + cip);
        $(".showip").html(`<h2>IP: ${cip}</h2>`)
        t(pass,cip);
      } else {
        alert(response.msg+"\nVui lòng liên hệ người mua để lấy pass mới!");
      }
      $('.loading').fadeOut("fast");
    })

    .catch(error => {
      $('.loading').fadeOut("fast");
      return alert("Cannot fetch to server! Try again!");
    });

  })
  .catch(error => {
    alert("Cannot fetch to ip server! Try again!");
    $(".loading").fadeOut("fast");
  });
}
