const parentNode = document.querySelectorAll(".parent")[0]
const datas = [];

getData()
console.log(0)
// bonus feature No.4
$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let scrollHeight = $(document).height();
    let windowHeight = $(this).height();
    if (scrollTop + windowHeight === scrollHeight) {
        getData()
    }
});

// main requirement
function getData() {
    for (let i = 0; i < 100; i++) {
        const data = {
            "username": getRandomString(getRandomNum(6, 10)),
            "url": "https://picsum.photos/180/100/?random=" + (i + 1),
            "age": getRandomNum(18, 65),
            "description": getRandomString(getRandomNum(30, 60)),
        }
        datas.push(data)
    }

    for (let i = 0; i < 100; i++) {
        const childNode = document.createElement("div")
        const imgNode = document.createElement("img")
        imgNode.src = datas[i].url
        imgNode.className = "image"
        const userNode = document.createElement("p")
        userNode.className = "string"
        userNode.innerHTML = datas[i].username
        const ageNode = document.createElement("p")
        ageNode.className = "string"
        ageNode.innerHTML = datas[i].age
        const descNode = document.createElement("p")
        descNode.className = "string"
        descNode.innerHTML = datas[i].description


        childNode.appendChild(imgNode)
        childNode.appendChild(userNode)
        childNode.appendChild(ageNode)
        childNode.appendChild(descNode)
        childNode.className = "child"
        parentNode.appendChild(childNode)
    }
}


function getRandomString(e) {
    e = e || 10;
    let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890 ",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}

function getRandomNum(min, max) {
    let Range = max - min;
    let Rand = Math.random();
    return (min + Math.round(Rand * Range));
}