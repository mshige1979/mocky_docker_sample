# ベースイメージ
FROM node:12

# 作業ディレクトリ
WORKDIR /usr/src

# package.jsonをコピー
# ホスト側はDockerfileの場所からの相対パス
COPY ./app/package*.json ./

# パッケージインストール
RUN npm install --no-optional && npm cache clean --force
ENV PATH /usr/src/node_modules/.bin:$PATH

# 作業ディレクトリ
WORKDIR /usr/src/app

# ホスト側はDockerfileの場所からの相対パス
COPY ./app/. ./

# 実行
CMD ["npm", "start"]
