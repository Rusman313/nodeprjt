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
        $.each(data.weather, function(index,val){
          wf += "<p><b>" + data.name + data.main.temp + "&deg;F " + "| " + val.main + ", " + val.description

        });
        $("#showWeatherForecast").html(wf);
        var tz =  data.timezone
        console.log(tz)
              }
        
            });
          });
        })
       