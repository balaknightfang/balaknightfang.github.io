//import("powerhouse-data-1.js")
//import * as data from "powerhouse-data-1"


window.stringOrFunc = (arg, ...args) => typeof arg === 'function' ? arg(...args) : arg;
Aesica.dataHarness.buildLookupTables();

// Get the input field

let Titles = [];
let Headers = [];

const title = (text) => {
    const title = text?.replace(/[^a-zA-Z1-9]/g, '');
    if(Titles.filter(e=>e.title === title).length === 0) Titles.push({ title, text });
    return `<br><h1 id="${title}" >${text}</h1><hr>`;
};
const header = (text) => {
    const header = text?.replace(/[^a-zA-Z1-9]/g, '');
    const title = Titles[Titles.length-1];
    if(Headers.filter(e=>e.header === header).length === 0) Headers.push({ title, header, text });
    return `<h2 id="${title ? title.title : ''}:${header}">${text}</h2>`;
};
const p = (text) => {
    return `<p>${text}</p>`;
};

const silly = () => false;

const list = (entries, ordered = false) => {
    const tag = ordered ? 'ol' : 'il';
    return `<${tag}>${entries.map(_=>`<li>${_}</li>`).join('')}</${tag}>`;
};

//const powerTypes = ["At-Will", "Recharge", "Encounter", "Ultimate"];
const damageTypes = [
    "Raw",
    "Penetrating",
    "Crushing",
    "Holy",
    "Blight",
    "Acid",
    "Fire",
    "Frost",
    "Storm",
    "Tease",
    "Drug",
    "Pheromone",
    "Fatigue",
    "Mind",
];
const attackTypes = ["Physical","Magical","Mental","Sexual"];
const itemTags = [
    "WEAPON",
    "MELEE",
    "RANGED",
    "THROWN",
    "SPELL",
    "STANCE",
    "SUMMON",
    "HEALING",
    "ALLY",
    "OMNI",
    "PERFORMANCE",
    "TEASE",
    "TEASE_ASS",
    "TEASE_CROTCH",
    "TEASE_CHEST",
    "CATALYZABLE",
    "DUALWIELD",
    "TWOHAND",
    "MULTITURN",
    "INTERRUPTABLE",
    "SHIELD",
    "STEALABLE",
    "RES_HEAL"
];
const sortItems = (item1, item2) => {
    if(item1 === undefined) return 0;
    else if (item2 === undefined) return 0;
    if(item1.type - item2.type === 0) {
        if(item1.name === undefined) return -1;
        if(item2.name === undefined) return -1;
        if(stringOrFunc(item1.name).toUpperCase() < stringOrFunc(item2.name).toUpperCase()) return -1;
        return 0;
    }
    return item1.type - item2.type
}


function pressedEnter(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButt").click();
    }
}


class searchOptions {
    constructor(props) {
        this.state = {
            expanded: false
        }
    }
    
    render() {
    
        return          
            `<div className=searchStuff>
                <label for="ItemNameSearch">Name:</label>
                <br></br>
                <input class="searchFields" type="text" id="ItemNameSearch" name="ItemNameSearch" onKeyDown=pressedEnter()></input>
                <br />
                <label for="ItemDescSearch">Description:</label>
                <br />
                <input class="searchFields" type="text" id="ItemDescSearch" name="ItemDescSearch" onKeyDown=pressedEnter()></input>
                <br />
                <label for="ItemLevelSearch">Level:</label>
                <br />
                <input class="searchFields" type="text" id="ItemLevelSearch" name="ItemLevelSearch" onKeyDown=pressedEnter()></input>
                <br />
                <label for="ItemTagsSearch">Tags (Divide by a comma and a space): </label>
                <br />
                <input class="searchFields" type="text" id="ItemTagsSearch" name="ItemTagsSearch" onKeyDown=pressedEnter()></input>
                <label for="ItemDTypeSearch">Damage Type(s) (Divide by a comma and a space): </label>
                <br />
                <input class="ItemDTypeSearch" type="text" id="ItemDTypeSearch" name="ItemDTypeSearch" onKeyDown=pressedEnter()></input>
                

            </div>
            `;
    }
}


function sidebarEntries() {
    return Titles.map((title) => `<SideBarEntry key=${title.title} title=${title}/>`);
}


