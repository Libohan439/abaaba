const passward = "d17e47ebb465b93b8a1ce1b03d89273a46ab4b07880bf49ab5b52c2ecf0f045fd102ef3c35d039e5361955748800499fbe28089973fcbf78fb96d06d3162bd8f";

async function shenjingbing(text) {
    const a = new TextEncoder();
    const b = a.encode(text);
    const c = await crypto.subtle.digest('SHA-512', b);
    const d = new Uint8Array(c);
    let e = '';
    for (let f = 0; f < d.length; f++) {
        let g = d[f];
        let h = g.toString(16);
        if (h.length === 1) {
            h = '0' + h;
        }
        e = e + h;
    }
    return e;
}

async function menqiandaqiaoxia() {
    const one = document.getElementById('Mrs_Deng');
    const two = document.getElementById('beautiful_Miss_Lv');
    const three = document.getElementById('SB_Laogailaoshi');
    let four = one.value.trim();
    let five = await shenjingbing(four);
    if (five == passward) {
        three.style.background = 'aqua';
        one.style.opacity = '0';
        one.style.transform = 'scaleY(0)';
        one.style.height = '0';
        one.style.margin = '0';
        one.style.padding = '0';
        one.style.border = '0';
        const startBtn = document.getElementById('xiaobinbin');
        startBtn.style.opacity = '1';
        startBtn.style.pointerEvents = 'auto';
        startBtn.style.transform = 'translateY(0)';
        startBtn.style.height = 'auto';
        startBtn.style.margin = '10px 0';
        startBtn.style.padding = '12px';
        startBtn.style.border = 'none';
        startBtn.style.overflow = 'visible';
        document.getElementById('xiaobinbin').onclick = function () {
            sessionStorage.setItem('true_or_false','true');
            window.location.href = 'second.html';
        };
    } else {
        three.style.background = 'red';
        one.value = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('SB_Laogailaoshi').onclick = menqiandaqiaoxia;
    document.getElementById('Mrs_Deng').onkeydown = function (e) {
        if (e.key === 'Enter') menqiandaqiaoxia();
    };
});
