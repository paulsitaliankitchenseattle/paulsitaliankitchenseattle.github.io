(function() {
    "use strict";

    var panels;
    var panelsToggle;
    var firstPanel, middlePanel, lastPanel;

    window.onload = function() {
        panelsToggle = [true, false, false];
        panels = $(".body-panel");
        firstPanel = [3, "19vh", "88%"], middlePanel = [2, "20vh", "85%"], lastPanel = [1, "21vh", "82%"];

        //Fade in top panel
        $("#top-panel").animate({"opacity" : "1"}, 600);
                        // .animate({"margin-top" : "-0.5vh"}, 200   )
                        // .animate({"margin-top" : "0vh"}, 200);
        //Flag stripes drop animation
        $("#red-panel").css({"z-index" : firstPanel[0], "top" : firstPanel[1]}).addClass("active");
        $("#red-panel").delay(300).animate({"left" : "4vw"}, 300);
        $("#red-content").delay(300).animate({"height" : firstPanel[2]}, 400);
        $("#white-panel").css({"z-index" : middlePanel[0], "top" : middlePanel[1]}).addClass("inactive");
        $("#white-panel").delay(200).animate({"left" : "10vw"}, 200);
        $("#white-content").delay(200).animate({"height" : middlePanel[2]}, 300);
        $("#green-panel").css({"z-index" : lastPanel[0], "top" : lastPanel[1]}).addClass("inactive");
        $("#green-panel").animate({"left" : "16vw"});
        $("#green-content").animate({"height" : lastPanel[2]}, 300);
    }

    $(".body-panel").on("click", function() {
        if($(this).hasClass("inactive")) {
            for(var i = 0; i < panelsToggle.length; i++) {
                panelsToggle[i] = false;
            }
            $(".body-panel").removeClass("active")
                            .addClass("inactive");
            $(this).removeClass("inactive")
                    .addClass("active")
                    .css({"z-index" : firstPanel[0]})
                    .animate({"top" : lastPanel[1]}, 80)
                    .animate({"top" : firstPanel[1]}, 100)
                    .find(".body-content").css({"height" : firstPanel[2]});
        }
    });
    $(".body-panel.active").on("click", function() {
        //Do nothing
    });

    $("#red-panel").on("click", function() {
        panelsToggle[0] = true;
        $("#white-panel").css({"z-index" : middlePanel[0], "top" : middlePanel[1]})
                        .find(".body-content").css({"height" : middlePanel[2]});
        $("#green-panel").css({"z-index" : lastPanel[0], "top" : lastPanel[1]})
                        .find(".body-content").css({"height" : lastPanel[2]});
    });
    $("#white-panel").on("click", function() {
        panelsToggle[1] = true;
        $("#red-panel").css({"z-index" : middlePanel[0], "top" : middlePanel[1]})
                        .find(".body-content").css({"height" : middlePanel[2]});
        $("#green-panel").css({"z-index" : middlePanel[0], "top" : middlePanel[1]})
                        .find(".body-content").css({"height" : middlePanel[2]});
    });
    $("#green-panel").on("click", function() {
        panelsToggle[2] = true;
        $("#red-panel").css({"z-index" : lastPanel[0], "top" : lastPanel[1]})
                        .find(".body-content").css({"height" : lastPanel[2]});
        $("#white-panel").css({"z-index" : middlePanel[0], "top" : middlePanel[1]})
                        .find(".body-content").css({"height" : middlePanel[2]});
    });


    $(window).keypress(function(event) {
        if(event.which == 37) {

        }
    });



})();
