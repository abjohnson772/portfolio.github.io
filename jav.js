const hamburgerMenu = document.querySelector("#menu-hamburger");



hamburgerMenu.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("menu-open");
})



const menuClose = document.querySelector("#menu-close");



menuClose.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("menu-open");
}) 



/*chatbot*/


const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "dont be shy type something ^-^!"
    : responseObj[userInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};



//* things that helped me make this website*//
//*chatbot - https://codepen.io/tariq01/pen/yLVMJrr , https://www.google.com/search?q=discord+chat+bot+coding&rlz=1C5CHFA_enUS1027US1027&sxsrf=ALiCzsbKwFAryj4WsXDFBnTpa5Q9LP0Wqg%3A1671575749163&ei=xTiiY564Ccy1qtsPv8isSA&ved=0ahUKEwjervn1oIn8AhXMmmoFHT8kCwkQ4dUDCBA&uact=5&oq=discord+chat+bot+coding&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgUIABCGAzIFCAAQhgMyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoFCAAQgAQ6BQghEKABOggIIRAWEB4QHUoECEEYAEoECEYYAFCkBFiODWC1DmgBcAF4AIABgwGIAYwGkgEDMi41mAEAoAEByAEKwAEB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:74d3879d,vid:UjDpW_SOrlw ,https://www.youtube.com/watch?v=C2bKXt1yuPE *//
//* gallery - https://www.geeksforgeeks.org/how-to-make-the-images-bigger-when-clicked/, https://codepen.io/ongtiffany/pen/BoOeQV*//
