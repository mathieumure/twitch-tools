<script>
  import TwitterLogo from '../logos/TwitterLogo.svelte';
  import TwitchLogo from '../logos/TwitchLogo.svelte';
  import GithubLogo from '../logos/GithubLogo.svelte';
  import SocialDisplay from '../social/SocialDisplay.svelte';
  import DiscordLogo from '../logos/DiscordLogo.svelte';
</script>

<div class="tooltip">
  <SocialDisplay>
    <div class="social" slot="top">
      <TwitchLogo width="23" height="23" color="#1bbfc4" class="left-logo" />
      <p>InfrazFull</p>
    </div>
    <div class="social" slot="bottom">
      <p>@MathieuMure</p>
      <TwitterLogo width="25" height="25" color="#1bbfc4" class="right-logo" />
    </div>
  </SocialDisplay>
  <h1>InfrazFull</h1>
  <SocialDisplay>
    <div class="social" slot="top">
      <GithubLogo width="25" height="25" color="#1bbfc4" class="left-logo" />
      <p>mathieumure</p>
    </div>
    <div class="social" slot="bottom">
      <p>InfrazFull#7801</p>
      <DiscordLogo width="25" height="25" color="#1bbfc4" class="right-logo" />
    </div>
  </SocialDisplay>
</div>

<style>
  .tooltip {
    height: 50px;
    width: 27%;
    background-color: #3b3b3b;
    color: #e1e1e1;
    padding-left: 10px;
    padding-right: 10px;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: solid 2px #1bbfc4;
    border-bottom: solid 2px #1bbfc4;
    border-right: solid 2px #1bbfc4;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 1.6rem;
    flex-grow: 1;
    text-align: center;
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    font-size: 1.1rem;
  }

  .social :global(.left-logo) {
    margin-right: 8px;
  }

  .social :global(.right-logo) {
    margin-left: 8px;
  }
</style>
