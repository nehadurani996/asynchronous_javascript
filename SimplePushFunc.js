const breadLayer = [1, 2, 3];

const defaultPush = breadLayer.push;

breadLayer.push = function (payload) {
  doSpecialStuff(payload);

  if (everythingAlright) {
    defaultPush.call(breadLayer, payload);
  }
};

function doSpecialStuff(payload) {
  console.log("Special stuff:", payload);
}

const everythingAlright = true;

breadLayer.push(["name", "alis", "greek"]);
breadLayer.push("World");
