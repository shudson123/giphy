
var topics = ["Led Zeppelin","Soundgarden","AC/DC", "Pink Floyd", "Rolling Stones", "The Beatles", "The Who"]

        $(document).ready(function startPage(){
            for (var i = 0; i < topics.length; i++){
            $('#buttonsArea').append("<button>"+topics[i]+"</button>");
            }
            $('button').on('click', function buttonClick(){
                var a = $(this).text();
                console.log(a);

                for (var j = 0; j < topics.length; j++){
                    if (j = this){

                    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+a+"&api_key=img1FFFEQyVw7nHMQc06dPhIMeOSI977&limit=10";
                    $.ajax({url:queryURL, method:'GET'})
                        .done(function(response){
                        console.log(response);
                        
                            for (var k = 0; k < response.data.length; k++){
                                var bandDiv = $('<div>');
                                var p = $('<p>').text("Rating: "+ response.data[k].rating);
                                var image = $('<img>');
                                var still = response.data[k].images.fixed_height_still.url;
                                var animated = response.data[k].images.fixed_height.url;
                                image.attr('src', response.data[k].images.fixed_height.url);
                                image.attr('src',still);
                                image.attr('data-still', still)
                                image.attr('data-animated', animated);
                                image.attr('data-state','still');
                                bandDiv.append(p);
                                bandDiv.append(image);
                                $("#searches").prepend(bandDiv);


                                $(image).on('click', function(){
                                    var state = $(this).attr("data-state");
                                    
                                    if (state === "still"){
                                        $(this).attr("src", $(this).attr("data-animated"));
                                        $(this).attr("data-state", "animate");
                                    } else{
                                        $(this).attr("src", $(this).attr("data-still"));
                                        $(this).attr("data-state", "still");
                                    }
                                })

                            }
                        })
                        
                    }
                    else{
                        var b = $('button').val();
                        console.log("Hey");
                    }
                }  
            })
            console.log("loading");
        })

        $('#submit').on('click', function(){
            console.log("Button clicked");
            var t = $('#field').val();
                
                if (t == ""){
                    alert("Add a band name");
                }
                else{
                    topics.push(t);
                    console.log(topics);
                    $('#buttonsArea').empty();
                        for (var i = 0; i < topics.length; i++){
                        $('#buttonsArea').append(' <button id ='+[i]+'>'+topics[i]+'</button>');
                }
            }

            $('button').on('click', function buttonClick(){
                var a = $(this).text();
                console.log(a);

                for (var j = 0; j < topics.length; j++){
                    if (j = this){

                    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+a+"&api_key=img1FFFEQyVw7nHMQc06dPhIMeOSI977&limit=10";
                    $.ajax({url:queryURL, method:'GET'})
                        .done(function(response){
                        console.log(response);
                        
                            for (var k = 0; k < response.data.length; k++){
                                var bandDiv = $('<div>');
                                var p = $('<p>').text("Rating: "+ response.data[k].rating);
                                var image = $('<img>');
                                var still = response.data[k].images.fixed_height_still.url;
                                var animated = response.data[k].images.fixed_height.url;
                                image.attr('src', response.data[k].images.fixed_height.url);
                                image.attr('src',still);
                                image.attr('data-still', still)
                                image.attr('data-animated', animated);
                                image.attr('data-state','still');
                                bandDiv.append(p);
                                bandDiv.append(image);
                                $("#searches").prepend(bandDiv)


                                $(image).on('click', function(){
                                    
                                    var state = $(this).attr("data-state");
                                    
                                    if (state === "still"){
                                        $(this).attr("src", $(this).attr("data-animated"));
                                        $(this).attr("data-state", "animate");
                                    } else{
                                        $(this).attr("src", $(this).attr("data-still"));
                                        $(this).attr("data-state", "still");
                                    }
                                })

                            }
                        })
                    }
                    else{
                        var b = $('button').val();
                        console.log("Hey");
                    }
                }  
            })
        })

        
        