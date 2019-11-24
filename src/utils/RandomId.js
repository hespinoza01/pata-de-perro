function rId(len=6){
  return Math.random().toString(36).substring(len);
}

export default rId;
