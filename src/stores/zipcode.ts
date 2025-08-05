import { defineStore } from 'pinia';

export const useAddressStore = defineStore('address', {
  state: () => ({
    zipCode: '',
    address: '',
    error: '', // エラーメッセージを管理する変数
  }),
  actions: {
    async getAddress() {
      // 毎回、検索開始時に状態をリセット
      this.address = '';
      this.error = '';

      if(this.zipCode.length !== 7) {
        this.error = '郵便番号は7桁で入力してください。';
        return;
      }

      try {
        const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${this.zipCode}`);
        // レスポンスがOK（HTTPステータスが200番台）かチェック
        if (!response.ok) {
          throw new Error(`API通信に失敗しました。： ${response.status}`);
        }
        // レスポンスをJSON形式に変換
        const data = await response.json();

        if (data.results) {
          const results = data.results[0];
          this.address = `${results.address1}${results.address2}${results.address3}`;
        } else {
          this.error = '該当する住所は見つかりませんでした。';
        }
        // console.log(data); //取得したデータを確認
      } catch (error) {
        this.error = 'API通信中にエラーが発生しました。';
      }
    },
  }
});