console.log("test");
$(document).ready( function(){
  $("#getWeather").click(function(){
    var zip = $("#zip").val();
    var key = "98714695d6d6eca2461e95c2aa78b140";    
    $.ajax({
      url:"https://api.openweathermap.org/data/2.5/weather",
      dataType:"json",
      type:"GET",
      data: {zip: zip, appid: key, units: 'imperial'},
      success: function(data){
        var wf = "";
        var icon = data.weather[icon];
        console.log(icon);
        $.each(data.weather, function(index,val){
          wf += "<p><b>" + data.name + "</b><img scr=http://openweathermap.org/img/wn/" + val.icon + "@2x.png></p>" + data.main.temp + "&deg;F " + "| " + val.main + ", " + val.description
        });
        $("#showWeatherForecast").html(wf);
        var tz =  data.timezone// gets the time zone from the zip code
        console.log(tz)// makes sure it works        
        let time = moment().unix();
        let ziptime = time + (tz - (-14400));// taking the current time + adding in the time zone from the zip code
        let offset = moment.unix(ziptime).format('LT');// takes the time and formats the time to a readable time
        console.log(offset);
        let tzone = ""
        if (tz == -14400)//if statment to cycle through the different time zones
        { tzone = "EDT";                
        } else if ( tz == -18000) 
        { tzone = "CDT";                  
        } else if (tz == -21600) 
        { tzone = "MDT"                 
        } else if(tz == -25200)
        { tzone = "PDT"                 
        } else if(tz == -28800)
        { tzone = "AKDT"                 
        } else if ( tz == -36000) 
        { tzone = "HST" 
        }
        console.log(tzone);
        var tztime = offset + " " + tzone// adds the time and time zone together
        $("#time").html(tztime)// puts it in to the html
        $("#zip").val("");// clears input field
              }        
            });
          });
        })
       