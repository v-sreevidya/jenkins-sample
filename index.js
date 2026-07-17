function hello() {
  return "hello from jenkins sample";
}
module.exports = { hello };
if (require.main === module) {
  console.log(hello());
}
