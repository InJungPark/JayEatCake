<template>
  <div class="order">
    <h1>{{ order.title }}</h1>
    <div class="order-box">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="주문자명" id="inputDefault"><br>
        <input type="text" class="form-control" placeholder="주문번호(하이픈 '-' 포함)" id="inputDefault"><br>
        <input type="text" class="form-control" placeholder="비회원 주문 비밀번호" id="inputDefault">
      </div>
      <br>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-secondary" type="button">비회원 주문 조회</button>
      </div>
    <br>
    <p class="js_caution_msg2"><font-awesome-icon icon="fa-regular fa-lightbulb" />&nbsp;주문번호와 비밀번호를 잊으신 경우, 전화로 문의하여 주시기 바랍니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const order = {
      title: "주문하기"
    };

    return { order };
  },
};
</script>

<style>
.order-box {
  margin: 3% 0 3% 0;
}

.form-control {
  border: 1px solid #757575;
  width: 50%;
  margin: 0 auto;
}

.btn {
  opacity: 0.8;
}
</style>