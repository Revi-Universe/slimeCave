<style>
    div {
        max-width: 1024px;
        margin: 0 auto;
    }

    header {
        width: 100%;
        height: 60px;
        background-color: #484848;
        display: flex;
    }

    header a {
        display: inline-block;
        height: 100%;
        margin-left: 16px;
        color: #f2f2f2;
        display: flex;
        align-items: center;
        text-decoration-line: none;
    }
    header a:hover {
        color: #b4b4b4;
    }
    header a:first-child {
        margin: 0 24px 0 32px;
        font-size: 20pt;
        font-weight: bold;
    }
</style>

<header>
    <a href="/">Slime Cave</a>
    <a href="/find">알 찾기</a>
</header>
<div>
    <slot />
</div>