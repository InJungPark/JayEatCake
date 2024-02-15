<template>
  <div class="cart" >
    <h1>{{ cart.title }}</h1>
      <main class="cart-main" style="padding: 64px 0px 0px;" data-booted="true">
        <div class="v-main__wrap">
          <div data-v-f65078f2="">
          <form data-v-f65078f2="" action="#" class="formBox">
            <div data-v-f65078f2="" class="checkAllBox">
              <input data-v-f65078f2="" type="checkbox" id="checkAll">
              <label data-v-f65078f2="" for="checkAll">전체 선택</label>
            </div>
            <button data-v-f65078f2="" class="deleteBtn">선택 삭제</button>
          </form>
          <div data-v-f65078f2="" class="sum_wrap">
            <div data-v-f65078f2="" class="sum_pd_price">
              <p data-v-f65078f2="">총 상품 금액</p>
              <p data-v-f65078f2="">0원</p>
            </div>
            <div data-v-f65078f2="" class="sum_all">
              <p data-v-f65078f2="">결제 예정 금액</p>
              <p data-v-f65078f2="">원</p>
            </div>
          </div>
          <div data-v-f65078f2="" class="btn_wrap">
            <button class="btn btn-outline-warning" data-v-f65078f2="">결제 하기</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  setup() {
    const cart = {
      title: "장바구니"
    };

    return { cart };
  },
};
</script>

<style>
.cart-main {
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  transition: .2s cubic-bezier(.4,0,.2,1)
}

.v-main:not([data-booted=true]) {
    transition: none!important
}

.v-main__wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative
}

@-moz-document url-prefix() {
  @media print {
    .v-main {
        display: block
    }
  }
}

.cart_item[data-v-f65078f2] {
  width: 100%;
  background: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 7%;
  align-items: center;
  justify-content: space-between
}

.cart_item img[data-v-f65078f2] {
  width: 100px
}

.cartInInfo_wrap p[data-v-f65078f2] {
  margin-bottom: 5px
}

.cartInInfo_wrap p[data-v-f65078f2]:first-of-type {
  font-size: 17px;
  font-weight: 500
}

.cartInInfo_wrap p[data-v-f65078f2]:last-of-type {
  margin-bottom: 0
}

.btn_wrap[data-v-f65078f2] {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.btn_wrap button[data-v-f65078f2] {
  padding: 10px 15px;
  width: 44%
}

.btn_wrap button[data-v-f65078f2]:last-of-type {
  color: black;
}

form input[data-v-f65078f2] {
    width: 20px;
    height: 20px
}

.formBox {
  margin: 1%;
}

.formBox[data-v-f65078f2] {
    padding: 0 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between
}

.formBox .checkAllBox[data-v-f65078f2] {
    display: flex;
    gap: 5%
}

.formBox>button[data-v-f65078f2],.formBox>div[data-v-f65078f2] {
    width: 30%
}

.deleteBtn[data-v-f65078f2] {
    text-align: end;
    border: none;
}

.sum_wrap>div[data-v-f65078f2] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px
}

.sum_wrap>div p[data-v-f65078f2]:last-of-type {
  font-size: 17px;
  font-weight: 500
}

.sum_wrap p[data-v-f65078f2] {
  margin-bottom: 0
}

.sum_wrap .sum_all[data-v-f65078f2] {
  margin: 0 20px;
  padding: 20px 0;
  border-top: 2px solid #ccc
}
</style>