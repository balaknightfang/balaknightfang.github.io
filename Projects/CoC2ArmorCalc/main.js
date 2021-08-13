const armorPrint = () => {
    let powerNum = Number(document.getElementById("armorValue").value);
    let macro = `Percent Resisted: ${(100-(100/(100 + powerNum))*100).toFixed(1)}%`;

    let hpNum = Number(document.getElementById("baseHP").value);
    let ehp = `Effective HP: ${((1+powerNum/100) * hpNum).toFixed(1)}`;

    document.getElementById("percentResisted").innerHTML = macro + "<br>" + ehp;

    
}

//${document.querySelector('input[name="powerAction"]:checked').value}