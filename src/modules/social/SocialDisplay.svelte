<div class="social-display">
  <div class="delimiter"></div>
  <div class="social-content-top">
    <slot name="top" />
  </div>
  <div class="social-content-bottom">
    <slot name="bottom" />
  </div>
</div>

<style>
    .social-display {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        position: relative;
    }

    @keyframes -global-polygon {
        0% { clip-path: polygon(0 0, 20px 0%, 10px 100%, 0% 100%); }
        20% { clip-path: polygon(0 0, 20px 0%, 10px 100%, 0% 100%); }
        80% { clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0% 100%); }
        100% { clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0% 100%); }
    }

    @keyframes -global-cursor-move {
        0% { left: 7px; opacity: 0; }
        20% { left: 7px; opacity: 0; }
        50% { opacity: 1; }
        80% { left: calc(100% - 12px); opacity: 0; }
        100% { left: calc(100% - 12px); opacity: 0; }
    }

    .delimiter {
        width: 3px;
        position: absolute;
        top: -2px;
        bottom: 0;
        z-index: 2;
        left: 7px;
        transform: rotate(21deg) translate(2px, -1px);
        background-color: #1bbfc4;
        transform-origin: bottom;
        animation: cursor-move 5s infinite alternate;
    }

    .social-content-top {
        animation: polygon 5s infinite alternate;
        z-index: 1;
        padding: 0 20px;
        background-color: #3b3b3b;
        flex: 1;
    }

    .social-content-bottom {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        font-size: 1.1rem;
        padding: 0 20px;
    }

</style>