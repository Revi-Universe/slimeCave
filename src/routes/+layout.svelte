<style>
    header + div {
        display: flex;
        flex-direction: column;
        max-width: 920px;
        min-width: 410px;
        min-height: 560px;
        margin: 45px auto 0 auto;
        padding: 12px 16px;
        box-sizing: border-box;
        border-radius: 6px;
        background-color: #f3eeeb;
        box-shadow: 0 4px 4px rgba(0,0,0,0.25);
        position: relative;
    }
    div > div {
        max-width: 680px;
        margin: 16px auto 72px auto;
        flex-grow: 1;
    }
    header {
        display: flex;
        width: 100%;
        height: 70px;
        background-color: #354C57;
        box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    }
    header a {
        display: flex;
        height: 100%;
        margin-left: 5px;
        padding-left: 16px;
        padding-right: 16px;
        color: #f3eeeb;
        align-items: center;
        text-decoration-line: none;
    }
    header a:hover {
        background-color: #26395966;
    }
    header a:first-child {
        margin: 0 12px 0 32px;
        padding: 0;
        font-size: 20pt;
        font-weight: bold;
    }
    footer {
        font-size: 0.7em;
        font-family: "Pretendard-Light";
        font-weight: 200;
        text-align: center;
    }
    footer p {
        margin: 8px 0 0px 0;
    }
    footer p:first-child {
        color: #a7a3a2;
    }
    div + p {
        max-width: 920px;
        min-width: 410px;
        margin: 6px auto 0 auto;
        color: #f3eeeb;
        font-size: 0.8em;
        font-family: "Pretendard-Light";
        font-weight: 200;
    }
    div + p b{
        font-family: 'Pretendard-Bold';
        font-weight: 700;
    }
    img[src="/favicon.png"] {
        width: 18px;
        vertical-align: middle;
    }
    img[src="/heart.png"] {
        width: 14px;
        vertical-align: middle;
        image-rendering: pixelated;
    }
    img[src="/slime_1.png"] {
        width: 19px;
        margin-right: 3px;
        vertical-align: middle;
        image-rendering: pixelated;
    }
</style>

<header>
    <a href="/"><img src="/icon2.png" alt="logo"></a>
    <a href="/find">알 찾기</a>
</header>
<div>
    <div>
        <slot />
    </div>
    <footer>
        <p>Inspired by <a href="https://dragcave.net/">DragonCave</a></p>
        <p><img src="/favicon.png" alt="icon"> ⓒ Slime Cave, Revi-Universe <img src="/heart.png" alt="♥"> Hamsoter</p>
    </footer>
</div>
<p>
    <img src="/slime_1.png" alt="slime"><b>0명</b>의 농장주와, <b>0마리</b>의 애완 슬라임이 함께 살고 있어요.
</p>