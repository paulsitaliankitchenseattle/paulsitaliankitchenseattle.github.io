(function() {
    $(".menu-category").on("click", function() {
        if($(this).hasClass("active-cat")) {
            $(this).removeClass("active-cat");
            $(this).find(".category-listings").animate({"height" : "0vh"}, 200)
                                                .animate({"opacity" : "0"}, 100);
        } else {
            $(".menu-category.active-cat").find(".category-listings")
                                            .animate({"height" : "0vh"}, 200)
                                            .animate({"opacity" : "0"}, 100);
            $(".menu-category.active-cat").removeClass("active-cat");

            $(this).addClass("active-cat");
            $(this).find(".category-listings").animate({"opacity" : "1"}, 100);
            $(this).find(".category-listings").animate({"height" : "50vh"}, 200);
        }
    });
})();
