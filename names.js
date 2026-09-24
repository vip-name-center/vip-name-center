// Dynamic 1000 VIP Name Generator Engine
const basePrefix = "ᴹᴿ〲ʟᴀʟᴀ";

function toSuperscript(num) {
    const supers = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
    return num.toString().split('').map(digit => supers[digit] || digit).join('');
}

// Generate Array from 1 to 1000
const nameList = [];
for (let i = 1; i <= 1000; i++) {
    nameList.push(`${basePrefix}${toSuperscript(i)}`);
}
