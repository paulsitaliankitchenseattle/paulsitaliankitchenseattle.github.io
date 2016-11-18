(function() {
    var cats = [].slice.call(document.getElementsByClassName("menu-category"));

    $(".menu-category").on("click", function(event) {
        var obj = event.target.parentElement;
        if($(this).hasClass("active-cat")) {
            $(this).removeClass("active-cat");
            $(this).find(".category-listings").animate({"height" : "0vh"}, 200)
                                                .animate({"opacity" : "0"}, 100);

            var catStyles = window.getComputedStyle(obj);
            // Use computed height to scroll to right position
            var computedHeight = parseInt(catStyles.marginTop)
                                + parseInt(catStyles.marginBottom)
                                + parseInt(catStyles.height);
            // console.log(cats.indexOf(obj)* computedHeight);
            $(this).find(".category-listings").parent().parent().scrollTop(
                cats.indexOf(obj) * (computedHeight * 1.2)
            );
        } else {
            $(".menu-category.active-cat").find(".category-listings")
                                            .animate({"height" : "0vh"}, 200)
                                            .animate({"opacity" : "0"}, 100);
            $(".menu-category.active-cat").removeClass("active-cat");

            // Compute height
            var height = 0;
            var items = $(this).find(".category-listings .list-item");
            for(var i = 0; i < items.length; i++) {
                styles = window.getComputedStyle(items[i]);
                // Get heights of each list item
                height += parseInt(styles.marginTop)
                        + parseInt(styles.marginBottom)
                        + parseInt(styles.height);
            }

            $(this).addClass("active-cat");
            $(this).find(".category-listings").animate({"opacity" : "1"}, 100);
            $(this).find(".category-listings").animate({"height" : height + "px"}, 200);
        }
    });
})();