function searchPower() {
    
    let stuff = [];
    let nam = document.getElementById("ItemNameSearch") === null ? null : (document.getElementById("ItemNameSearch")?.value === '' ? null : document.getElementById("ItemNameSearch")?.value.toLowerCase());
    //console.log(nam);
    /*const desc = document.getElementById("ItemDescSearch") === null ? null : (document.getElementById("ItemDescSearch")?.value === '' ? null : document.getElementById("ItemDescSearch")?.value.toLowerCase());
    const lvl = document.getElementById("ItemLevelSearch") === null ? null : (document.getElementById("ItemLevelSearch")?.value === '' ? null : parseInt(document.getElementById("ItemLevelSearch")?.value));
    const tagsRaw = document.getElementById("ItemTagsSearch") === null ? null : (document.getElementById("ItemTagsSearch")?.value === '' ? null : document.getElementById("ItemTagsSearch")?.value.toUpperCase()); 
    const tagsRefined = tagsRaw === null ? null : tagsRaw.split(", ");
    const dtypesRaw = document.getElementById("ItemDTypeSearch") === null ? null : (document.getElementById("ItemDTypeSearch")?.value === '' ? null : document.getElementById("ItemDTypeSearch")?.value.toLowerCase()); 
    const dtypesRefined = dtypesRaw === null ? null : dtypesRaw.split(", ");
    const statsRaw = document.getElementById("ItemStatsBSearch") === null ? null : (document.getElementById("ItemStatsBSearch")?.value === '' ? null : document.getElementById("ItemStatsBSearch")?.value.toLowerCase()); 
    const statsRefined = statsRaw === null ? null : statsRaw.split(", ");
    const statsDRaw = document.getElementById("ItemStatsDSearch") === null ? null : (document.getElementById("ItemStatsDSearch")?.value === '' ? null : document.getElementById("ItemStatsDSearch")?.value.toLowerCase()); 
    const statsDRefined = statsDRaw === null ? null : statsDRaw.split(", ");*/
    
    //for (const powers in POWERS) {
    //    const _power = new POWERS[powers](pc);
    //    //console.log(_power);
    //    const iTags = _power["tags"].map(e => e === null ? itemTags[0] : itemTags[e]);
    //    //const posStats = [];
    //    //const negStats = [];
    //    //const noKeys = ['_name', '_short', '_description', 'type', 'tags', 'getKey', 'stackLimit', 'stack', "value", //"consumeOnPower", "combatUsePower"];
    //    /*for (const key in _power) {
    //        if(_power[key] && !noKeys.includes(key) && !isNaN(parseInt(_power[key]))) { 
    //            if (parseInt(_power[key]) > 0) posStats.push(key.toLowerCase());
    //            else negStats.push(key.toLowerCase());
    //        }
    //        
    //    }*/
//
    //    const descrip = _power.description().toLowerCase();
    //    
//
    //    let a = false;
    //    if(nam === null || fieldOrSpinner(_power, 'name').toLowerCase().includes(nam)) { a = true;}
    //    if(a && ((desc === null) || descrip.includes(desc))) a = true;
    //    else if (desc !== null && a) a = false;
    //    if(a && ((lvl === null) || _power.level === lvl)) a = true;
    //    else if (lvl !== null && a) a = false;
    //    if(a && ((tagsRefined === null) || tagsRefined.every(tag => iTags?.includes(tag)))) a = true;
    //    else if (tagsRefined !== null && a) a = false;
    //    if(a && ((dtypesRefined === null || dtypesRefined.every(dt => descrip.includes(dt)) ))) a = true;
    //    else if (dtypesRefined !== null && a) a = false;
    //    /*if(a && ((statsRefined === null) || statsRefined.every(stat => posStats.includes(stat)))) a = true
    //    else if (statsRefined !== null && a) a = false;
    //    if(a && ((statsDRefined === null) || statsDRefined.every(stat => negStats.includes(stat)))) a = true
    //    else if (statsDRefined !== null && a) a = false; */
    //    //console.log(a);
    //    if(a) stuff.push(_power);
    //}
    ////console.log(stuff);
    //const actualOutput = actualOutputList(stuff);
    return `${jsonGen()}`;
}

function fieldOrSpinner(obj, field) {
    const loading = `<b>Loading...</b>`;
    
    try {
        const val = obj[field];
        return (typeof val === 'function' && !asyncLoaded) ? loading : stringOrFunc(val);
    }
    catch {
        return loading;
    }
}

const actualOutputList = (array) => {
    let rValue = "";
    let currentCat = 0;
    console.log(array);
    let pows =  JSON.parse(JSON.stringify(array))
    const done = [];
    array/*.sort(sortItems)*/.forEach(x => {
        let pow = pows.filter(p => stringOrFunc(p.name) == x["name"])
        if(pow.length > 1) pow = pow.filter(p=> p.constructor.name !== "_class2")
        //console.log(pow)
        //console.log(x);
        //console.log(stringOrFunc(x["name"]))
        //if(x["type"] === undefined || x["name"] === undefined || ["Unnamed", "Tease", "Attack"].includes(x["name"]) || done.includes(x["name"])) {return; }
        /*if(currentCat !== dataFramework[x.framework]?.name) {
            currentCat = dataFramework[x.framework]?.name;
            rValue += "" + currentCat;
        }*/
        delete x["type"];
        rValue += "<br>" + header(stringOrFunc(x["name"]));
        
        let entry = [];
        
        entry.push("<b>Name:</b> " + fieldOrSpinner(x, 'name'));
        done.push(fieldOrSpinner(x, 'name'))
        for (const key in x) {
            if(x[key] && key !== "combatUsePower" && key !== "consumeOnPower" && !key.includes("stack") && key !== "getKey" && key !== "advantageList") {
                entry.push(`<b>li${key}</b>: ${fieldOrSpinner(x,key)}`);
            }
        }
        let advantages = "<ol><h3>Advantages:</h3>";
        x["advantageList"].forEach(adv => advantages +=`<li><b>${adv.name}</b>: Desc: ${adv.toolTip}</li>`)
        advantages += "</ol>"
        entry.push(advantages)
        rValue += list(entry);
    });
    return rValue;
}

const jsonGen = () => {
    let sendybit = HCData.power
    const actualOutput = actualOutputList(sendybit)
    return `${actualOutput}`;
}


function render() {
    const items = searchPower();
    const _sidebarEntries = sidebarEntries();
    const search = new searchOptions().render(); 
   
    

    document.getElementById("root").innerHTML=
    `<div className="d-flex" id="wrapper">
           
           <div className="border-right" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    ${_sidebarEntries}
                </div>
            </div>

          <div id="page-content-wrapper">
            
                <nav className="navbar navbar-expand-lg navbar-light border-bottom" id="nav-bar" >
                </nav>
            
                <div className="container-fluid">
                    ${jsonGen()}
                </div>
            </div>
            <div className="d-flex" id="searchbar-wrapper">
            <div className="border-left">
            <!--{search}<br/>-->
            <!--    <button id="searchButt" onClick={searchFun}>Search</button>-->
            </div>
            </div>
        </div>
    `;
    

}


render();