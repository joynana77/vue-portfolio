import { defineStore } from 'pinia';

export const useAddressStore = defineStore('address', {
  state: () => ({
    zipCode: '',
    address: '',
  }),
  actions: {
    async getAddress() {
      try {
        const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${this.zipCode}`);
        // レスポンスがOK（HTTPステータスが200番台）かチェック
        if (!response.ok) {
          throw new Error(`API通信に失敗しました： ${response.status}`);
        }
        // レスポンスをJSON形式に変換
        const data = await response.json();

        if (data.results) {
          const results = data.results[0];
          this.address = `${results.address1}${results.address2}${results.address3}`;
        } else {
          this.address = '該当する住所は見つかりませんでした';
        }
        // console.log(data); //取得したデータを確認
      } catch (error) {
        console.error(error);
      }
    },
  }
});