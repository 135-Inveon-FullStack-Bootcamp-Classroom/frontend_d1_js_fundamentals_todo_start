console.log(sumWithDefault(1, 3));

function sumWithDefault(a, b) {
  var k; // var tanımlandığında k değerini scope'un en üzerine taşır
  let d = 12;

  d = 14;

  return a + b + d;
  k = 9;
}
