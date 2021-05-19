const macroPrint = () => {
    const powerNum = document.getElementById("powerNumber").value;
    const macro = `&{template:dnd4epower} 
    {{${document.querySelector('input[name="powerType"]:checked').value}=1}}
    {{emote=${document.getElementById("emoteText").value||document.getElementById("emoteText").placeholder}}} 
    {{name=${document.getElementById("name").value||document.getElementById("name").placeholder} }} 
    {{level=@{power-${powerNum}-level} }}
    {{type=@{power-${powerNum}-useage} ♦}} 
    {{keywords=${document.getElementById("keywords").value||document.getElementById("keywords").placeholder} }} 
    {{action=@{power-${powerNum}-action} ♦}} 
    {{range=@{power-${powerNum}-range} }}
    {{target=${document.getElementById("target").value||document.getElementById("target").placeholder} }}
    {{attack=[[ 1d20 + @{power-${powerNum}-attack} ]] vs. **@{power-${powerNum}-def}** }} 
    {{damage=[[ (floor(@{level}/21)*(@{power-${powerNum}-weapon-num-dice}d@{power-${powerNum}-weapon-dice})) + @{power-${powerNum}-weapon-num-dice}d@{power-${powerNum}-weapon-dice}+@{power-${powerNum}-damage} ]] damage. }} {{critical=[[ (floor(@{level}/21)*(@{power-${powerNum}-weapon-num-dice}*@{power-${powerNum}-weapon-dice})) + @{power-${powerNum}-weapon-num-dice}*@{power-${powerNum}-weapon-dice} + @{power-${powerNum}-damage} ]] damage. }}
    {{special=${document.getElementById("special").value||document.getElementById("special").placeholder} }}`;

    document.getElementById("finalMacro").innerHTML = macro;
    
}

//${document.querySelector('input[name="powerAction"]:checked').value}