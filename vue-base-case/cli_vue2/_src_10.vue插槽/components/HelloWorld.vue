<template>
  <div class="hello">
    <slot name="title" :dataS="slotData">
      <div>
        <h3>title</h3>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      slotData: [
        {
          title: '水果',
          lis: ['苹果', '香蕉', '橙子']
        },
        {
          title: '动物',
          lis: ['熊猫', '老鹰', '猴子']
        }
      ]
    }
  }
}
</script>