$(document).ready(function(){

    console.log("doc is ready");


    // let bearFacts = ["fact 1", "fact 2", "fact3", "fact4"]; 

    let bearFacts = ['grizz bears more aggressive', 'bears can climb faster than they can run!'];

    console.log(bearFacts);


    let bearFactObject = {
        "fact": "bears whatever"
    }

    //TODO: add bear facts to dom from array 
    // $('#bearFactList').append('<li class="list-group-item">new hardcoded fact</li>');

    //bear fact 1 ==> bearFacts[0]

    // $('#bearFactList').append('<li class="list-group-item">'+bearFacts[0]+'</li>');

    // for(index = 0; index < bearFacts.length; index++)
    //     {
    //         console.log(index);

    //         $('#bearFactList').append('<li class="list-group-item">'+bearFacts[index]+'</li>');
    //     }

    // bearFacts.forEach(function(item,index){
        
    //     $('#bearFactList').append('<li class="list-group-item">'+item+', by Dwight</li>');
    // }); 

    let $bearFact;
    bearFacts.forEach(function(item,index){
        
        // $('#bearFactList').append(`<li id="bearFactNumber${index}" class="list-group-item">${item}, by Dwight</li>`);

        $bearFact = item; 
        $li = $(li); 

        $('#bearFactList')
                .append($li)
                .attr("id","bearFactNumber${index}")
                .addClass("list-group-item")
                .text(`${item}, by Dwight`);

          


        
    }); 

});