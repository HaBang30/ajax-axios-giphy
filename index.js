
document.getElementById("btnSearch").addEventListener('click', loadData);
        function loadData() {
            let myApi = "http://api.giphy.com/v1/gifs/search?api_key=sDtLTXp2sDr3IV8du4cJ1rBo5L5kiKiG&limit=1&q=";
            let str = document.getElementById("search").value;
            let url = myApi.concat(str);
            fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                let div = document.createElement("div");
                    div.id = "myPhoto";
                let img = document.createElement("img");
                let p = document.createElement("p");
                div.appendChild(img);
                div.appendChild(p);
                img.src = content.data[0].images.downsized.url;
                p.textContent = content.data[0].title;
                let outPut = document.getElementById("outPut");
                outPut.insertAdjacentElement("beforebegin", div);
            })
            .catch(err => console.error(err))
            document.getElementById("search").value = "";
            
        }


        document.getElementById("btnRemove").addEventListener('click', removeData);
        function removeData() {
            let images = document.getElementsByTagName("img");
            for (let i = images.length-1; i >= 0; i--) {
                images[i].parentNode.removeChild(images[i]);
            }
            let delp = document.getElementsByTagName("p");
            for (let i = delp.length-1; i >= 0; i--) {
                delp[i].parentNode.removeChild(delp[i]);
            }
        }
   