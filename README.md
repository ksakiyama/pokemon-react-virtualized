# やりたいこと
- [x] redux
- [x] redux-thunk
- [x] react-virtualized
- [ ] router, connected-react-router
- [ ] 種族値のchart、クリックで別ページへ遷移
- [x] 名前で検索
- [x] タイプで検索
- [x] 検索入力でバックスペースに対応（別のバグだった）
- [ ] AppBarを固定、下にスクロールするとAppBarの影に隠れる。タイプBarも。Keepを参考
- [x] グリッドを左寄せ
- [ ] styled-component (or classnames)
- [ ] タイプ検索のエリアをPagerではなく、もっと別の要素へ変更する
- [x] configure-store.jsはコピペなのでその理解
- [ ] サーバ構築
- [ ] redux-form

## デザイン検討
* 検索エリアとタイプボタン
  * AppBarを削除する
  * 検索エリアとタイプボタンをまとめたエリアを作成する
    * ボタンはどうするかなー
* AutoSizerのindex=0のときにボタンを表示させる
  * スクロールの中にボタンが移動するはず
* Material UIから離れてみる
  * 自前でカードくらい準備できる
  * 各パーツは別ライブラリでそれっぽいのがあるはず


## 優先事項
- [ ] デザインのシンプル化（個人的に納得いくレベルの一覧ができるまで）