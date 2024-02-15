<template>
  <div class="product">
    <h1>{{ product.title }}</h1>
    <div class="product-box">
      <div class="form-group">
        <label class="col-xs-2" for="inputDefault">주문자 성함</label>
        <input type="text" class="form-control" placeholder="주문자명" id="inputDefault">
        <label class="col-form-label mt-2" for="inputDefault">주문 번호</label>
        <input type="text" class="form-control" placeholder="주문번호(하이픈 '-' 포함)" id="inputDefault">
        <label class="col-form-label mt-2" for="inputDefault">비회원 주문 비밀번호</label>
        <input type="text" class="form-control" placeholder="비회원 주문 비밀번호" id="inputDefault">
      </div>
      <br>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-info" type="button">비회원 주문 조회</button>
      </div>
    <br>
    <p class="js_caution_msg2"><font-awesome-icon icon="fa-regular fa-lightbulb" />&nbsp;주문번호와 비밀번호를 잊으신 경우, 전화로 문의하여 주시기 바랍니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const product = {
      title: "결제하기",
      name: "주문이름"
    };

    return { product };
  },
};
</script>

<style>
.product-box {
  margin: 3% 0 3% 0;
}

.form-control {
  text-align: center;
  border: 1px solid #757575;
  width: 50%;
  margin: 0 auto;
}
</style>