<template>
  <div class="absolute-center text-center">
      <brand />

      <div class="title">
        Almost done!
      </div>
      <p>
        Just a few more seconds as we are creating your account.
      </p>
      <p>
        You will receive an email with a link to confirm your registration.
      </p>
    </div>
  </div>
</template>

<script>
import { Brand } from '../app'

export default {
  name: 'registration-complete',
  components: {
    Brand
  }
}
</script>

<style lang="stylus" scoped>
  .title {
    margin: 10px;
  }
</style>
