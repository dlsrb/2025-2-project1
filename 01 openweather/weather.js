url = "https://api.openweathermap.org/data/2.5/find?q=Seoul&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35"

function getweather(){
    // alert("getweather가 수행됨")

    $.ajax({
        
        type: "GET",
        url: weatherurl
    
    }).done(function(response){

        alert("성공했습니다")
        alert(response)
        console.log(response)
    }).fail(function(error){
        alert("실패했습니다")
    });
}

getweather()