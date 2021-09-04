import fs from "fs";
import url from "url";
import querystring from "querystring";

export const getUser = {
  // ユーザ情報
  url: "/api/v01/user",
  method: "get",
  res: function (req, res, callback) {
    callback(null, {
      status: 200,
      body: JSON.stringify({
        aaa: 100,
      }),
    });
  },
};

export const getUsers = {
  // ユーザ一覧
  url: "/api/v01/users",
  method: "get",
  res: function (req, res, callback) {
    callback(null, {
      status: 200,
      body: JSON.stringify({
        users: [
          {
            name: "hoge",
          },
          {
            name: "foo",
          },
        ],
      }),
    });
  },
};
