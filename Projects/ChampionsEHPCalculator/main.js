const armorPrint = () => {
    let powerNum = Number(document.getElementById("armorValue").value);
    let brill = +(document.getElementById('brill').checked);
    let pss = Number(document.getElementById("PSS").value);
    let sss = Number(document.getElementById("SSSS").value);
    let inv = +(document.getElementById('invuln').checked)*(39 + .0495 * pss + .046 * sss);
    let def = +(document.getElementById('defiance').checked)*(11.34 + .0188 * pss + .0182 * sss)*6;
    let r = (100/(100 + powerNum*.2353 + 100*.2*brill+inv+def))*100;
    console.log(r);
    let res = (100-(100/(100 + powerNum*.2353 + 100*.2*brill+inv+def))*100).toFixed(1);
    let macro = `Actual Percent Resisted: ${res}%`;

    let hpNum = Number(document.getElementById("baseHP").value);
    let ehp = `Effective HP: ${( hpNum/(r/100)).toFixed(1)}`;

    document.getElementById("tankEHP").innerHTML = macro + "<br>" + ehp;

    
}

const resPrint = () => {
    let powerNum = Number(document.getElementById("armorValue2").value);
    let brill = +(document.getElementById('brill2').checked);
    let avoid = Number(document.getElementById('avoid').value);
    let r = (100/(100 + powerNum*.2353 + 100*.2*brill))*((100-avoid));
    let res = ((100-(100/(100 + powerNum*.2353 + 100*.2*brill))*((100-avoid)))).toFixed(1)
    let macro = `Actual Percent Resisted: ${res}%`;

    let hpNum = Number(document.getElementById("baseHP2").value);
    let ehp = `Effective HP: ${(hpNum/(r/100)).toFixed(1)}`;

    document.getElementById("dodgeEHP").innerHTML = macro + "<br>" + ehp;

}

//${document.querySelector('input[name="powerAction"]:checked').value}