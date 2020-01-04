<template>
	<div id="coupon" class="cartao">
		<div class="informacoes">
			<strong>{{ coupon.title }} </strong>
			<span>Código:<b> {{coupon.code}}</b></span>
			<span>Loja:<b> {{coupon.companyName}}</b></span>
			<span>Descrição:<b> {{coupon.description}}</b></span>
		</div>
	</div>
</template>
<script>
  export default {
	props: ["coupon"]
  };
</script>