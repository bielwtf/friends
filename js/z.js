const flags = {
  null: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png' alt='Active Developer'>",
  VerifiedDeveloper: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png' alt='Verified Developer'>",
  ActiveDeveloper: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png' alt='Active Developer'>",
  PremiumEarlySupporter: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png' alt='Premium Early Supporter'>",
  HypeSquadOnlineHouse1: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png' alt='HypeSquad Online House 1'>",
  HypeSquadOnlineHouse2: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png' alt='HypeSquad Online House 2'>",
  HypeSquadOnlineHouse3: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png' alt='HypeSquad Online House 3'>",
  Nitro: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png' alt='Nitro'>",
  BoostLevel1: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/51040c70d4f20a921ad6674ff86fc95c.png' alt='Boost Level 1'>",
  BoostLevel2: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/0e4080d1d333bc7ad29ef6528b6f2fb7.png' alt='Boost Level 2'>",
  BoostLevel3: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/72bed924410c304dbe3d00a6e593ff59.png' alt='Boost Level 3'>",
  BoostLevel4: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/df199d2050d3ed4ebf84d64ae83989f8.png' alt='Boost Level 4'>",
  BoostLevel5: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/996b3e870e8a22ce519b3a50e6bdd52f.png' alt='Boost Level 5'>",
  BoostLevel6: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/991c9f39ee33d7537d9f408c3e53141e.png' alt='Boost Level 6'>",
  BoostLevel7: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/cb3ae83c15e970e8f3d410bc62cb8b99.png' alt='Boost Level 7'>",
  BoostLevel8: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/7142225d31238f6387d9f09efaa02759.png' alt='Boost Level 8'>",
  BoostLevel9: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/ec92202290b48d0879b7413d2dde3bab.png' alt='Boost Level 9'>",
  LegacyUsername: "<img class='flag-icon' src='https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png' alt='Legacy Username Badge'>"
};

const userIds = [
  "695060735264423974",
  "184486010304856065",
  "347796715363106816",
  "853365693718200361"
];

function getKey(e) {
  var s = e.keyCode;
  if (console.log(s), 16 != s && 17 != s || (mode = 2), 1 == mode) {
    if (123 == s) return !1;
  } else {
    if (73 == s || 74 == s || 85 == s) return !1;
    if (123 == s) return !1;
  }
}

userIds.forEach((e, s) => {
  setTimeout(() => {
    fetch(`https://rhxw.fun/users/${e}/`)
      .then((response) => response.json())
      .then((data) => {
        var a = data.profile.avatarUrl,
            l = data.user.globalName.length > 10 ? data.user.username : data.user.globalName,
            o = data.profile.badgesArray,
            t = document.getElementById("avatar" + (s + 1)),
            c = document.getElementById("name" + (s + 1)),
            g = document.getElementById("flags" + (s + 1));

        t.src = a || "./chupetao.jpg";
        c.textContent = l;
        g.innerHTML = o.map((e) => flags[e]).join(" ");
        t.onload = () => {
          document.querySelector(".circle:nth-child(" + (s + 1) + ")").classList.add("loaded");
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }, 1500 * s);
});

let mode = 1;

document.oncontextmenu = new Function("return false;");
window.onkeydown = getKey;

