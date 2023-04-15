    var numXYOfC = $(".SvgInIndi__").attr('stroke-dashoffset');
    const POfNum = numXYOfC / 100;

    var interval = setInterval(function() {

        numXYOfC = numXYOfC - POfNum;
        var NumRy = Math.ceil(numXYOfC);

        $(".SvgInIndi__").attr('stroke-dashoffset', NumRy);

        var Percentage_num = parseInt($("text").text());

        $("text").text(Percentage_num + 1 + "%");

        if (Percentage_num == 99) {
            clearInterval(interval);
        }

    }, 200)