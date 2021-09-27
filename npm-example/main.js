import * as jQuery from "./node_modules/jquery/dist/jquery.js";

const BROWN_CLASS = "box--brown";
const BLUE_CLASS = "box--blue";

$("#color-button").on("click", () => {
  const box = $(".box");
  if (box.hasClass(BROWN_CLASS)) {
    box.removeClass(BROWN_CLASS);
    box.addClass(BLUE_CLASS);
  } else {
    box.removeClass(BLUE_CLASS);
    box.addClass(BROWN_CLASS);
  }
});
