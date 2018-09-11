var throttlescroll;
var iframe = document.createElement('iframe');

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

function amountscrolled() {
    var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight()
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        iframe.contentWindow.postMessage(pctScrolled, "*")
    
}

window.addEventListener('scroll', function (e) {
    clearTimeout(throttlescroll)
    throttlescroll = setTimeout(function () { // throttle code inside scroll to once every 50 milliseconds
        amountscrolled()
    }, 50)

});

function createIframeWithDiv() {
    document.body.appendChild(iframe);
    iframe.style.border = "none"
    iframe.style.overflow = "hidden"
    iframe.style.position = "fixed"
    iframe.style.bottom = "20px"
    /**Commented out for dev environemnt*/
   // createIframeStyleSheet(iframe)
    var rootDiv = iframe.contentWindow.document.createElement("div")
    rootDiv.setAttribute("id", "root")
    iframe.contentWindow.document.body.appendChild(rootDiv)
    /**Commented out for dev environemnt*/
   // createScriptInIframe(iframe)
}

// set script to production
function createScriptInIframe(iframe){
    var script = iframe.contentWindow.document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://rawgit.com/angmark0309/widget/master/static/js/main.js"
    iframe.contentWindow.document.body.appendChild(script)
}

// set style to production
function createIframeStyleSheet(iframe) {
    var cssLink = document.createElement("link");
    cssLink.href = "https://rawgit.com/angmark0309/widget/master/static/css/main.css";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    iframe.contentWindow.document.head.appendChild(cssLink);
}

createIframeWithDiv();
