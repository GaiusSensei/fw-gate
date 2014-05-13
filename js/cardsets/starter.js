(function(gate, undefined) {
    var cardsetCode = "STARTER";
    if(gate.cardsets == null) gate.cardsets = [];
    if(gate.cardset == null) gate.cardset = {};
    if($.inArray(cardsetCode, gate.cardsets) == -1) {
        gate.cardsets.push(cardsetCode);
        // Cardset Properties
        gate.cardset[cardsetCode] = {};
        gate.cardset[cardsetCode].SetName = "Starter";
        gate.cardset[cardsetCode].SetCode = "S";
        gate.cardset[cardsetCode].Cards = [];
        // Cardset Cards
        gate.cardset[cardsetCode].Cards.push({
            CardName: "Delphinus, the Knight of the Sun",
            CardNo: "S-001",
            Rarity: "",
            Will: "",
            Type: "Ruler",
            Subtype: "Knight",
            Effects: ["J-Activate: [L][L][2]", "Continuous: Resonators targeted by an addition gains [+200/+0].", "Activate: [Rest] Target resonator gains [+400/+400] until end of turn."],
            Cost: "",
            Atk: "",
            Def: ""        
        });
        gate.cardset[cardsetCode].Cards.push({
            CardName: "Apollo, the God of Light",
            CardNo: "S-001",
            Rarity: "",
            Will: "",
            Type: "J-Ruler",
            Subtype: "Deity",
            Effects: ["Target attack", "Enter: Destroy all [Race:Dragon] and [Race:Demon] cards in all fields.", "Continuous: Your opponents reveal all cards in their chant standby areas."],
            Cost: "",
            Atk: "1000",
            Def: "1000"        
        });
        gate.cardset[cardsetCode].Cards.push({
            CardName: "Michael, the Archangel",
            CardNo: "S-002",
            Rarity: "",
            Will: "Light",
            Type: "Resonator",
            Subtype: "Angel",
            Effects: ["Flying", "Enter: Each player may put up to two cards from the top of their main deck to their lifebreak area.", "Activate: At the beginning of your opponent's battle phase, you may banish a card in your lifebreak area: Recover target resonator; it gains [+0/+500] until the end of turn."],
            Cost: "[L][L][4]",
            Atk: "1000",
            Def: "1000"        
        });
        gate.cardset[cardsetCode].Cards.push({
            CardName: "Rukh, the Pure White Divine Hawk",
            CardNo: "S-003",
            Rarity: "",
            Will: "Light",
            Type: "Resonator",
            Subtype: "Raptor",
            Effects: ["Flying", "Activate: Banish this card: All damage becomes 0 until end of turn."],
            Cost: "[L][L][2]",
            Atk: "600",
            Def: "600"        
        });
        gate.cardset[cardsetCode].Cards.push({
            CardName: "Ushuah, the Flame Samurai Swordman",
            CardNo: "S-004",
            Rarity: "",
            Will: "",
            Type: "Ruler",
            Subtype: "Samurai",
            Effects: ["J-Activate: [F][F][2]", "Continuous: Your resonators with total cost two or less can attack in the turn it's summoned.", "Activate: Discard a card from your hand during the battle phase: Target resonator gains [Explode] until end of turn."],
            Cost: "",
            Atk: "",
            Def: ""        
        });
        gate.cardset[cardsetCode].Cards.push({
            CardName: "Agni, the Pyre War God",
            CardNo: "S-004",
            Rarity: "",
            Will: "",
            Type: "J-Ruler",
            Subtype: "Deity",
            Effects: ["Enter: Deal 1000 damage to up to two target resonators.", "Enter: Destroy all cards in the chant-standy area.", "Activate: Discard a card from your hand during the battle phase: Target resonator gains [Explode] until end of turn."],
            Cost: "",
            Atk: "1200",
            Def: "800"        
        });
    };
}(window.gate = window.gate || {}));