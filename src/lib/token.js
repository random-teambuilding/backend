import jwt from "jsonwebtoken";
import crypto from 'crypto-js';
import redis from 'redis';//redis 사용 모듈
import dotenv from 'dotenv';
dotenv.config();

const client = redis.createClient();


//리프레시 토큰을 기반으로 엑세스 토큰을 생성해 줍니다.
exports.signAccessToken = (async (name) => {
  const accesstoken = jwt.sign({ name: `${name}` },process.env.jwtSecretKey,{expiresIn: '30m'});
  return accesstoken;
});

//리프레시 토큰을 생성해 줍니다.
exports.signRefreshToken = (async (name, pin) => {
  const refreshToken = await jwt.sign({ pin: crypto.HmacSHA256(num + pin, process.env.sha256SecretKey) },process.env.jwtSecretKey,{expiresIn: '2w'});
  return refreshToken;
});


//엑세스 토큰을 인증해 줍니다.
exports.verifyAccessToken = (async (token) => {
  let check;
  jwt.verify(token, process.env.jwtSecretKey, (error, decoded) => {
    if(error){ 
      console.log(error);
      check = ''; 
    }else{
      check = decoded['name'];
    }
  });
  return check;
});

//엑세스 토큰의 페이로드를 응답해 줍니다.
exports.accessTokenPayload = (async (token) => {
  let tokenPayload = jwt.decode(token, {complete: true}).payload['name'];;
  return tokenPayload;
});

//리프레시 토큰을 인증해 줍니다.
exports.verifyRefreshToken = (async (token) => {
  let check, tokenPayload;
  jwt.verify(token, process.env.jwtSecretKey, (error, decoded) => {
    if(error){
      console.log(error);
      check = '';
    }
    else{
      check = decoded['pin'];
    }
  });
  return check;
});
