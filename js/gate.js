(function(gate, undefined) {
    gate.getCard = function getCardF(cardNo) {
        var cardSet = cardNo.split('-')[0];
        var card = {};
        $.each(gate.cardset[cardSet].Cards, function(k,v){
            if (v.CardNo === cardNo) card = v;
        });
        return card;
    };
}(window.gate = window.gate || {}));