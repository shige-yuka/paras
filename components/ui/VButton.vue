<template>
  <button :class="className"><slot /></button>
</template>

<script>
  export default {
    props: [
      'type',
      'size'
    ],
    data: function() {
      let key
      if(this.size && this.type) {
        key = this.size + this.type[0].toUpperCase() + this.type.slice(1)
      } else if (this.size) {
        key = this.size
      } else {
        key = this.type
      }
      const className = this.$style[key] ? this.$style[key] : this.$style.primary
      return {
        className: className
      }
    }
  }
</script>

<style module>

@import '../../assets/css/values.css';

.button {
  border-radius: 4px;
  padding: var(--xnarrow) var(--narrow);
  transition-duration: var(--speed-fast);
  transition-property: box-shadow background-color;
  cursor: pointer;
  font-size: .8rem;
}
.shadow:hover,
.shadow:focus {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);
  outline: none;
}
.shadow:active {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.primary {
  composes: button;
  composes: shadow;
  background: var(--primary);
  color: var(--base-white);
}
.flat {
  composes: button;
  color: var(--primary);
}
.flat:hover,
.flat:focus {
  background-color: var(--primary-light);
}
.outline {
  composes: button;
  composes: shadow;
  border: 2px solid var(--primary);
  background: var(--base-white);
  color: var(--primary);
}
.outlineFlat {
  composes: button;
  border: 2px solid var(--base-white);
  color: var(--base-white);
}
.outlineFlat:hover,
.outlineFlat:focus {
  background-color: var(--base-white-opacity);
}
</style>