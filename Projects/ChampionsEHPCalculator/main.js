const armorPrint = () => {
    let powerNum = Number(document.getElementById("armorValue").value);
    let brill = +(document.getElementById('brill').checked);
    let tank = +(document.getElementById('tank').checked);
    let pss = Number(document.getElementById("PSS").value);
    let sss = Number(document.getElementById("SSSS").value);
    let inv = +(document.getElementById('invuln').checked)*(39 + .0495 * pss + .046 * sss);
    let def = +(document.getElementById('defiance').checked)*(11.34 + .0188 * pss + .0182 * sss)*6;
    let r = (100/(100 + powerNum*.2353 + 100*.2*brill+100*.1*tank+inv+def));
    console.log(r);
    let res = (100-(100/(100 + powerNum*.2353 + 100*.2*brill+100*.1*tank+inv+def))*100).toFixed(1);
    let macro = `Actual Percent Resisted: ${res}%`; 

    let hpNum = Number(document.getElementById("baseHP").value);
    let ehp = `Effective HP: ${( hpNum/(r)).toFixed(1)}`;
    let blockEHP = `Block EHP:  ${( hpNum/((100/(100 + powerNum*.2353 + 100*.2*brill+100*.1*tank+inv+def+360)))).toFixed(1)}`


    document.getElementById("tankEHP").innerHTML = macro + "<br>" + ehp + "<br>" + blockEHP;

    
}

const resPrint = () => {
    let powerNum = Number(document.getElementById("armorValue2").value);
    let brill = +(document.getElementById('brill2').checked);
    let tank = +(document.getElementById('tank2').checked);
    let avoid = Number(document.getElementById('avoid').value);
    let r = (100/(100 + powerNum*.2353 + 100*.2*brill+100*.1*tank))*((100-avoid));
    let res = ((100-(100/(100 + powerNum*.2353 + 100*.2*brill+.1*tank))*((100-avoid)))).toFixed(1)
    let macro = `Actual Percent Resisted: ${res}%`;

    let hpNum = Number(document.getElementById("baseHP2").value);
    let ehp = `Effective HP: ${(hpNum/(r/100)).toFixed(1)}`;
    let blockEHP2 = `Block EHP:  ${(hpNum/((100/(100 + powerNum*.2353 + 100*.2*brill+100*.1*tank+360))*((100-avoid))/100)).toFixed(1)}`

    document.getElementById("dodgeEHP").innerHTML = macro + "<br>" + ehp+ "<br>" + blockEHP2;

}

//${document.querySelector('input[name="powerAction"]:checked').value}