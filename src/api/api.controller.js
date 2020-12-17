import mariadb from 'mariadb';//mariadb 사용 모듈
import redis from 'redis';//redis 사용 모듈
import dotenv from 'dotenv';//환경변수를 코드에서 제거하기 위한 모듈
dotenv.config();

import token from '../lib/token';//token 사용 모듈
import pin from '../lib/pin';//pin 사용 모듈
import mail from '../lib/email';//mail 사용 모듈

const client = redis.createClient();
const connection = mariadb.createPool({//db 연결용 변수, 내부 변수는 환경변수로 설정.
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});


exports.login = (async (ctx,next) => {// R
  const { id } = ctx.request.body;
  const { password } = ctx.request.body;
  let status,body,sql,sqlParams,acessToken,refreshToken,pin;

  sql = `SELECT name FROM user WHERE id = '?' AND password = '?';`;
  sqlParams = [id,password];

  await connection.query(sql, sqlParams,(err, rows) =>{
    if (err) {
      console.log(err);
    }
    if (rows[0] != undefined) {
      pin = await pin.makePin();
      acessToken = await token.signAccessToken(rows[0]['name']);
      refreshToken = await token.signRefreshToken(pin, rows[0]['name']);
      await client.set(rows[0]['name'], pin);
      status = 201;
      body = {
        acessToken,
        refreshToken
      };
    }else{
      status = 403;
      body = {
        errorMessage : "invalid_account",
        errorCode : "E101",
        errorDescription : "id 및 password가 일치하지 않음"
      };
    }

    connection.release();
  });

  ctx.status = status;
  ctx.body = body;
});

exports.refreshAccessToken = (async (ctx,next) => {// R
  const accessToken = await token.accessTokenPayload(ctx.request.body.accessToken);
  const refreshToken = await token.verifyRefreshToken(ctx.request.body.refreshToken);
  let status,body,token;

  if (refreshToken != '') {
    client.get(accessToken, async (err, value) => {
      if(err) throw err;
      if(value == refreshToken){
        token = await token.signAccessToken(accessToken);
        status = 201;
        body = { "accessToken" : token };
      }else{//잘못된 refresh 토큰 - 다른 사람의 토큰을 사용
        status = 403;
        body = {
        errorMessage : "invalid_grant",
        errorCode : "E301",
        errorDescription : "잘못된 refresh_token"
        };
      }
    });
  }else{//재 로그인 필요 - refresh 토큰 만료 - 잘못된 refresh 토큰과는 다르게 redis에서 삭제해줌
    client.del(accessToken);
    status = 403;
    body = {
      errorMessage : "invalid_grant",
      errorCode : "E301",
      errorDescription : "만료된 refresh_token"
    };
  }

  ctx.status = status;
  ctx.body = body;
});

exports.duplicateCheck = (async (ctx,next) => {// R
  const { option } = ctx.request.header;
  const { prameter } = ctx.request.header;
  let status,body,sql,sqlParams;

  if(option == 'id' || option == 'name'){
    sql = `SELECT num FROM user WHERE ? = '?';`;
    sqlParams = [option, prameter];
    await connection.query(sql, sqlParams,(err, rows) =>{
      if (err) {
        console.log(err);
      }
      if (rows[0] != undefined) {
        status = 200;
        body = {};
      }else{
        status = 403;
        body = {
          errorMessage : "invalid_account",
          errorCode : "E102",
          errorDescription : "이미 존재하는 계정"
        };
      }

      connection.release();
    });

  }else{
    status = 412;
    body = {
      errorMessage : "invalid_from",
      errorCode : "E401",
      errorDescription : "잘못된 형식의 요청"
    };
  }

  ctx.status = status;
  ctx.body = body;
});

exports.emailVerificationSend = (async (ctx,next) => {// R
  const { id } = ctx.request.body;
  let status,body,sql,sqlParams,check = 1;
  let pin = await pin.makePin(5);

  while (check) {
    client.get(pin, async (err, value) => {
      if(err) throw err;
      if(value != ''){
        pin = await pin.makePin(5);
        console.log(`pin = ${pin}`);
      }else{
        check = 0;
      }
    });
  }

  sql = `SELECT id FROM user WHERE id = '?';`;
  sqlParams = [id];
  await connection.query(sql, sqlParams,(err, rows) =>{
    if (err) {
      console.log(err);
    }
    if(rows[0] == undefined){
      await mail.sendMail(id, '이메일 인증 코드입니다.', pin);
      await client.set(pin, id);
      status = 201;
      body = {};
    }else{
      status = 403;
      body = {
        errorMessage : "invalid_account",
        errorCode : "E102",
        errorDescription : "이미 존재하는 계정"
      };
    }

    connection.release();
  });
  
  ctx.status = status;
  ctx.body = body;
});

exports.emailVerificationCheck = (async (ctx,next) => {// X
  let status,body,sql,sqlParams;

  ctx.status = status;
  ctx.body = body;
});

exports.signup = (async (ctx,next) => {// X
  let status,body,sql,sqlParams;

  ctx.status = status;
  ctx.body = body;
});

exports.profile = (async (ctx,next) => {// X
  let status,body,sql,sqlParams;

  ctx.status = status;
  ctx.body = body;
});

exports.userProfile = (async (ctx,next) => {// X
  let status,body,sql,sqlParams;

  ctx.status = status;
  ctx.body = body;
});

exports.deleteUser = (async (ctx,next) => {// X
  let status,body,sql,sqlParams;

  ctx.status = status;
  ctx.body = body;
});

exports.changeProfile = (async (ctx,next) => {// X
  let status,body,sql,sqlParams;

  ctx.status = status;
  ctx.body = body;
});
