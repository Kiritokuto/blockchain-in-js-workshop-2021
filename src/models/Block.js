import sha256 from 'crypto-js/sha256.js'
export const DIFFICULTY = 3

class Block {
  // 1. 完成构造函数及其参数
  constructor(blockchain,previousHash,height,hash,nonce) {
    this.blockchain=blockchain;
    this.previousHash=previousHash;
    this.height=height
    this.hash=hash
    this.nonce=nonce
  }
  
  isValid() {
    const hash=this.calculateHash()
    return hash.substring(0,DIFFICULTY) == '0'.repeat(DIFFICULTY)
  }

  calculateHash(){
    return sha256(
      this.previousHash+this.height+this.nonce
    ).toString()
   }

   //设置随机数
  setNonce(nonce) {
    this.nonce=nonce}
}

export default Block
