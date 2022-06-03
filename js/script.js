/* const body = document.querySelector("body");
body.style.background = "rgb(13, 25, 43)";
body.style.minHeight = "100vh";
body.style.display = "grid";
body.style.placeItems = "center";
body.style.overflow = "hidden";

const card = document.createElement("div");
card.id = "wrapper";
body.append(card);
card.style.background = "hsl(215, 51%, 16%)";
card.style.cssText = "max-width:1440px; margin: 0 auto; margin-top: 160px; display:flex; justify-content: space-around;";

function card() {
    const document2 = document.createElement("div");
    wrapper.append(document2);
    document2.style.cssText =
        "width: 300px; min-height: 450px; height: fit-content; background: hsl(215, 51%, 16%); border-radius: 20px; padding: 1rem"; */



        const body = document.querySelector("body");
        body.style.backgroundColor = "hsl(217, 54%, 11%)";
        body.style.width = "100hw";
        
        const wrapper = document.createElement("div");
        wrapper.id = "wrapper";
        body.append(wrapper);
        wrapper.style.backgroundColor = "hsl(216, 50%, 16%)";
        wrapper.style.cssText =
            "max-width:1440px; margin: 0 auto;  margin-top: 160px; display:flex; justify-content:space-around;";
        
        function Card() {
            const document2 = document.createElement("div");
            wrapper.append(document2);
            document2.style.cssText =
                "width: 350px; height: 600px; background-color: hsl(216, 50%, 16%); border-radius: 10px; box-shadow: 0 20px 20px #0c1729, 0 30px 45px #0c192c; ";        
                
                const container = document.createElement("div");
                document2.prepend(container);
                container.style.width = "300px";
                container.style.margin = "0 auto";
                
                const img = new Image();
                img.src = "images/image-1.jpg";
                container.appendChild(img);
                img.style.cssText =
                    "width: 300px; height: 300px; margin-top: 25px; border-radius:10px;";
                
                const title = document.createElement("h1");
                container.appendChild(title);
                title.innerText = "Equilibrium #3429";
                title.style.cssText =
                    "font-family:'Outfit', sans-serif; font-size: 22px; color:  hsl(0, 0%, 100%); ";
            
                const subtitle = document.createElement("p");
                container.appendChild(subtitle);
                subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
                subtitle.style.cssText =
                    "font-family: 'Outfit', sans-serif; font-weight: 300; color: hsl(215, 51%, 70%); font-size: 18px; line-height:  1.25;";
                const items = document.createElement("div");
                container.append(items);
                items.style.cssText =
                    "display: flex; justify-content:space-between; align-items: center; padding-top:5px; margin-bottom:22px;";
            
                const item1 = document.createElement("div");
                const item2 = document.createElement("div");
                items.prepend(item1);
                items.append(item2);
            
                item1.style.cssText =
                    "display:flex; font-family: 'Outfit', sans-serif; color:hsl(178, 100%, 50%);";
                item2.style.cssText =
                    "display:flex; align-items:center; font-family: 'Outfit', sans-serif;font-size: 16px; color:hsl(215, 51%, 70%);";
                const icon = new Image();
                item1.prepend(icon);
                icon.src = "images/icon-ethereum.svg";
                icon.style.cssText = width = "11";
            
                const itemEl = document.createElement("span");
                item1.append(itemEl);
                itemEl.innerText = "0.041ETH";
                itemEl.style.cssText = "display: flex; padding-left: 10px";
            
                const icon2 = new Image();
                item2.prepend(icon2);
                icon2.src = "images/icon-clock.svg";
                icon2.style.cssText = width = "17";
            
                const itemEl2 = document.createElement("span");
                item2.append(itemEl2);
                itemEl2.innerText = "3 days left";
                itemEl2.style.cssText =
                    "hsl(215, 51%, 70%) display: flex; padding-left: 10px; align-content: center; font-family: 'Outfit', sans-serif;font-size: 16px;";
            
                const line = document.createElement("div");
                container.append(line);
                line.style.cssText =
                    "border-bottom: 0.5px solid hsl(215, 32%, 27%); width: 300px; padding-botton:8px;";
            
                const footer = document.createElement("div");
                container.append(footer);
                footer.style.cssText =
                    "display: flex; justify-content: start; align-items: center; padding-top:5px; margin-bottom:22px;";
                const avatar = new Image();
                footer.append(avatar);
                avatar.src = "images/image-avatar.png";
                avatar.style.cssText =
                    "width: 50px; border: 1px solid  hsl(0, 0%, 100%); border-radius: 50px ";
                const userName = document.createElement("p");
                footer.append(userName);
                userName.innerText = "Creation of";
                userName.style.cssText =
                    "color: hsl(215, 51%, 70%); display: flex; padding-left: 10px; align-content: center; font-family: 'Outfit', sans-serif;font-size: 16px;";
                const userNames = document.createElement("p");
                footer.append(userNames);
                userNames.innerText = "Jules Wyvern";
                userNames.style.cssText =
                    "color: hsl(0, 0%, 100%); display: flex; padding-left: 10px; align-content: center; font-family: 'Outfit', sans-serif;font-size: 16px;";
            
            }
            
            Card();
            Card();