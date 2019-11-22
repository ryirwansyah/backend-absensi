
exports.emailPassword = (name, password) => {
  return `<style>
  @import url("https://fonts.googleapis.com/css?family=Questrial");
  @media (max-width: 576px) {
    .container {
      width: 90%;
    }
  }
  @media (max-width: 576px) {
    .inner-box {
      padding: 1.5rem;
    }
  }
  @media (max-width: 576px) {
    .btn-box {
      margin: 2rem;
    }
  }
</style>

<div class="body" style="font-family: 'Questrial', sans-serif;">
  <div class="main-box" style="background: #f8f8f8; padding: 2rem 0 5rem 0;">
    <div class="container" style="margin: auto; width: 60%;">
      <img
        src="http://www.halojasa.com/assets_frontend/img/start_hj/logo-start.PNG"
        alt="HaloJasa"
        class="logo"
        style="height: 40px; margin-bottom: 1rem;"
        height="40"
      />
      <div
        class="inner-box"
        style="background: #fff; padding: 2rem; border-radius: 5px;"
      >
        <p>Hi ${name},</p>
        Hi, this is your account's password please keep this CAREFULLY, 
        <div class="btn-box" style="text-align: center; margin: 2rem;" disabled>
           <a href="" style="cursor: pointer;">
            <button
              style="padding: 0.8rem 3rem; border: none; border-radius: 3px; background: #ff9d00; color: #fff;" disabled>
              ${password}
            </button>
          </a>
        </div>
        <p>Thanks in advance</p>
        <p>&mdash; The HaloJasa Team</p>
      </div>
    </div>
  </div>
</div>
        `
}
