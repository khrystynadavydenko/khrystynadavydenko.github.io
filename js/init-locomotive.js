! function () {
    "use strict";

    /*  
            document.addEventListener("DOMContentLoaded", function() {
                const scroll = new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true
                });
            });
    */

    document.documentElement.classList.add("is-loaded"), document.documentElement.classList.remove("is-loading"), setTimeout(function () {
        document.documentElement.classList.add("is-ready")
    }, 300), setTimeout(function () {
        var i = new LocomotiveScroll({
                el: document.querySelector("#js-scroll"),
                smooth: true,
                getSpeed: !0,
                getDirection: !0,
                useKeyboard: !0
            }),
            n = [],
            o = [];

        i.on("call", function(t, e, i) {
            if ("fx-reveal" === t)
                if ("enter" === e) n.push({
                    id: i.id,
                    el: i.el
                });
            else
                for (s = 0; s < o.length; s++) i.id === o[s].id && o.splice(s, 1)
        });

    }, 1000);
}();

/*
n = [],
o = [];
i.on("scroll", function(t) {
    var e = 360 * t.scroll.y / t.limit;
    i.el.style.backgroundColor = "hsl(".concat(e, ", 11%, 81%)"), n.forEach(function(t) {
        t.el.style.backgroundColor = "hsl(".concat(e, ", 11%, 81%)")
    }), o.forEach(function(t) {
        t.el.style.color = "hsl(".concat(e, ", 11%, 81%)")
    }), document.documentElement.setAttribute("data-direction", t.direction)
}),  

i.on("call", function(t, e, i) {
    if ("dynamicBackground" === t)
        if ("enter" === e) n.push({
            id: i.id,
            el: i.el
        });
        else
            for (var s = 0; s < n.length; s++) i.id === n[s].id && n.splice(s, 1);
    else if ("dynamicColor" === t)
        if ("enter" === e) o.push({
            id: i.id,
            el: i.el
        });
        else
            for (s = 0; s < o.length; s++) i.id === o[s].id && o.splice(s, 1)
})
*/
