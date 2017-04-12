function drawOnce(card)
{
    var c = $("canvas#cards-canvas")[0];
    var ctx = c.getContext("2d");
    var imgBg = $('img#background')[0];
    ctx.drawImage(imgBg, 0, 0);

    var img = new Image();
    var type = card.type=="servant" ? "servant" : "equip";
    // img.src = "http://file.fgowiki.591mogu.com/fgo/card/" + type + "/" + card.id + "A.jpg";
    img.src = (card.type=="servant") ? 
        "http://file.fgowiki.591mogu.com/fgo/head/" + card.id + ".jpg" :
        "http://fgowiki.com/fgo/equip/" + card.id + ".jpg";

    img.onload = function(){
        ctx.drawImage(img, 450, 220);
    };

    if (card.rank >= 4)
    {
        var selector = "#" + (card.type=="servant" ? "servant" : "craft-essence");
                        + "-" + (card.rank==4 ? "sr" : "ssr") + "-list";
        var content = "<img src='" + img.src + "'>";
        // $(selector).append(content);
    }
}

function drawCombo(card, x, y)
{
    var c = $("canvas#cards-canvas")[0];
    var ctx = c.getContext("2d");
    var imgBg = $('img#background')[0];
    ctx.drawImage(imgBg, 0, 0);

    var img = new Image();
    img.src = (card.type=="servant") ? 
        "http://file.fgowiki.591mogu.com/fgo/head/" + card.id + ".jpg" :
        "http://fgowiki.com/fgo/equip/" + card.id + ".jpg";

    img.onload = function(){
        ctx.drawImage(img, 80 + x * 142, 140 + y * 172);
    };

    if (card.rank >= 4)
    {
        var selector = "#" + (card.type=="servant" ? "servant" : "craft-essence");
                        + "-" + (card.rank==4 ? "sr" : "ssr") + "-list";
        var content = "<img src='" + img.src + "'>";
        // $(selector).append(content);
    }
}