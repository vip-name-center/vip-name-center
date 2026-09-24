// Faster Array Object for Accurate ID Search & Better Performance
const basePrefix = "ᴹᴿ〲ʟᴀʟᴀ";

function toSuperscript(num) {
    const supers = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
    return num.toString().split('').map(digit => supers[digit] || digit).join('');
}

const nameList = [];
for (let i = 1; i <= 1000; i++) {
    nameList.push({
        id: i,
        text: `${basePrefix}${toSuperscript(i)}`
    });
}
