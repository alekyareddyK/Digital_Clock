function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mon = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hour >= 12){
          pe = "PM";
        }
        if(hour == 0){
          hour = 12;
        }
        if(hour > 12){
          hour = hour - 12;
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mon], dnum.pad(2), yr, hour.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }