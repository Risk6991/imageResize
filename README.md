# imageResize
画像加工の自動化ツール導入手順です。

◎プログラムをインストール。

node.js ...　サーバサイドjavaScript 管理ソフトを利用して様々なツール(ライブラリ)を利用できる。
https://nodejs.org/dist/v10.15.3/node-v10.15.3-x64.msi

ImageMagick ...　画像処理用のプラグイン。サーバーサイドでも動作可能。
https://imagemagick.org/download/binaries/ImageMagick-7.0.8-40-Q16-x64-static.exe


２つプログラムのインストールがおわったら
空の作業用フォルダ上で、シフト　＋　右クリック
CLI（パワーシェル または git bash）でバージョン確認のコマンド

node -v
npm -v

正常インストールの確認を行う。
同梱されているnpmフォルダの中身を作業フォルダに用意してください。

続けて下記コマンド入力

npm install
(実行ファイルの自動インストール)

以上で事前準備の完了です。


◎使い方
パワーシェル（またはgit bash）で、
npm run ****（コマンド）　で実行します。

以下4コマンド
・setup     ディレクトリ自動生成
・clean　   途中加工ファイルと出力ファイルをフォルダごと消します。
・resize　  リサイズのみ行います
・imagemin　圧縮のみ行います ※dist/images/ にオリジナル画像を入れる
・image     リサイズと圧縮を同時に行います。

ex. 
npm run setup　・・・　作業フォルダ内ディレクトリを自動生成します


●作業フォルダ----src-----images(加工したい元ファイルを入れる)

             |--output--images(作業完了後のファイルが収納されます)
             
             |--dist----images(作業途中のファイルが収納されます)

（node_modulesフォルダは触らないでください）



基本的には、src >> imagesフォルダに画像を入れて、

npm run image  

コマンドで width 600 にリサイズ後、画像圧縮をかけます。
リサイズされた画像を移動させたら、cleanコマンドで消します。
次回行う際は、setupコマンドでディレクトリを作り直します。



