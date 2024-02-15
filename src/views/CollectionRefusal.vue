<template>
  <div class="refusal">
    <h1>{{ refusal.title }}</h1>
    <p>{{ refusal.content }}</p>
  </div>
</template>

<script>
export default {
  setup() {
    const refusal = {
      title: "이메일무단수집거부",
      content:
        "정보통신망법 제50조에 의거하여 본 홈페이지에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적인 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반 시 정보통신망법에 의해 형사 처분됨을 유념하시기 바랍니다.",
    };

    return { refusal };
  },
};
</script>

<style>
.refusal {
  margin: 3% 0 3% 0;
}
</style>