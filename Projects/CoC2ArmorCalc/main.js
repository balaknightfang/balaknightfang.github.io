const armorPrint = () => {
    let powerNum = Number(document.getElementById("armorValue").value);
    let macro = `Percent Resisted: ${(100-(100/(100 + powerNum))*100).toFixed(1)}%`;

    let hpNum = Number(document.getElementById("baseHP").value);
    let ehp = `Effective HP: ${((1+powerNum/100) * hpNum).toFixed(1)}`;

    document.getElementById("percentResisted").innerHTML = macro + "<br>" + ehp;

    
}

const resPrint = () => {
    let damageReduction = Number(document.getElementById("resValue").value);
    let macro2 = `Armor Needed: ${(10000/(100-damageReduction) - 100).toFixed(0)}`;

    
    document.getElementById("armorNeeded").innerHTML = macro2;

    
}

//${document.querySelector('input[name="powerAction"]:checked').value}