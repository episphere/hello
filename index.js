exports.helloWorld = (req, res) => {
  res.header("Content-Type","application/json")
  res.header("Access-Control-Allow-Origin","*")
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  let reqJSON = JSON.parse(JSON.stringify(req,getCircularReplacer(),3))
  resJSON={
    msg:`Hello Episphere at ${Date()} !`,
    yourAdress:`${req.connection.remoteAddress} at socket port ${req.connection.remotePort}`,
    aboutYou:reqJSON
  }
  res.send(JSON.stringify(resJSON,null,3));
};