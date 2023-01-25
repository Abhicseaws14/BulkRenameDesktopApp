const fs = require('fs');
const replaceThis = "peter";
const replaceWith = "Alex";
const preview = true;

try {
    fs.readdir("data", (err, data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
            if (!preview) {
                fs.rename("data/" + item, newFile, () => {
                    console.log("rename successfully");
                })
            }
            else {
                console.log("data/" + item + " will be renamed to " + newFile);
            }
        }
    })
}
catch (err) {
    console.error(err);
}
